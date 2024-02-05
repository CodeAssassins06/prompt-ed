import React from "react";
import {
  FaJava,
  FaPhp,
  FaNodeJs,
  FaBell,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./ui/button";
export default function RightSideBar() {
  const data = [
    { icon: <IoLogoJavascript className="size-[24px]" />, text: "Javascript", isActive: true },
    { icon: <FaJava className="size-[24px]" />, text: "Java", isActive: false },
    { icon: <FaPhp className="size-[24px]" />, text: "PHP", isActive: false },
    { icon: <FaNodeJs className="size-[24px]" />, text: "Nodejs", isActive: false },
    { icon: <FaBell className="size-[24px]" />, text: "Nextjs", isActive: false },
    { icon: <FaQuestionCircle className="size-[24px]" />, text: "Rust", isActive: false },
  ];

  return (
    <>
      <div className="sticky top-[92px] flex flex-col p-4 shadow-lg" style={{ height: "calc(100vh - 92px)" }}>
        {data.map((item) => (
          <Button key={item.text} variant={`${item.isActive ? "blue" : "ghost"}`} className="m-2 flex w-full  justify-center p-[24px] font-bold sm:justify-start">

            {item.icon}
            <div className="px-4 text-lg font-semibold">
              {item.text}
            </div>
            <MdKeyboardArrowRight className="size-[24px]" />
          </Button>
        ))}
      </div>
    </>
  );
}
