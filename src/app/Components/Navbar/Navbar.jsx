"use client";

import NavLinks from "./NavLinks";
import Button from "../Button";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from 'react-icons/io5';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" fixed bg-transparent  w-full top-0 z-20 bg-blue backdrop-filter backdrop-blur-2xl  border-b border-gray-200">
      <div className="flex items-center font-medium justify-around">
        <div className=" p-2 md:w-auto w-full flex justify-between">
          <h1 className="font-[Poppins] font-bold text-4xl">DressDazzle</h1>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
     {open ? <IoClose /> : <IoMenu />} {/* Use the React icons */}
</div>
        </div>
        <ul className="md:flex text-black font-semibold hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-7">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;