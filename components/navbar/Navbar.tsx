/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/classnames-order */
"use client";
import "../../public/assets/styles/Navbar.scss";
import React, { useState, useRef } from "react";
import { BiX } from "react-icons/bi";
import { ModeToggle } from "../theme/Toggle";
import { Search, X } from 'lucide-react';
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [query, setquery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");

  const searchQueryHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.length > 0) {
      setText(event.currentTarget.value);
      setquery("");
      inputRef.current?.blur();
    }
  };

  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav
      className=" shadow-sm sticky top-0 px-8 py-4"
      style={{ backgroundColor: `var(--Header-color)` }}
    >
      <div className="flex items-center gap-2 justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/command-outline-alerted-svgrepo-com (2).png"
              alt="Next.js Icon"
              width={40}
              height={40}
            />
            <p className=" sm:flex hidden font-bold text-xl ">
              <span className="text-[#205ce9]">Prompt</span>ed
            </p>
          </div>
        </Link>
        <div className="flex gap-2">
          <Link href="/dashboard">
            Dashboard
          </Link>
          <Link href="/tutorials">
            Tutorials
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
      {/* <div className="container mx-auto flex justify-between items-center  sm:w-11/12 p-6">
        <Link href="/">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/command-outline-alerted-svgrepo-com (2).png"
              alt="Next.js Icon"
              width={40}
            />
            <p className=" sm:flex hidden font-bold text-xl ">
              <span className="text-[#205ce9]">Prompt</span>ed
            </p>
          </div>
        </Link>
        <div className="flex  lg:justify-between items-center justify-end lg:gap-0 gap-2 w-2/3   ">
          <div
            className="md:flex hidden items-center search-input-header-div  "
            style={{ backgroundColor: `var(--Input-color)` }}
          >
            <div>
              <input
                type="text"
                placeholder="Search"
                className="search-input-header px-3 font-medium"
                value={query}
                onChange={(event) => setquery(event.target.value)}
                onKeyUp={searchQueryHandler}
                ref={inputRef}
              />
            </div>
            <div>
              <Search
                size={22}
                style={{ strokeWidth: "2" }}
                onClick={handleSearchClick}
              />
            </div>
          </div>

          <div className="md:hidden flex   items-center search-input-header-div h-[2.65rem]" style={{ backgroundColor: `var(--Input-color)` }}>
            <div >
              {searchVisible && (
                <div>
                  <input

                    type="text"
                    placeholder="Search"
                    className="search-input-header px-3 font-medium"
                    value={query}
                    onChange={(event) => setquery(event.target.value)}
                    onKeyUp={searchQueryHandler}
                    ref={inputRef}
                    autoFocus={true}
                  />
                </div>
              )}
            </div>
            <div>
              {searchVisible ? (
                <X
                  size={28}
                  style={{ strokeWidth: "2" }}
                  onClick={handleSearchClick}
                />
              ) : (
                <div >
                  <Search

                    size={22}
                    style={{ strokeWidth: "2" }}
                    onClick={handleSearchClick}
                  />
                </div>

              )}
            </div>
          </div>
          <div className="flex items-center gap-4">

            {!searchVisible && <ModeToggle />}

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
