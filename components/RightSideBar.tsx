import React from "react";
import {
  FaJava,
  FaPhp,
  FaNodeJs,
  FaEnvelope,
  FaBell,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function RightSideBar() {
  const data = [
    { icon: <IoLogoJavascript />, text: "Javascript" },
    { icon: <FaJava />, text: "Java" },
    { icon: <FaPhp />, text: "PHP" },
    { icon: <FaNodeJs />, text: "Nodejs" },
    { icon: <FaBell />, text: "Nextjs" },
    { icon: <FaQuestionCircle />, text: "Rust" },
  ];

  return (
    <>
      <div
        className="ms-3"
        style={{ height: "90vh", overflowY: "scroll", overflowX: "hidden" }}
      >
        <h1 className="text-lg font-bold mt-2 ms-1">Top courses</h1>
        <div>
          <div className=" -mx-4 mt-4">
            {data.map((item) => (
              <div key={item.text} className="w-full md:w-1/2 px-4 mb-4">
                <div
                  className="border-3 py-1  rounded-md shadow-md flex justify-between items-center pe-4"
                  style={{ width: "15rem", border: "1px solid #e5e7eb" }}
                >
                  <div className="flex items-center my-5 ps-4 cursor-pointer">
                    {item.icon}
                    <span className="text-gray-700 font-medium text-lg ms-2 hover:text-orange-500">
                      {item.text}
                    </span>
                  </div>
                  <div>
                    <MdKeyboardArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
