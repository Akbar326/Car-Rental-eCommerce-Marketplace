// Import Images
import Image from "next/image"
import MainCard1 from "@/app/assets/HeroCard1.png"
import MainCard2 from "@/app/assets/HeroCard2.png"

// Import Icons from React Library
import { LuArrowDownUp } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="w-full max-w-[1440px] mx-auto h-[560px] px-4 relative bg-[#f6f7f9]">
            <div className="relative flex flex-col sm:flex-row items-center justify-between sm:h-[570px] gap-6">
                
                {/* Hero Main Card-1 */}
                <div className="flex flex-col items-start relative w-[327px] md:w-[640px] h-[232px] md:h-[340px] md:left-[25px] mb-[110px] md:mb-[160px] mt-3 md:mt-0">
                    <Image src={MainCard1} alt="Main Card 1" className="" />
                    <div className="absolute inset-0 flex flex-col mt-2 md:mt-6 ml-2 md:ml-6 gap-2 md:gap-4 ">
                        <h2 className="w-[260px] md:w-[300px] text-white text-base md:text-[32px] font-semibold leading-6 md:leading-[48px]">
                            The Best Platform for Car Rental
                        </h2>
                        <p className="w-[216px] md:w-[284px] text-white text-xs md:text-base font-medium leading-5 md:leading-6">
                            Ease of doing a car rental safely and reliably. Of course at a low price.
                        </p>
                        <button className="w-[100px] md:w-[120px] md:h-11 h-9 px-5 bg-[#3563e9] rounded text-white text-xs md:text-base font-semibold">
                            Rental Car
                        </button>
                    </div>
                </div>

                {/* Hero Main Card-2 */}
                <div className="hidden md:flex flex-col items-start relative w-[640px] h-[340px] right-[25px] mb-[160px]">
                    <Image src={MainCard2} alt="Main Card 2" className="w-[327px] md:w-[640px] h-auto" />
                    <div className="absolute inset-0 flex flex-col mt-6 ml-6 gap-4">
                        <h2 className="w-[300px] text-white text-[32px] font-semibold leading-[48px]">
                            Easy way to rent a car at a low price
                        </h2>
                        <p className="w-[284px] text-white text-base font-medium leading-normal">
                            Providing cheap car rental services and safe and comfortable facilities.
                        </p>
                        <button className="w-[120px] h-11 px-5 bg-[#54A6FF] rounded text-white text-base font-semibold">
                            Rental Car
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Button */}
            <div className="w-full flex justify-center md:-mt-28 -z-50">
                <button className="w-[60px] h-[60px] bg-[#3563e9] rounded-[10px] flex justify-center items-center z-50">
                <div className="w-[42px] h-[60px] absolute bg-[#103193]/30 rounded-[10px] blur-2xl" />
                    <LuArrowDownUp className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Pick-Up and Drop-Off Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 -mt-24 ">
                {/* Pick-Up */}
                <div className="w-[327px] md:w-[582px] h-[120px] md:h-[132px] md:ml-[30px] -mt-[75px] md:-mt-0 mb-6 bg-white rounded-[10px] p-4">
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
                                <input type="text" placeholder="City" className="w-full text-xs font-medium border-none" />
                                <FaChevronDown className="ml-2" />
                            </div>
                        </div>
                        <div>
                            <label className="text-base font-bold">Date</label>
                            <div className="flex items-center mt-2">
                                <input type="text" placeholder="Date" className="w-full text-xs font-medium border-none" />
                                <FaChevronDown className="ml-2" />
                            </div>
                        </div>
                        <div>
                            <label className="text-base font-bold">Time</label>
                            <div className="flex items-center mt-2">
                                <input type="text" placeholder="Time" className="w-full text-xs font-medium border-none" />
                                <FaChevronDown className="ml-2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Drop-Off */}
                <div className="w-[327px] md:w-[582px] h-[120px] md:h-[132px] md:ml-[70px] bg-white rounded-[10px] p-4">
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
                                <input type="text" placeholder="City" className="w-full text-xs font-medium border-none" />
                                <FaChevronDown className="ml-2" />
                            </div>
                        </div>
                        <div>
                            <label className="text-base font-bold">Date</label>
                            <div className="flex items-center mt-2">
                                <input type="text" placeholder="Date" className="w-full text-xs font-medium border-none" />
                                <FaChevronDown className="ml-2" />
                            </div>
                        </div>
                        <div>
                            <label className="text-base font-bold">Time</label>
                            <div className="flex items-center mt-2">
                                <input type="text" placeholder="Time" className="w-full text-xs font-medium border-none" />
                                <FaChevronDown className="ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
