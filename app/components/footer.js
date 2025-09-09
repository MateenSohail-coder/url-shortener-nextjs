"use client";
import React from "react";
import Link from "next/link";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-[#57F1B1] px-3 py-5 border-t-2 border-t-[#0ec076]">
        <div className="font-mono font-bold text-xl text-white">
          &copy; copyright {year}.All rights reserve.
        </div>
        <p className="text-neutral-200 text-sm">
          Made by <b>ABDUL MATEEN</b>
        </p>
        <ul className="flex text-[#0ec076] gap-3 flex-wrap">
          <Link href="/">
            <li className="hover:underline underline-offset-5 cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:underline underline-offset-5 cursor-pointer">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:underline underline-offset-5 cursor-pointer">
              Contact
            </li>
          </Link>
          <Link href="/shorten">
            <li className="hover:underline underline-offset-5 cursor-pointer">
              Shorten
            </li>
          </Link>
        </ul>
      </footer>
    </div>
  );
}
