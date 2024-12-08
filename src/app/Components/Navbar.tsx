import Image from "next/image";
import ProfilePic from "@/app/assets/ProfilePicture.png";
import { IoSettingsSharp, IoNotifications } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";


export default function Navbar() {
  return (
    <div className="w-[1440px] h-[124px] relative bg-white border border-[#c3d4e9]/40">
      <div className="w-[148px] h-11 left-[60px] top-[40px] absolute text-[#3563e9] text-[32px] font-bold leading-[48px]">
        MORENT
      </div>
      <div className="w-[492px] h-11 left-[272px] top-[40px] absolute">
        <div className="w-[492px] h-11 left-0 top-0 absolute bg-white rounded-[70px] border border-[#c3d4e9]/40" />
        <input
          type="text"
          placeholder="Search something here"
          className="w-[250px] h-6 left-[64px] top-[12px] absolute text-justify text-[#596780] text-sm font-medium leading-[21px]"
        />
        <div className="w-6 h-6 left-[20px] top-[10px] absolute">
          <div className="w-6 h-6 left-0 top-0 absolute">
            <RiSearch2Line className="w-6 h-6 text-[#596780]" />
          </div>
        </div>
        <div className="w-6 h-6 left-[448px] top-[10px] absolute">
          <div className="w-6 h-6 left-0 top-0 absolute">
            <VscSettings className="w-6 h-6 text-[#596780]" />
          </div>
        </div>
      </div>

      <div className="left-[1172px] top-[40px] absolute justify-start items-start gap-5 inline-flex">
        <div className="w-11 h-11 relative">
          <div className="w-6 h-6 left-[10px] top-[10px] absolute">
            <div className="w-6 h-6 left-0 top-0 absolute">
              <IoMdHeart className="w-6 h-6 text-[#596780]" />
            </div>
          </div>
          <div className="w-11 h-11 left-0 top-0 absolute opacity-80 rounded-[90px] border border-[#c3d4e9]/40" />
        </div>
        <div className="w-11 h-11 relative">
          <div className="w-6 h-6 left-[10px] top-[10px] absolute">
            <div className="w-6 h-6 left-0 top-0 absolute">
              <IoNotifications className="w-6 h-6 text-[#596780]" />
            </div>
          </div>
          <div className="w-11 h-11 left-0 top-0 absolute opacity-80 rounded-[90px] border border-[#c3d4e9]/40" />
          <div className="w-[11px] h-[11px] left-[31px] top-[2px] absolute bg-[#ff4423] rounded-full" />
        </div>
        <div className="w-11 h-11 relative">
          <div className="w-6 h-6 left-[10px] top-[10px] absolute">
            <div className="w-6 h-6 left-0 top-0 absolute">
              <IoSettingsSharp className="w-6 h-6 text-[#596780]" />
            </div>
          </div>
          <div className="w-11 h-11 left-0 top-0 absolute opacity-80 rounded-[90px] border border-[#c3d4e9]/40" />
        </div>
        <Image src={ProfilePic} alt="Profile Picture" />
      </div>
    </div>
  );
}
