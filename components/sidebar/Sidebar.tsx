/* eslint-disable no-unused-vars */
import React from "react";
import "../../public/assets/styles/Sidebar.scss";
import { Button } from "@/components/ui/button";
import { Mail, Home, Users, Star, Tag, User, HelpCircle, LogIn, ChevronRight, ChevronLeft } from "lucide-react";
function SideNavbar() {
    return (
        <>
            <div className="sticky top-[92px] flex shadow-sm" style={{ height: "calc(100vh - 92px)" }}>
                <aside className=" flex w-64 flex-col  justify-between p-3 shadow-sm sm:p-4" style={{ backgroundColor: `var(--Header-color)` }}>
                    <div className="flex flex-col  gap-2 overflow-y-auto ">
                        <Button variant="blue" className="flex w-full justify-center  p-[24px] font-bold sm:justify-start">
                            <Home className="mr-2 w-4" /><span className=" hidden sm:flex ">Home</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full justify-center py-[24px] sm:justify-start" >
                            <Users className="mr-2 w-4" /><span className=" hidden sm:flex">Community</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full justify-center py-[24px] sm:justify-start">
                            <Star className="mr-2 w-4" /><span className=" hidden sm:flex">Collections</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full justify-center py-[24px] sm:justify-start" >
                            <Tag className="mr-2 w-4" /><span className=" hidden sm:flex">Tags</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full justify-center py-[24px] sm:justify-start">
                            <User className="mr-2 w-4" /><span className=" hidden sm:flex">Profile</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full justify-center py-[24px] sm:justify-start" >
                            <HelpCircle className="mr-2 w-4" /><span className=" hidden sm:flex">Ask Questions</span>
                        </Button>
                    </div>
                    <div className=" flex flex-col  gap-2 ">
                        <Button variant="outline" className="flex w-full justify-center py-[24px]">
                            <LogIn className="mr-2 w-4" />  <span className=" hidden sm:flex">Login with Email</span>
                        </Button>
                        <Button variant="blue" className=" flex w-full  justify-center py-[24px]" >
                            <Mail className="mr-2 w-4" /> <span className=" hidden sm:flex"> Sign up </span>
                        </Button>
                    </div>
                </aside>
                {/* <div className=" flex ml-1 items-center justify-center" >
                    <Button variant='ghost' className='p-2 rounded-full   ' > <ChevronRight /> </Button>
                </div> */}
            </div>
        </>
    );
}

export default SideNavbar;
