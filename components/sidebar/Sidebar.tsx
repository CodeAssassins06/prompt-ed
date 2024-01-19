/* eslint-disable no-unused-vars */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
import React from "react";
import "../../public/assets/styles/Sidebar.scss";
import { Button } from "@/components/ui/button";
import { Mail, Home, Users, Star, Tag, User, HelpCircle, LogIn, ChevronRight, ChevronLeft } from "lucide-react";
function SideNavbar() {
    return (
        <>
            <div className="flex    shadow-sm " style={{ height: "calc(100vh - 92px)" }}>
                <aside className=" sm:p-4 p-3 w-64  flex flex-col justify-between shadow-sm" style={{ backgroundColor: `var(--Header-color)` }}>
                    <div className="flex flex-col  gap-2 overflow-y-auto ">
                        <Button variant="blue" className="flex w-full font-bold  sm:justify-start justify-center p-[24px]">
                            <Home className="w-4 mr-2" /><span className=" sm:flex hidden ">Home</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full sm:justify-start justify-center py-[24px]" >
                            <Users className="w-4 mr-2" /><span className=" sm:flex hidden">Community</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full sm:justify-start justify-center py-[24px]">
                            <Star className="w-4 mr-2" /><span className=" sm:flex hidden">Collections</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full sm:justify-start justify-center py-[24px]" >
                            <Tag className="w-4 mr-2" /><span className=" sm:flex hidden">Tags</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full sm:justify-start justify-center py-[24px]">
                            <User className="w-4 mr-2" /><span className=" sm:flex hidden">Profile</span>
                        </Button>
                        <Button variant="ghost" className="flex w-full sm:justify-start justify-center py-[24px]" >
                            <HelpCircle className="w-4 mr-2" /><span className=" sm:flex hidden">Ask Questions</span>
                        </Button>
                    </div>
                    <div className=" flex flex-col  gap-2 ">
                        <Button variant="outline" className="flex w-full justify-center py-[24px]">
                            <LogIn className="w-4 mr-2" />  <span className=" sm:flex hidden">Login with Email</span>
                        </Button>
                        <Button variant="blue" className=" flex w-full  justify-center py-[24px]" >
                            <Mail className="w-4 mr-2" /> <span className=" sm:flex hidden"> Sign up </span>
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
