"use client"
import React, { useEffect, useState } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
interface Props {
  title: string;
  learningPath: any[];
}
export default function SideBar({ title, learningPath }: Props) {
  const [activeId, setActiveId] = useState<Number>(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "q",
      value: String(activeId),
    });
    router.push(newUrl, { scroll: false });
  }, [activeId, router, searchParams]);
  return (
    <>
      <div className="background-light800_dark400 sticky right-0 top-0 z-10 h-full overflow-y-scroll shadow-lg" >
        <div className="flex flex-col p-4">

          <h1 className="text-center text-xl font-bold capitalize ">{title}</h1>
          {learningPath.map((item, index) => (
            <Button onClick={() => { setActiveId(index); }} key={index} className={`${activeId === index ? "bg-primary-500/80" : ""} m-2 flex w-full justify-between py-[24px] font-bold hover:bg-light-400/50 dark:hover:bg-dark-300 `}>
              <div className="flex items-center">
                <div className="text-dark300_light700 line-clamp-1 max-w-[300px] px-2 text-base font-semibold">
                  {item.title}
                </div>
              </div>
              <MdKeyboardArrowRight className="size-[24px] items-end" />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
