"use client"
import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./ui/button";
interface Props {
  title: string;
  learningPath: any[];
  activeId: number;
  setActiveTutId: any;
  setIsCheck: any;
}
export default function RightSideBar({ title, learningPath, activeId, setActiveTutId, setIsCheck }: Props) {
  return (
    <>
      <div className="sticky top-[92px] flex flex-col p-4 shadow-lg" style={{ height: "calc(100vh - 92px)" }}>
        <h1 className="text-center text-xl font-bold capitalize text-gray-900">{title}</h1>
        {learningPath.map((item, index) => (
          <Button onClick={() => { setActiveTutId(index); setIsCheck(false) }} key={index} variant={`${activeId === index ? "blue" : "ghost"}`} className="m-2 flex w-full justify-between py-[24px] font-bold">
            <div className="flex items-center">
              <div className="px-4 text-base font-semibold">
                {item.title}
              </div>
            </div>
            <MdKeyboardArrowRight className="size-[24px] items-end" />
          </Button>
        ))}
      </div>
    </>
  );
}
