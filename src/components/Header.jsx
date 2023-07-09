"use client";
import React from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { HiBell, HiChat } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex items-center p-2 gap-2">
      <Image
        src="/pinterest-logo.png"
        alt="pinterest-logo"
        width={60}
        height={60}
        className="hover:bg-gray-300 rounded-full cursor-pointer p-2"
      />
      <button className="bg-black rounded-full text-white py-2 px-4">
        Home
      </button>
      <button className="bg-black rounded-full text-white py-2 px-4">
        Create
      </button>
      <div className="flex flex-1 items-center border p-1 rounded-lg">
        <BiSearch size={25} className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none flex-1"
        />
      </div>
      <HiBell size={30} className="cursor-pointer text-gray-500" />
      <HiChat size={30} className="cursor-pointer text-gray-500" />
      <Image
        src="/profile.png"
        alt="profile-logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 rounded-full cursor-pointer p-2"
      />
    </header>
  );
};

export default Header;
