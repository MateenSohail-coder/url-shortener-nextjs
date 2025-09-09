"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (href) =>
    `flex cursor-pointer before:content-[""] before:bg-[#0ec076] before:relative flex-col-reverse before:rounded-full before:transition-all duration-1000 before:bottom-0 before:h-1 before:w-0 hover:before:w-full hover:text-[#0ec076]
     ${pathname === href ? "text-[#0ec076] before:w-full " : ""}`;

  return (
    <div>
      <nav className="bg-[#57F1B1] py-5 px-4 flex flex-col md:flex-row items-center justify-between border-b-2 border-b-[#0ec076]">
        <div className="brand text-3xl text-amber-50 font-mono font-extrabold tracking-widest">
          MintLinks
        </div>

        <ul className="flex gap-4 md:gap-6.5 text-white tracking-tighter text-sm md:text-xl">
          <li>
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClasses("/about")}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/shorten" className={linkClasses("/shorten")}>
              Shorten
            </Link>
          </li>
          <li>
            <Link href="/contact" className={linkClasses("/contact")}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-3 text-white mt-3 md:mt-0">
          <Link href="/github">
            <button className="py-2 px-2 cursor-pointer active:scale-[0.96] transition-all border-2 border-white hover:bg-white hover:text-[#0ec076]  active:bg-white active:text-[#0ec076] bg-[#0ec076] text-[14px] tracking-normal font-bold rounded-2xl shadow-xs  shadow-white">
              Github
            </button>
          </Link>
          <Link href="/shorten">
            <button className="py-2 px-2 cursor-pointer active:scale-[0.96] transition-all border-2 border-white hover:bg-white hover:text-[#0ec076]  active:bg-white active:text-[#0ec076] bg-[#0ec076] text-[14px] tracking-normal font-bold rounded-2xl shadow-xs  shadow-white">
              Try Now
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
