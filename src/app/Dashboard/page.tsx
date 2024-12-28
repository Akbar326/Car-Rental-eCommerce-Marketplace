'use client'

import Image from "next/image"
import { useState } from 'react'
import Chart from "@/app/assets/Chart.png"
import Map from "@/app/assets/Maps.png"
import NissanGTR from "@/app/assets/NissanGTRDashboard.png"
import NissanGTR2 from "@/app/assets/NissanGTR.png"
import Koeingsegg from "@/app/assets/Koenigsegg.png"
import RollsRyce from "@/app/assets/RollsRoyce.png"
import CRV from "@/app/assets/CRV.png"

import { RiHome5Fill } from "react-icons/ri"
import { AiOutlineCar } from "react-icons/ai"
import { CgInsights } from "react-icons/cg"
import { IoWalletOutline } from "react-icons/io5"
import { BiMessageDots } from "react-icons/bi"
import { LuCalendarDays } from "react-icons/lu"
import { RiSettingsLine } from "react-icons/ri"
import { IoInformationCircleOutline } from "react-icons/io5"
import { IoBagRemoveOutline } from "react-icons/io5"
import { TbLogout2 } from "react-icons/tb"
import { IoMdSunny } from "react-icons/io"
import { IoMoonOutline } from "react-icons/io5"
import { HiMenu } from "react-icons/hi"

const menuItems = [
  { icon: RiHome5Fill, text: 'Dashboard' },
  { icon: AiOutlineCar, text: 'Car Rent' },
  { icon: CgInsights, text: 'Insight' },
  { icon: IoWalletOutline, text: 'Reimburse' },
  { icon: BiMessageDots, text: 'Inbox' },
  { icon: LuCalendarDays, text: 'Calendar' },
]

const preferenceItems = [
  { icon: RiSettingsLine, text: 'Settings' },
  { icon: IoInformationCircleOutline, text: 'Help & Center' },
]

export default function DashboardPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const MenuItem = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
    <li className="w-full">
      <a href="#" className="flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 hover:bg-[#3563E9] group">
        <Icon className="w-6 h-6 text-[#90a3bf] group-hover:text-white" />
        <span className="w-[140px] h-[28px] text-[#90a3bf] text-base font-medium leading-normal group-hover:text-white">
          {text}
        </span>
      </a>
    </li>
  )

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] lg:h-[900px] lg:relative">
      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 text-[#90a3bf]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HiMenu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block fixed lg:absolute w-[286px] h-full lg:h-[900px] left-0 top-0 bg-white border-r border-[#f2f4f6] z-40 overflow-y-auto`}>
      <div className="w-[254px] h-14 left-[16px] top-[80px] absolute rounded-[10px]" />
      <div className="left-[32px] top-[36px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
        <div className="flex flex-col justify-start items-start gap-[42px]">
          <h3 className="w-[88px] h-4 text-justify text-[#93a6ca]/40 text-xs font-semibold">M A I N &nbsp; M E N U</h3>
          <ul className="flex flex-col justify-start items-start gap-4 w-full">
            {menuItems.map((item, index) => (
              <MenuItem key={index} icon={item.icon} text={item.text} />
            ))}
          </ul>
        </div>

        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="w-28 h-4 text-justify text-[#93a6ca]/40 text-xs font-semibold">P R E F E R E N C E S</div>
          <div className="flex-col justify-start items-start gap-6 flex list-none">
            {preferenceItems.map((item, index) => (
              <MenuItem key={index} icon={item.icon} text={item.text} />
            ))}
            <div className="justify-start items-center gap-6 inline-flex">
                <div className="w-6 h-6 relative justify-start items-center gap-3 flex">
                  <IoBagRemoveOutline className="w-6 h-6 left-2 absolute text-[#90a3bf]" />
                </div>
                <div className="w-[92px] h-7 text-justify text-[#90a3bf] text-base font-medium leading-normal">Dark Mode</div>
              <div 
                className="w-[68px] h-[34px] relative cursor-pointer"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <div className={`w-[68px] h-[34px] absolute ${isDarkMode ? 'bg-[#3563e9]' : 'bg-[#f6f7f9]'} rounded-[49.87px] transition-colors duration-300`} />
                <div className={`w-7 h-7 absolute top-[3px] transition-all duration-300 ${isDarkMode ? 'left-[38px]' : 'left-[3px]'}`}>
                  <div className={`w-7 h-7 absolute ${isDarkMode ? 'bg-white' : 'bg-[#3563e9]'} rounded-[49.87px]`} />
                  <div className="w-[14.96px] h-[14.96px] left-[7px] top-[7px] absolute">
                    {isDarkMode ? (
                      <IoMoonOutline className="w-4 h-4 text-[#3563e9]" />
                    ) : (
                      <IoMdSunny className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-[32px] top-[810px] absolute justify-start items-center gap-3 inline-flex">
        <TbLogout2 className="w-6 h-6 text-[#90a3bf] relative" />
        <div className="w-[68px] h-7 text-justify text-[#90a3bf] text-base font-medium leading-normal">Log Out</div>
      </div>
    </div>

      {/* Main Content */}
      <div className="lg:ml-[286px] p-4 lg:p-0 pt-16 lg:pt-0">

        {/* Details Rental */}
        <div className="w-full lg:w-[534px] lg:h-[836px] lg:left-[310px] lg:top-[25px] lg:absolute bg-white rounded-[10px] mb-4 lg:mb-0">
          <h2 className="w-48 h-6 left-[24px] lg:top-[24px] absolute text-[#1a202c] text-xl font-bold leading-[30px]">Details Rental</h2>
          <Image src={Map} alt="Map" className="w-full h-auto lg:w-[486px] lg:h-[272px] lg:left-[24px] lg:top-[72px] lg:absolute" />
          
          <div className="flex flex-row items-center mt-4 lg:mt-0 lg:left-[24px] lg:top-[376px] lg:absolute">
            <Image src={NissanGTR} alt="Nisaan GT-R" className="w-[132px] h-[72px] mb-4 lg:mb-0" />
            <div className="text-center lg:text-left lg:ml-6">
                <div className="text-[#1a202c] text-2xl font-bold leading-9">Nissan GT - R</div>
                <div className="text-[#3d5278] text-sm font-medium leading-[21px] ml-[-80px] lg:ml-[0px]">Sport Car</div>
            </div>
                <div className="lg:absolute lg:ml-[430px] lg:top-[43px] text-right text-[#3d5278] text-sm font-medium leading-[21px] mt-8 lg:mt-0">#9761</div>
          </div>

          <div className="mt-8 lg:mt-0 lg:left-[24px] lg:top-[480px] ml-2 lg:ml-0 lg:absolute">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 bg-[#3563e9]/30 rounded-[70px]">
                  <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
                </div>
                <div className="text-[#1a202c] text-base font-semibold leading-normal">Pick - Up</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <div className="text-[#1a202c] ml-2 text-base font-bold leading-normal mb-1">Locations</div>
                  <input type="text" placeholder="Kota Semarange" className="w-full placeholder:text-[#90a3bf] text-xs font-medium border-none rounded-xl p-2"/>
                </div>
                <div>
                  <div className="text-[#1a202c] ml-2 text-base font-bold leading-normal mb-2">Date</div>
                  <input type="text" placeholder="20 January 2025" className="w-full placeholder:text-[#90a3bf] text-xs font-medium border-none rounded-xl p-2"/>
                </div>
                <div>
                  <div className="text-[#1a202c] ml-2 text-base font-bold leading-normal mb-2">Time</div>
                  <input type="text" placeholder="07.00" className="w-full placeholder:text-[#90a3bf] text-xs font-medium border-none rounded-xl p-2"/>
                </div>
              </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:left-[24px] ml-2 lg:ml-0 lg:top-[610px] lg:absolute">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 bg-[#5caffc]/30 rounded-[70px]">
                  <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
                </div>
                <div className="text-[#1a202c] text-base font-semibold leading-normal">Drop - Off</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <div className="text-[#1a202c] ml-2 text-base font-bold leading-normal mb-2">Locations</div>
                  <input type="text" placeholder="Kota Semarange" className="w-full placeholder:text-[#90a3bf] text-xs font-medium border-none rounded-xl p-2"/>
                </div>
                <div>
                  <div className="text-[#1a202c] ml-2 text-base font-bold leading-normal mb-2">Date</div>
                  <input type="text" placeholder="20 January 2025" className="w-full placeholder:text-[#90a3bf] text-xs font-medium border-none rounded-xl p-2"/>
                </div>
                <div>
                  <div className="text-[#1a202c] ml-2 text-base font-bold leading-normal mb-2">Time</div>
                  <input type="text" placeholder="07.00" className="w-full placeholder:text-[#90a3bf] text-xs font-medium border-none rounded-xl p-2"/>
                </div>
              </div>
          </div>

          <div className="mt-4 lg:mt-0 p-2 lg:left-[24px] lg:top-[754px] lg:absolute">
            <div className="flex flex-row justify-between items-start sm:items-center gap-4 lg:gap-[74px]">
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-[#1a202c] text-base lg:text-xl font-bold leading-[30px]">Total Rental Price</div>
                <div className="text-[#90a3bf] text-xs lg:text-sm font-medium leading-[21px]">Overall price and includes rental discount</div>
              </div>
              <div className="text-right text-[#1a202c] text-xl lg:text-[32px] font-bold">$80.00</div>
            </div>
          </div>
        </div>

        {/* Top 5 Car Rental */}
        <div className="w-full lg:w-[524px] lg:h-[324px] lg:left-[864px] lg:top-[25px] lg:absolute bg-white rounded-[10px] mb-4 lg:mb-0 p-3">
          <h2 className="text-[#1a202c] text-xl font-bold leading-[30px] mb-6">Top 5 Car Rental</h2>

          <div className="flex flex-col sm:flex-row">
            <div className="text-center mb-6 sm:mb-0">
              <Image src={Chart} alt="Chart" className="w-[220px] h-[220px] mx-auto mb-[100px] lg:mb-0" />
              <div className="mt-[-230px] lg:mt-[-135px] text-[#1a202c] text-2xl font-bold leading-9">72,030</div>
              <div className="text-[#90a3bf] text-sm font-medium leading-[21px] mb-[60px] lg:mb-0">Rental Car</div>
            </div>

              <div className="w-full sm:w-1/2 mt-2 ml-1">
                <ul className="space-y-6">
                  <li className="inline-flex justify-between items-center">
                    <div className="w-3 h-3 bg-[#0d3559] rounded-full ml-2" />
                    <span className="text-[#90a3bf] text-sm font-semibold ml-2">Sport Car</span>
                    <span className="text-[#1a202c] text-sm font-semibold ml-[100px]">17,439</span>
                  </li>

                  <li className="inline-flex justify-between items-center">
                      <div className="w-3 h-3 bg-[#175d9c] rounded-full ml-2" />
                      <span className="text-[#90a3bf] text-sm font-semibold ml-2">SUV</span>
                    <span className="text-[#1a202c] text-sm font-semibold ml-[133px]">9,478</span>
                  </li>

                  <li className="inline-flex justify-between items-center">
                      <div className="w-3 h-3 bg-[#2185de] rounded-full ml-2" />
                      <span className="text-[#90a3bf] text-sm font-semibold ml-2">Coupe</span>
                    <span className="text-[#1a202c] text-sm font-semibold ml-[118px]">18,197</span>
                  </li>

                  <li className="inline-flex justify-between items-center">
                      <div className="w-3 h-3 bg-[#63a9e8] rounded-full ml-2" />
                      <span className="text-[#90a3bf] text-sm font-semibold ml-2">Hatchback</span>
                    <span className="text-[#1a202c] text-sm font-semibold ml-[88px]">12,510</span>
                  </li>

                  <li className="inline-flex justify-between items-center">
                      <div className="w-3 h-3 bg-[#a6cef2] rounded-full ml-2" />
                      <span className="text-[#90a3bf] text-sm font-semibold ml-2">MPV</span>
                    <span className="text-[#1a202c] text-sm font-semibold ml-[128px]">14,406</span>
                  </li>
                </ul>
              </div>
            </div>
        </div>

        {/* Recent Transaction */}
        <div className="w-full lg:w-[524px] lg:h-[480px] lg:left-[864px] lg:top-[369px] lg:absolute bg-white rounded-[10px]">

          <div className="p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Transaction</h2>
              <button className="text-[#3563e9] text-sm font-semibold">View All</button>
            </div>
            
            <div className="space-y-10">
              <div className="flex flex-col sm:flex-row items-center border-b pb-4">
                <Image src={NissanGTR2} alt="Nissan GT-R" className="w-full sm:w-1/3 h-auto mb-4 sm:mb-0" />
                <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0 sm:ml-6">
                  <h3 className="text-base font-bold">Nissan GT - R</h3>
                  <p className="text-[#90a3bf] text-xs">Sport Car</p>
                </div>
                <div className="w-full sm:w-1/3 text-center sm:text-right">
                  <p className="text-[#90a3bf] text-xs">20 July</p>
                  <p className="text-base font-bold">$80.00</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center border-b pb-4">
                <Image src={Koeingsegg} alt="Koenigsegg" className="w-full sm:w-1/3 h-auto mb-4 sm:mb-0" />
                <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0 sm:ml-6">
                  <h3 className="text-base font-bold">Koegnigsegg</h3>
                  <p className="text-[#90a3bf] text-xs">Sport Car</p>
                </div>
                <div className="w-full sm:w-1/3 text-center sm:text-right">
                  <p className="text-[#90a3bf] text-xs">19 July</p>
                  <p className="text-base font-bold">$99.00</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center border-b pb-4">
                  <Image src={RollsRyce} alt="Rolls Royce" className="w-full sm:w-1/3 h-auto mb-4 sm:mb-0" />
                <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0 sm:ml-6">
                  <h3 className="text-base font-bold">Rolls - Royce</h3>
                  <p className="text-[#90a3bf] text-xs">Sport Car</p>
                </div>
                <div className="w-full sm:w-1/3 text-center sm:text-right">
                  <p className="text-[#90a3bf] text-xs">18 July</p>
                  <p className="text-base font-bold">$96.00</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center">
                <Image src={CRV} alt="CR-V" className="w-full sm:w-1/3 h-auto mb-4 sm:mb-0" />
                <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0 sm:ml-6">
                  <h3 className="text-base font-bold">CR - V</h3>
                  <p className="text-[#90a3bf] text-xs">SUV</p>
                </div>
                <div className="w-full sm:w-1/3 text-center sm:text-right">
                  <p className="text-[#90a3bf] text-xs">17 July</p>
                  <p className="text-base font-bold">$80.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

