import Image from "next/image";
import ProfilePic from "@/app/assets/ProfilePicture.png";
import { IoSettingsSharp, IoNotifications } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";

export default function Navbar() {
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

        {/* Heart Icon */}
        <div className="relative w-11 h-11 hidden sm:flex">
          <IoMdHeart className="absolute w-6 h-6 left-[10px] top-[10px] text-[#596780]" />
          <div className="w-full h-full opacity-80 rounded-full border border-[#c3d4e9]/40" />
        </div>

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
        <Image src={ProfilePic} alt="Profile Picture" className="w-7 h-7 sm:w-11 sm:h-11 mt-[-170px] sm:mt-0 ml-64 sm:ml-0 rounded-full" />

      </div>
    </div>
  );
}
