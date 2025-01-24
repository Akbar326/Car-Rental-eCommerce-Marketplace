"use client"
import { useState } from "react";
import React from "react";
import CheckboxItem from "@/app/Components/CheckboxItem";
import CarsCards from "../Components/CarsCards";

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
                    className={`z-40 w-[360px] min-h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} 
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

                <div className="p-4">
                    {/* Cars Details */}
                        <div className="p-2 ml-[-300px] lg:ml-2 mt-8">
                            <div className="flex flex-wrap justify-center gap-8">
                              <CarsCards category="recommended" />
                            </div>
                            <div className="flex flex-wrap justify-center gap-8 mt-6">
                              <CarsCards category="popular" />
                            </div>
                        </div>
                </div>
            </div>

      </div>
    );
}