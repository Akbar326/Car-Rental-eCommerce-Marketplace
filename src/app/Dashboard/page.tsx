import Image from "next/image"
import Chart from "@/app/assets/Chart.png"
import Map from "@/app/assets/Maps.png"
import NissanGTR from "@/app/assets/NissanGTRDashboard.png"
import NissanGTR2 from "@/app/assets/NissanGTR.png"
import Koeingsegg from "@/app/assets/Koenigsegg.png"
import RollsRyce from "@/app/assets/RollsRoyce.png"
import CRV from "@/app/assets/CRV.png"
 
import { RiHome5Fill } from "react-icons/ri"; // <RiHome5Fill /> Dashboard
import { AiOutlineCar } from "react-icons/ai"; // <AiOutlineCar />  Car Rent
import { CgInsights } from "react-icons/cg"; // <CgInsights /> Insight
import { IoWalletOutline } from "react-icons/io5"; // <IoWalletOutline /> Reimburse
import { BiMessageDots } from "react-icons/bi"; // <BiMessageDots /> inbox
import { LuCalendarDays } from "react-icons/lu"; // <LuCalendarDays /> Callendar
import { RiSettingsLine } from "react-icons/ri"; // <RiSettingsLine /> setting
import { IoInformationCircleOutline } from "react-icons/io5"; // <IoInformationCircleOutline /> Help
import { IoBagRemoveOutline } from "react-icons/io5"; // <IoBagRemoveOutline /> Mode
import { TbLogout2 } from "react-icons/tb"; // <TbLogout2 /> Logout
import { IoMdSunny } from "react-icons/io"; // <IoMdSunny /> Dark
import { IoMoonOutline } from "react-icons/io5"; // <IoMoonOutline /> Light


export default function DashboardPage() {
    return (
<div className="w-[1440px] h-[900px] relative bg-[#f6f7f9]">
  <div className="w-[286px] h-[900px] left-0 top-0 absolute bg-white border-r border-[#f2f4f6]">
    <div className="w-[254px] h-14 left-[16px] top-[80px] absolute bg-[#3563e9] rounded-[10px]" />
    <div className="left-[32px] top-[36px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
      <div className="flex-col justify-start items-start gap-[42px] flex">
        <div className="w-[88px] h-4 text-justify text-[#93a6ca]/40 text-xs font-semibold font-['Plus Jakarta Sans']">M A I N  M E N U</div>
        <div className="flex-col justify-start items-start gap-8 flex">

          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
             <RiHome5Fill className="w-5 h-5 top-0 text-white" />
            </div>
            <div className="w-24 h-7 text-justify text-white text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Dashboard</div>
          </div>

          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
            <AiOutlineCar className="w-6 h-6 left-0 top-0 absolute text-[#90a3bf]" />
            </div>
            <div className="w-20 h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Car Rent</div>
          </div>

          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute">
              <CgInsights className="w-6 h-6 left-0 top-0 absolute text-[#90a3bf]" />
              </div>
            </div>
            <div className="w-14 h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Insight</div>
          </div>

          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute">
              <IoWalletOutline className="w-6 h-6 left-0 top-0 absolute text-[#90a3bf]" />
              </div>
            </div>
            <div className="w-[92px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Reimburse</div>
          </div>

          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
            <BiMessageDots className="w-6 h-6 left-0 top-0 absolute text-[#90a3bf]" />
            </div>
            <div className="w-12 h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Inbox</div>
          </div>

          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
            <LuCalendarDays className="w-6 h-6 left-0 top-0 absolute text-[#90a3bf]"/>
            </div>
            <div className="w-20 h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Calender</div>
          </div>

        </div>
      </div>
      <div className="flex-col justify-start items-start gap-7 flex">
        <div className="w-28 h-4 text-justify text-[#94a7cb]/40 text-xs font-semibold font-['Plus Jakarta Sans']">P R E F E R E N C E S</div>
        <div className="flex-col justify-start items-start gap-8 flex">

          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
            <RiSettingsLine className="w-6 h-6 left-0 top-0 absolute text-[#90a3bf]" />
            </div>
            <div className="w-[72px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Settings</div>
          </div>

          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
            <IoInformationCircleOutline className="w-6 h-6 left-0 top-0 absolute text-[#90a3bf]" />
            </div>
            <div className="w-[116px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Help & Center</div>
          </div>

        
          <div className="justify-start items-center gap-6 inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="w-6 h-6 relative">
              <IoBagRemoveOutline className="w-6 h-6 left-0 top-0 absolute text-[#90a3bf]" />
              </div>
              <div className="w-[92px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Dark Mode</div>
            </div>
            <div className="w-[68px] h-[34px] relative">

              <div className="w-[68px] h-[34px] left-0 top-0 absolute bg-[#f6f7f9] rounded-[49.87px]" />
              <div className="w-7 h-7 left-[37px] top-[3px] absolute">
                <div className="w-7 h-7 left-0 top-0 absolute bg-[#3563e9]/0 rounded-[49.87px]" />
                <div className="w-[14.96px] h-[14.96px] left-[7px] top-[7px] absolute">
                <IoMoonOutline className="w-4 h-4 absolute text-[#90a3bf]" />
                </div>
              </div>
              
              <div className="w-7 h-7 left-[3px] top-[3px] absolute">
                <div className="w-7 h-7 left-0 top-0 absolute bg-[#3563e9] rounded-[49.87px]" />
                <div className="w-4 h-4 left-[6px] top-[6px] absolute">
                <IoMdSunny className="w-4 h-4 absolute text-white" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="left-[32px] top-[824px] absolute justify-start items-center gap-3 inline-flex">
      <div className="w-6 h-6 relative">
      <TbLogout2 className="w-6 h-6 absolute text-[#90a3bf]" />
      </div>
      <div className="w-[68px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Log Out</div>
    </div>
  </div>
  <div className="w-[534px] h-[836px] left-[318px] top-[32px] absolute bg-white rounded-[10px]">
    <div className="w-48 h-6 left-[24px] top-[24px] absolute text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Details Rental</div>
    <Image src={Map} alt="Map" className="w-[486px] h-[272px] left-[24px] top-[72px] absolute" />
    
    <div className="left-[172px] top-[382px] absolute flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-[152px] h-8 text-[#1a202c] text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">Nissan GT - R</div>
      <div className="w-[104px] h-5 text-[#3d5278] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Sport Car</div>
    </div>
    <Image src={NissanGTR} alt="Nisaan GT-R" className="w-[132px] h-[72px] left-[24px] top-[376px] absolute" />

    <div className="w-[60px] h-8 left-[450px] top-[382px] absolute text-right text-[#3d5278] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">#9761</div>
    <div className="left-[24px] top-[480px] absolute justify-start items-center gap-2 inline-flex">
      <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
        <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
      </div>
      <div className="w-[75px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Pick - Up</div>
    </div>
    <div className="left-[24px] top-[520px] absolute justify-start items-start gap-6 inline-flex">
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Kota Semarang</div>
          <div className="w-3.5 h-3.5 relative">
            <div className="w-3.5 h-3.5 left-0 top-0 absolute">
            </div>
          </div>
        </div>
      </div>
      <div className="w-12 h-[0px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Date</div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-28 h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">20 July 2022</div>
          <div className="w-3.5 h-3.5 relative">
            <div className="w-3.5 h-3.5 left-0 top-0 absolute">
            </div>
          </div>
        </div>
      </div>
      <div className="w-12 h-[0px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Time</div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">07.00</div>
          <div className="w-3.5 h-3.5 relative">
            <div className="w-3.5 h-3.5 left-0 top-0 absolute">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="left-[24px] top-[600px] absolute justify-start items-center gap-2 inline-flex">
      <div className="p-1 bg-[#5caffc]/30 rounded-[70px] justify-center items-center flex">
        <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
      </div>
      <div className="w-[85px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Drop - Off</div>
    </div>
    <div className="left-[24px] top-[640px] absolute justify-start items-start gap-6 inline-flex">
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Kota Semarang</div>
          <div className="w-3.5 h-3.5 relative">
            <div className="w-3.5 h-3.5 left-0 top-0 absolute">
            </div>
          </div>
        </div>
      </div>
      <div className="w-12 h-[0px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Date</div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-28 h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">21 July 2022</div>
          <div className="w-3.5 h-3.5 relative">
            <div className="w-3.5 h-3.5 left-0 top-0 absolute">
            </div>
          </div>
        </div>
      </div>
      <div className="w-12 h-[0px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Time</div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">01.00</div>
          <div className="w-3.5 h-3.5 relative">
            <div className="w-3.5 h-3.5 left-0 top-0 absolute">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[486px] h-[0px] left-[24px] top-[728px] absolute border border-[#c3d4e9]/40"></div>
    <div className="left-[24px] top-[764px] absolute justify-start items-start gap-[74px] inline-flex">
      <div className="w-[284px] flex-col justify-start items-start gap-1 inline-flex">
        <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Total Rental Price</div>
        <div className="w-[284px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Overall price and includes rental discount</div>
      </div>
      <div className="w-32 h-12 text-right text-[#1a202c] text-[32px] font-bold font-['Plus Jakarta Sans']">$80.00</div>
    </div>
  </div>
  <div className="w-[524px] h-[324px] left-[884px] top-[32px] absolute bg-white rounded-[10px]">
    <div className="left-[24px] top-[24px] absolute justify-start items-start gap-[260px] inline-flex">
      <div className="w-48 h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Top 5 Car Rental </div>
      <div className="w-6 h-6 relative">
        <div className="w-6 h-6 left-0 top-0 absolute">
        </div>
      </div>
    </div>
    <div className="h-[63px] left-[84px] top-[158px] absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-[100px] h-[39px] text-center text-[#1a202c] text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">72,030</div>
      <div className="w-[100px] h-5 text-center text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Rental Car</div>
    </div>
    <div className="left-[268px] top-[80px] absolute justify-start items-center gap-9 inline-flex">

      <div className="justify-start items-center gap-3 flex">
        <div className="w-3 h-3 p-0.5 bg-[#0d3559] rounded-[70px]" />
        <div className="w-[100px] h-4 text-justify text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">Sport Car</div>
      </div>

      <div className="w-[72px] h-6 text-right text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">17,439</div>
    </div>
    <div className="left-[268px] top-[276px] absolute justify-start items-center gap-9 inline-flex">
      <div className="justify-start items-center gap-3 flex">
        <div className="w-3 h-3 p-0.5 bg-[#a6cef2] rounded-[70px]" />
        <div className="w-[100px] h-4 text-justify text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">MPV</div>
      </div>
      <div className="w-[72px] h-6 text-right text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">14,406</div>
    </div>
    <div className="left-[268px] top-[178px] absolute justify-start items-center gap-9 inline-flex">
      <div className="justify-start items-center gap-3 flex">
        <div className="w-3 h-3 p-0.5 bg-[#2185de] rounded-[70px]" />
        <div className="w-[100px] h-4 text-justify text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">Coupe</div>
      </div>
      <div className="w-[72px] h-6 text-right text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">18,197</div>
    </div>
    <div className="left-[268px] top-[227px] absolute justify-start items-center gap-9 inline-flex">
      <div className="justify-start items-center gap-3 flex">
        <div className="w-3 h-3 p-0.5 bg-[#63a9e8] rounded-[70px]" />
        <div className="w-[100px] h-4 text-justify text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">Hatchback</div>
      </div>
      <div className="w-[72px] h-6 text-right text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">12,510</div>
    </div>
    <div className="left-[268px] top-[129px] absolute justify-start items-center gap-9 inline-flex">
      <div className="justify-start items-center gap-3 flex">
        <div className="w-3 h-3 p-0.5 bg-[#175d9c] rounded-[70px]" />
        <div className="w-[100px] h-4 text-justify text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">SUV</div>
      </div>
      <div className="w-[72px] h-6 text-right text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px]">9,478</div>
    </div>
    <Image src={Chart} alt="Chart" className="origin-top-left rotate-180 w-[220px] h-[220px] left-[244px] top-[295px] absolute" />
  </div>
  <div className="w-[524px] h-[480px] left-[884px] top-[388px] absolute bg-white rounded-[10px]">
    <div className="left-[24px] top-[24px] absolute justify-start items-start gap-[216px] inline-flex">
      <div className="w-48 h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Recent Transaction</div>
      <div className="w-[68px] h-6 text-right text-[#3563e9] text-xs font-medium font-['Plus Jakarta Sans'] leading-normal">View All</div>
    </div>
    <div className="left-[24px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[476px] h-[70px] relative">
        <div className="w-[132px] h-[70px] left-0 top-0 absolute rounded-lg border">
            <Image src={NissanGTR2} alt="Nissan GT-R" className="w-[114px] h-9 left-[8px] top-[17px] absolute" />
        </div>
        <div className="h-12 left-[148px] top-[11px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[108px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Nissan GT - R</div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Sport Car</div>
          </div>
        </div>
        <div className="h-12 left-[368px] top-[11px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-[108px] h-5 text-right text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">20 July</div>
          </div>
          <div className="w-[108px] h-5 text-right text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">$80.00</div>
        </div>
      </div>
      <div className="w-[476px] h-[0px] border border-[#c3d4e9]/40"></div>
      <div className="w-[476px] h-[70px] relative">
        <div className="w-[132px] h-[70px] left-0 top-0 absolute rounded-lg border">
            <Image src={Koeingsegg} alt="Koeingsegg" className="w-[116px] h-9 left-[8px] top-[17px] absolute" />
        </div>
        <div className="h-12 left-[148px] top-[11px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[108px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Koegnigsegg</div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Sport Car</div>
          </div>
        </div>
        <div className="h-12 left-[368px] top-[11px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-[108px] h-5 text-right text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">19 July</div>
          </div>
          <div className="w-[108px] h-5 text-right text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">$99.00</div>
        </div>
      </div>
      <div className="w-[476px] h-[0px] border border-[#c3d4e9]/40"></div>
      <div className="w-[476px] h-[70px] relative">
        <div className="w-[132px] h-[70px] left-0 top-0 absolute rounded-lg border">
          <Image src={RollsRyce} alt="Rolls Royce" className="w-[116px] h-9 left-2 top-[17px] absolute" />
        </div>
        <div className="h-12 left-[148px] top-[11px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[108px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Rolls - Royce</div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Sport Car</div>
          </div>
        </div>
        <div className="h-12 left-[368px] top-[11px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-[108px] h-5 text-right text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">18 July</div>
          </div>
          <div className="w-[108px] h-5 text-right text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">$96.00</div>
        </div>
      </div>
      <div className="w-[476px] h-[0px] border border-[#c3d4e9]/40"></div>
      <div className="w-[476px] h-[70px] relative">
        <div className="w-[132px] h-[70px] left-0 top-0 absolute rounded-lg border">
          <Image src={CRV} alt="CR-V" className="w-[110px] h-11 left-2 top-[13px] absolute" />
        </div>
        <div className="h-12 left-[148px] top-[11px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[108px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">CR - V</div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">SUV</div>
          </div>
        </div>
        <div className="h-12 left-[368px] top-[11px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-[108px] h-5 text-right text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">17 July</div>
          </div>
          <div className="w-[108px] h-5 text-right text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">$80.00</div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}