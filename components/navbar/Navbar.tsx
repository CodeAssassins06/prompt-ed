
"use client";
import "../../public/assets/styles/Navbar.scss";
import React from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";
import { usePathname } from "next/navigation";
const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav
      className="background-light900_dark200 text-dark200_light800 fixed top-0 z-10 flex w-full items-center justify-between gap-2 px-8 shadow-sm"
    >
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/command-outline-alerted-svgrepo-com (2).png"
            alt="Next.js Icon"
            width={40}
            height={40}
          />
          <p className=" hidden text-xl font-bold sm:flex ">
            <span className="text-primary-500">Prompt</span>ed
          </p>
        </div>
      </Link>
      <div className="flex gap-4">
        <SignedIn>
          <Link href="/" className={`${pathname === "/" && "border-b-4 border-primary-500 bg-light-800 dark:bg-dark-300"} h3-bold px-2 py-4 hover:bg-light-800 dark:hover:bg-dark-300`}>
            Home
          </Link>
          <div className="flex gap-4">
            <Link href="/dashboard" className={`h3-bold ${pathname === "/dashboard" && "border-b-4 border-primary-500  bg-light-800 dark:bg-dark-300"} px-2 py-4 hover:bg-light-800 dark:hover:bg-dark-300`}>
              Dashboard
            </Link>
            <Link href="/courses" className={`h3-bold ${pathname === "/courses" && "border-b-4 border-primary-500  bg-light-800 dark:bg-dark-300"} px-2 py-4 hover:bg-light-800 dark:hover:bg-dark-300`}>
              Courses
            </Link>
          </div>
        </SignedIn>
      </div>
      <div className="flex items-center gap-4 px-2 py-4">
        <Theme />
        <SignedOut>
          <SignUpButton mode="modal">Register</SignUpButton>
          <SignInButton mode="modal">Sign In</SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
