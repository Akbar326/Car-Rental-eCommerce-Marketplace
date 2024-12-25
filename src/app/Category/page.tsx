"use client"
import { useState } from "react";
import CheckboxItem from "@/app/Components/CheckboxItem";

import React from "react";
import Card from "@/app/Components/Crads"
``
import Koenigsegg from "@/app/assets/Koenigsegg.png";
import NissanGTR from "@/app/assets/NissanGTR.png";
import RollsRoyce from "@/app/assets/RollsRoyce.png";
import NewRush from "@/app/assets/NewRush.png";
import CRV from "@/app/assets/CRV.png";
import NewTerios from "@/app/assets/NewTerios.png";
import MGZXExclusive from "@/app/assets/MGZX.png";
import NewMGZS from "@/app/assets/NewMGZS.png";
import MGExcite from "@/app/assets/MGExite.png";

// Icon
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";

// Cars Cards Array
const carsData = [
    {
      title: "Koenigsegg",
      type: "Sport",
      price: 99.0,
      isFavorite: true,
      features: [
        { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "90L" },
        { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
        { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "2 People" },
      ],
      image: Koenigsegg,
    },
  
    {
      title: "Nissan GT-R",
      type: "Sport",
      price: 80.00,
      discount: 100.00,
      isFavorite: false,
      features: [
        { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "80L" },
        { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
        { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "2 People" },
      ],
      image: NissanGTR,
    },
  
    {
      title: "Rolls-Royce",
      type: "Sedan",
      price: 96.00,
      isFavorite: false,
      features: [
        { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "70L" },
        { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
        { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "4 People" },
      ],
      image: RollsRoyce,
    },
  
    {
        title: "All New Rush",
        type: "SUV",
        price: 72.00,
        discount: 80.00,
        isFavorite: true,
        features: [
          { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "70L" },
          { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
          { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "6 People" },
        ],
        image: NewRush,
      },

      {
        title: "CR - V",
        type: "SUV",
        price: 80.00,
        isFavorite: true,
        features: [
          { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "80L" },
          { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
          { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "6 People" },
        ],
        image: CRV,
      },

      {
        title: "All New Terios",
        type: "SUV",
        price: 74.00,
        isFavorite: true,
        features: [
          { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "90L" },
          { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
          { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "6 People" },
        ],
        image: NewTerios,
      },

      {
        title: "MG ZX Exlusive",
        type: "Hatchback",
        price: 76.00,
        discount: 80.00,
        isFavorite: true,
        features: [
          { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "70L" },
          { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
          { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "4 People" },
        ],
        image: MGZXExclusive,
      },
    
      {
        title: "New MG ZS",
        type: "SUV",
        price: 80.00,
        isFavorite: true,
        features: [
          { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "80L" },
          { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
          { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "6 People" },
        ],
        image: NewMGZS,
      },
    
      {
        title: "MG ZX Excite",
        type: "Hatchback",
        price: 70.00,
        isFavorite: true,
        features: [
          { icon: <BsFuelPumpFill className="w-6 h-6 text-[#90a3bf]" />, label: "90L" },
          { icon: <GiCartwheel className="w-6 h-6 text-[#90a3bf]" />, label: "Manual" },
          { icon: <HiUsers className="w-6 h-6 text-[#90a3bf]" />, label: "4 People" },
        ],
        image: MGExcite,
      },
  ];

export default function CategoryPage() {
    // For Check Box
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    // For Slider
    const [sliderValue, setSliderValue] = useState(50);
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value));
    };

    // For Sidebar Toggle
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <div className="w-full max-w-[1440px] min-h-screen mx-auto bg-[#f6f7f9] relative">

            {/* Toggel button for small screen */}
            <button 
                    onClick={handleToggle}
                    aria-controls="default-sidebar" 
                    aria-expanded={isSidebarOpen}
                    type="button" 
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
            </button>

            <div className="flex w-full max-w-[1440px] min-h-screen mx-auto bg-[#f6f7f9] relative">
                {/* Sidebar */}
                <aside 
                    id="default-sidebar" 
                    className={`z-40 w-[360px] h-[1600px] transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} 
                    aria-label="Sidebar"
                    >
                    <div className="h-full px-4 overflow-y-auto bg-white">
                        {/* Sidebar content */}
                        <div className="w-[104px] h-5 ml-2 mt-8 text-[#90a3bf] text-xs font-semibold">T Y P E</div>
                        <div className="space-y-3 font-medium">
                            <CheckboxItem label="Sport" count={10} />
                            <CheckboxItem label="SUV" count={12} />
                            <CheckboxItem label="MPV" count={16} />
                            <CheckboxItem label="Sedan" count={20} />
                            <CheckboxItem label="Coupe" count={14} />
                            <CheckboxItem label="Hatchback" count={14} />
                        </div>

                        <div className="w-[104px] h-5 ml-2 mt-10 text-[#90a3bf] text-xs font-semibold">C A P A C I T Y</div>
                    <div className="space-y-3 font-medium">
                            <CheckboxItem label="2 Person" count={10} />
                            <CheckboxItem label="4 Person" count={14} />
                            <CheckboxItem label="6 Person" count={12} />
                            <CheckboxItem label="8 person" count={16} />
                    </div>
                        
                        {/* Price Range Slider */}
                        <div className="w-[104px] h-5 ml-2 mt-10 text-[#90a3bf] text-xs font-semibold">P R I C E</div>
                        <div className="relative space-y-3 mt-3">
                            <input 
                                id="labels-range-input" 
                                type="range" 
                                value={sliderValue} 
                                min="50" 
                                max="100" 
                                onChange={handleSliderChange} 
                                className="w-[270px] h-5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                style={{ background: `linear-gradient(to right, #3b82f6 ${(sliderValue - 50) * 2}%, #d1d5db ${(sliderValue - 50) * 2}%)` }}
                            />
                            <div className="flex justify-between">
                                <span className="text-xl text-[#596780] font-semibold">Max: ${sliderValue}</span>
                            </div>
                        </div>

                    </div>
                </aside>

                <div className="flex-1 p-4">

                    {/* Pick-Up and Drop-Off Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 ml-[-300px] md:ml-0 relative">

                    {/* Navigation Button */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ml-[-290px] md:ml-0 mt-[80px] md:mt-0">
                        <button className="w-[60px] h-[60px] bg-[#3563e9] rounded-[10px] flex justify-center items-center">
                        <div className="w-[42px] h-[60px] absolute bg-[#103193]/30 rounded-[10px] blur-2xl" />
                            <LuArrowDownUp className="w-6 h-6 text-white" />
                        </button>
                    </div>

                        {/* Pick-Up */}
                        <div className="w-[320px] h-[120px] md:w-[486px] md:h-[132px] bg-white rounded-[10px] p-4 mb-4 md:mb-0">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
                                    <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
                                </div>
                                <h2 className="text-[#1a202c] text-base font-semibold">Pick - Up</h2>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="text-base font-bold">Locations</label>
                                    <div className="flex items-center mt-2">
                                        <input type="text" placeholder="Select your city" className="w-full text-xs font-medium border-none outline-none" />
                                        <FaChevronDown className="ml-2" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-bold">Date</label>
                                    <div className="flex items-center mt-2">
                                        <input type="text" placeholder="Select your date" className="w-full text-xs font-medium border-none outline-none" />
                                        <FaChevronDown className="ml-2" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-bold">Time</label>
                                    <div className="flex items-center mt-2">
                                        <input type="text" placeholder="Select your time" className="w-full text-xs font-medium border-none outline-none" />
                                        <FaChevronDown className="ml-2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Drop-Off */}
                        <div className="w-[320px] h-[120px] md:w-[486px] md:h-[132px] bg-white rounded-[10px] p-4">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-1 bg-[#5caffc]/30 rounded-[70px] justify-center items-center flex">
                                    <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
                                </div>
                                <h2 className="text-[#1a202c] text-base font-semibold">Drop - Off</h2>
                            </div>

                            <div className="grid grid-cols-3 gap-12">
                                <div>
                                    <label className="text-base font-bold">Locations</label>
                                    <div className="flex items-center mt-2">
                                        <input type="text" placeholder="Select your city" className="w-full text-xs font-medium border-none outline-none pl-0" />
                                        <FaChevronDown className="ml-2" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-bold">Date</label>
                                    <div className="flex items-center mt-2">
                                        <input type="text" placeholder="Select your date" className="w-full text-xs font-medium border-none outline-none pl-0" />
                                        <FaChevronDown className="ml-2" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-bold">Time</label>
                                    <div className="flex items-center mt-2">
                                        <input type="text" placeholder="Select your time" className="w-full text-xs font-medium border-none outline-none pl-0" />
                                        <FaChevronDown className="ml-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cars Details */}
                    <div className="mt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 ml-[-300px] lg:ml-2">
                        {carsData.map((car, index) => (
                            <Card
                                key={index}
                                title={car.title}
                                type={car.type}
                                price={car.price}
                                discount={car.discount}
                                features={car.features}
                                image={car.image}
                                isFavorite={car.isFavorite}
                            />
                        ))}
                        </div>

                        {/* Shop More Button */}
                        <div className="flex justify-between items-center w-[223px] h-[36px] md:w-[586px] md:h-[44px] mx-auto mt-8 ml-[-210px] md:ml-[400px]">
                            <button className="w-[120px] h-9 md:w-[156px] md:h-11 bg-[#3563e9] text-white text-xs md:text-base font-semibold rounded py-2 flex justify-center items-center">Show More Car</button>
                            <p className="text-[#90a3bf] text-sm font-medium">120 Car</p>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    );
}