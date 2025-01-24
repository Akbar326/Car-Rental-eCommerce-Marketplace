"use client";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import ProfilePic from "@/app/assets/ProfilePicture.png";
import { IoSettingsSharp, IoNotifications } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Close dropdown on outside click
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full h-[124px] bg-white sm:border border-[#c3d4e9]/40 px-8">

      {/* Logo */}
      <div className="mt-5 mr-[190px] sm:mt-0 sm:mr-0 text-[#3563e9] text-2xl sm:text-[32px] font-bold mb-4 sm:mb-0">
        MORENT
      </div>

      {/* Search Bar */}
      <div className="relative w-full sm:w-[492px] h-11 mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full h-full bg-white rounded-[70px] border border-[#c3d4e9]/40 pl-10 pr-10 text-[#596780] text-sm font-medium"/>
        <RiSearch2Line className="absolute w-6 h-6 left-2 top-1/2 transform -translate-y-1/2 text-[#596780]" />
        <VscSettings className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-[#596780]" />
      </div>

      {/* Icons and Profile Picture */}
      <div className="flex items-center gap-5">

        {/* Whishlist Icon */}
        <Link href="/Wishlist" className="relative w-11 h-11 hidden sm:flex">
          <IoMdHeart className="absolute w-6 h-6 left-[10px] top-[10px] text-[#596780]" />
          <div className="w-full h-full opacity-80 rounded-full border border-[#c3d4e9]/40" />
        </Link>

        {/* Notification Icon */}
        <div className="relative w-11 h-11 hidden sm:flex">
          <IoNotifications className="absolute w-6 h-6 left-[10px] top-[10px] text-[#596780]" />
          <div className="w-full h-full opacity-80 rounded-full border border-[#c3d4e9]/40" />
          <div className="absolute left-[31px] top-[2px] w-[11px] h-[11px] bg-[#ff4423] rounded-full" />
        </div>

        {/* Settings Icon */}
        <div className="relative w-11 h-11 hidden sm:flex">
          <IoSettingsSharp className="absolute w-6 h-6 left-[10px] top-[10px] text-[#596780]" />
          <div className="w-full h-full opacity-80 rounded-full border border-[#c3d4e9]/40" />
        </div>

        {/* Profile Picture */}
            <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* User Menu Button */}
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <Image src={ProfilePic} alt="Profile Picture" className="w-7 h-7 sm:w-11 sm:h-11 mt-[-100px] sm:mt-0 ml-64 sm:ml-0 rounded-full" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div ref={dropdownRef} className="absolute top-full mt-[-70px] sm:mt-2 right-0 z-50 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="/Dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >Dashboard</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

      </div>
    </div>
  );
}
