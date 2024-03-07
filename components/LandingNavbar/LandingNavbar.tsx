"use client"
import React, { useEffect, useState } from "react";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { styles } from "../styles/styles";
import { navLinks } from "@/constants";

const LandingNavbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } fixed top-0 z-20 flex w-full items-center py-5 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="hidden w-full list-none flex-row justify-end gap-10 sm:flex">
          <SignedOut>
            <SignUpButton mode="modal">Register</SignUpButton>
            <SignInButton mode="modal">Sign In</SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <Image
            src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            height={28}
            width={28}
            className="size-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
