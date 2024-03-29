"use client"
import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import { languageOptions } from "@/constants/languageOptions";
import { defineTheme } from "@/lib/defineThemes";
import useKeyPress from "@/hooks/useKeyPress";
import { classnames } from "@/lib/utils";


interface themeParams {
    value?: string;
    label?: string;
}

const Landing = ({ codeInput }: any) => {
    const [code, setCode] = useState(codeInput);
    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [theme, setTheme] = useState<themeParams>({});
    const [language, setLanguage] = useState(languageOptions[0]);

    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");

    const onSelectChange = (sl: any) => {
        console.log("selected Option...", sl);
        setLanguage(sl);
    };

    useEffect(() => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
            handleCompile();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ctrlPress, enterPress]);
    const onChange = (action: any, data: any) => {
        switch (action) {
            case "code": {
                setCode(data);
                break;
            }
            default: {
                console.warn("case not handled!", action, data);
            }
        }
    };
    const handleCompile = () => {
        setProcessing(true);
        const formData = {
            language_id: language.id,
            // encode source code in base64
            source_code: btoa(code),
            stdin: btoa(customInput),
        };
        const options = {
            method: "POST",
            url: process.env.NEXT_PUBLIC_RAPID_API_URL,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
                "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
                "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            },
            data: formData,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log("res.data", response.data);
                const token = response.data.token;
                checkStatus(token);
            })
            .catch((err) => {
                const error = err.response ? err.response.data : err;
                setProcessing(false);
                console.log(error);
            });
    };

    const checkStatus = async (token: any) => {
        const options = {
            method: "GET",
            url: process.env.NEXT_PUBLIC_RAPID_API_URL + "/" + token,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
                "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            },
        };
        try {
            const response = await axios.request(options);
            const statusId = response.data.status?.id;

            // Processed - we have a result
            if (statusId === 1 || statusId === 2) {
                // still processing
                setTimeout(() => {
                    checkStatus(token)
                }, 2000)
            } else {
                setProcessing(false)
                setOutputDetails(response.data)
                showSuccessToast(`Compiled Successfully!`)
                console.log('response.data', response.data)
            }
        } catch (err) {
            console.log("err", err);
            setProcessing(false);
            showErrorToast();
        }
    };

    function handleThemeChange(th: any) {
        const theme = th;
        console.log("theme...", theme);

        if (["light", "vs-dark"].includes(theme.value)) {
            setTheme(theme);
        } else {
            defineTheme(theme.value).then((_) => setTheme(theme));
        }
    }
    useEffect(() => {
        defineTheme("oceanic-next").then((_: any) =>
            setTheme({ value: "oceanic-next", label: "Oceanic Next" })
        );
    }, []);

    const showSuccessToast = (msg: any) => {
        toast.success(msg || `Compiled Successfully!`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const showErrorToast = (msg?: any) => {
        toast.error(msg || `Something went wrong! Please try again.`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
            <div className="flex flex-row">
                <div className="px-4 py-2">
                    <LanguagesDropdown onSelectChange={onSelectChange} />
                </div>
                <div className="px-4 py-2">
                    <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
                </div>
            </div>
            <div className="flex flex-row items-start space-x-4 p-4">
                <div className="flex size-full flex-col items-end justify-start">
                    <CodeEditorWindow
                        code={code}
                        onChange={onChange}
                        language={language?.value}
                        theme={theme.value}
                    />
                </div>

                <div className="flex w-[30%] shrink-0 flex-col">
                    <OutputWindow outputDetails={outputDetails} />
                    <div className="flex flex-col items-end">
                        <CustomInput
                            customInput={customInput}
                            setCustomInput={setCustomInput}
                        />
                        <button
                            onClick={handleCompile}
                            disabled={!code}
                            className={classnames(
                                "z-10 mt-4 shrink-0 rounded-md border-2 border-black bg-white px-4 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 hover:shadow",
                                !code ? "opacity-50" : ""
                            )}
                        >
                            {processing ? "Processing..." : "Compile and Execute"}
                        </button>
                    </div>
                    {outputDetails && <OutputDetails outputDetails={outputDetails} />}
                </div>
            </div>
        </>
    );
};
export default Landing;