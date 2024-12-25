"use client"
import { useState } from "react";
import CheckboxItem from "@/app/Components/CheckboxItem";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";

// Import Icons
import { IoHeart } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";

// Import Car Images
import Image from "next/image";
import Koenigsegg from "@/app/assets/Koenigsegg.png";
import NissanGTR from "@/app/assets/NissanGTR.png";
import RollsRoyce from "@/app/assets/RollsRoyce.png";
import NewRush from "@/app/assets/NewRush.png";
import CRV from "@/app/assets/CRV.png";
import NewTerios from "@/app/assets/NewTerios.png";
import CarMain from "@/app/assets/CarMainPic.png";
import CarPic1 from "@/app/assets/CarPic1.png";
import CarPic2 from "@/app/assets/CarPic2.png";
import CarPic3 from "@/app/assets/CarPic3.png";

import Rating from "@/app/assets/Rating.png";
import AlexStanton from "@/app/assets/ProfilePicture.png"
import SkylarDias from "@/app/assets/SkylarDias.png"
import Card from "@/app/Components/Crads";

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
];

const carsData2 = [
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
  ];


export default function DetailPage() {

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
    <div className="w-full max-w-[1440px] h-[2100px] lg:h-[2016px] mx-auto bg-[#f6f7f9] relative overflow-x-hidden">
    
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

            {/* Sidebar */}
            <aside 
                id="default-sidebar" 
                className={`fixed z-50 w-[360px] h-[2016px] transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
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

            {/* Car Images */}
            <Image src={CarMain} alt="Banner" className="w-[327px] h-[232px] left-[25px] top-[48px] lg:w-[492px] lg:h-[360px] lg:left-[380px] lg:top-[32px] absolute" />
            <Image src={CarPic1} alt="Car Picture" className="w-[96px] h-[64px] left-[25px] top-[290px] lg:w-[148px] lg:h-[124px] lg:left-[380px] lg:top-[416px] absolute" />
            <Image src={CarPic2} alt="Car Picture" className="w-[96px] h-[64px] left-[138px] top-[290px] lg:w-[148px] lg:h-[124px] lg:left-[552px] lg:top-[416px] absolute" />
            <Image src={CarPic3} alt="Car Picture" className="w-[96px] h-[64px] left-[253px] top-[290px] lg:w-[148px] lg:h-[124px] lg:left-[724px] lg:top-[416px] absolute" />

            {/* Car Detail */}
            <div className="w-[90%] max-w-[492px] h-auto p-5 lg:w-[492px] lg:h-[508px] mx-auto absolute left-2 lg:left-[870px] right-0 top-[360px] lg:top-[30px] bg-white rounded-[10px]">

            {/* Car Title */}
            <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-lg md:text-2xl lg:text-[32px] text-[#1a202c] font-bold leading-tight lg:leading-[48px]">
                Nissan GT - R
                </h1>
                <IoHeart className="absolute right-5 top-5 text-red-500 w-5 h-5 lg:w-6 lg:h-6" />
                <div className="flex items-center gap-2">
                <Image src={Rating} alt="Rating" className="w-[108px] h-[20px]" />
                <div className="text-sm lg:text-base text-[#596780] font-medium">440+ Reviewer</div>
                </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm md:text-base lg:text-xl text-[#596780] leading-6 lg:leading-10">
                NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
            </p>

            {/* Car Details */}
            <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="space-y-4">
                <div className="flex justify-between items-center text-sm lg:text-xl">
                    <span className="text-[#90a3bf]">Type Car</span>
                    <span className="text-[#596780] font-semibold">Sport</span>
                </div>
                <div className="flex justify-between items-center text-sm lg:text-xl">
                    <span className="text-[#90a3bf]">Steering</span>
                    <span className="text-[#596780] font-semibold">Manual</span>
                </div>
                </div>
                <div className="space-y-4">
                <div className="flex justify-between items-center text-sm lg:text-xl">
                    <span className="text-[#90a3bf]">Capacity</span>
                    <span className="text-[#596780] font-semibold">2 Person</span>
                </div>
                <div className="flex justify-between items-center text-sm lg:text-xl">
                    <span className="text-[#90a3bf]">Gasoline</span>
                    <span className="text-[#596780] font-semibold">70L</span>
                </div>
                </div>
            </div>

                {/* Pricing */}
                <div className="mt-6 flex flex-col items-start gap-2">
                    <div className="text-lg md:text-2xl lg:text-[28px] font-bold text-[#1a202c]">
                    $80.00/ <span className="text-sm lg:text-base text-[#90a3bf]">days</span>
                    </div>
                    <div className="text-sm lg:text-base text-[#90a3bf] line-through">$100.00</div>

                    {/* Rent Button */}
                    {/* <div className="mt-6"> */}
                        <button className="w-full md:w-auto lg:ml-[310px] lg:mt-[-60px] px-6 py-3 bg-[#3563e9] text-white rounded-md text-sm lg:text-base font-bold">
                        Rent Now
                        </button>
                    {/* </div> */}
                </div>
            </div>
    

        {/* Recent Cars */}
        <div className="w-full px-4 lg:w-[1016px] h-auto lg:h-[448px] left-0 lg:left-[392px] top-[1180px] lg:top-[1056px] absolute flex flex-col justify-start items-start gap-2 lg:gap-4">
            <div className="flex justify-between items-center lg:w-full lg:max-w-7xl lg:mx-auto py-2 gap-[160px] lg:gap-[754px]">
                <div className="text-[#90a3bf] text-base font-semibold ">Recent Car</div>
                <Link href="" className="text-[#3563e9] text-base font-semibold hover:underline">View All</Link>
            </div>

            {/* Grid for Large Screens, Swiper for Small Screens */}
            <div className="w-full justify-start items-start gap-8 inline-flex">
                {/* Large Screens */}
                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
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

                {/* Small Screens */}
                <Swiper
                  className="swiper-container w-full"
                  modules={[Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                  }}
                >
                  {carsData.map((car, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        title={car.title}
                        type={car.type}
                        price={car.price}
                        discount={car.discount}
                        features={car.features}
                        image={car.image}
                        isFavorite={car.isFavorite}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="custom-pagination mt-4"></div>
            </div>
        </div>

        {/* Recomendation Car */}
        <div className="w-full px-4 lg:w-[1016px] h-auto lg:h-[448px] left-0 lg:left-[392px] top-[1640px] lg:top-[1536px] absolute flex-col justify-start items-start gap-2 lg:gap-4 inline-flex">
            <div className="flex justify-between items-center lg:w-full lg:max-w-7xl lg:mx-auto py-2 gap-[80px] lg:gap-[754px]">
                <div className="text-[#90a3bf] text-base font-semibold ">Recomendation Car</div>
                <Link href="/all-cars" className="text-[#3563e9] text-base font-semibold hover:underline">View All</Link>
            </div>
        
             {/* Grid for Large Screens, Swiper for Small Screens */}
            <div className="w-full justify-start items-start gap-8 inline-flex">
                {/* Large Screens */}
                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {carsData2.map((car, index) => (
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

                {/* Small Screens */}
                <Swiper
                  className="swiper-container w-full"
                  modules={[Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  pagination={{ clickable: true, el: ".custom-pagination" }}
                >
                  {carsData2.map((car, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        title={car.title}
                        type={car.type}
                        price={car.price}
                        discount={car.discount}
                        features={car.features}
                        image={car.image}
                        isFavorite={car.isFavorite}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="custom-pagination mt-4"></div>
            </div>
        </div>

        {/* Reviews */}
        <div className="w-[327px] lg:w-[1016px] h-[387px] lg:h-[452px] left-[20px] lg:left-[375px] top-[790px] lg:top-[572px] absolute bg-white rounded-[10px]">
            <div className="left-[24px] top-[24px] absolute justify-start items-start gap-3 inline-flex">
            <div className="w-20 h-7 text-[#1a202c] text-xl font-semibold">Reviews</div>
            <div className="w-11 h-7 px-5 bg-[#3563e9] rounded justify-center items-center gap-2 flex">
                <div className="w-5 h-4 text-center text-white text-sm font-bold">13</div>
            </div>
            </div>
            <div className="w-[295px] lg:w-[968px] h-[108px] lg:h-[124px] left-[24px] top-[84px] absolute">
            <div className="h-11 lg:h-14 left-[55px] lg:left-[72px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[102px] lg:w-32 h-5 lg:h-7 text-[#1a202c] text-base lg:text-xl font-bold leading-6 lg:leading-[30px]">Alex Stanton</div>
                <div className="w-[108px] lg:w-32 h-4 lg:h-5 text-[#90a3bf] text-xs lg:text-sm font-medium leading-4 lg:leading-[21px]">CEO at Bukalapak</div>
            </div>

            <div className="h-11 lg:h-14 left-[180px] lg:left-[840px] mt-1 absolute flex-col justify-start items-end gap-2 inline-flex">
                <div className="w-20 lg:w-32 h-6 lg:h-7 text-right text-[#90a3bf] text-xs lg:text-sm font-medium leading-4 lg:leading-[21px]">21 July 2022</div>
                <Image src={Rating} alt="Rating" />
            </div>
            <Image src={AlexStanton} alt="AlexStanton" className="w-11 lg:w-14 h-11 lg:h-14" />

            <div className="w-[243px] lg:w-[896px] left-[55px] lg:left-[72px] top-[68px] absolute text-[#596780] text-xs lg:text-sm font-normal leading-6 line-clamp-2">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</div>
            </div>

            <div className="w-[968px] h-32 left-[24px] top-[232px] absolute">
            <div className="h-14 left-[55px] lg:left-[72px] top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-32 h-7 text-[#1a202c] text-xl font-bold leading-[30px]">Skylar Dias</div>
                <div className="w-32 h-5 text-[#90a3bf] text-sm font-medium leading-[21px]">CEO at Amazon</div>
            </div>
            <div className="h-11 lg:h-14 left-[180px] lg:left-[840px] mt-2 absolute flex-col justify-start items-end gap-2 inline-flex">
                <div className="w-20 lg:w-32 h-6 lg:h-7 text-right text-[#90a3bf] text-xs lg:text-sm font-medium leading-4 lg:leading-[21px]">20 July 2022</div>
                <Image src={Rating} alt="Rating"/>
            </div>
            <div className="w-[243px] lg:w-[896px] left-[55px] lg:left-[72px] top-[72px] absolute text-[#596780] text-xs lg:text-sm font-normal leading-6 line-clamp-2">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</div>
            <Image src={SkylarDias} alt="SkylarDias" className="w-11 lg:w-14 h-11 lg:h-14 left-0 top-0" />
            </div>

            <div className="w-[132px] h-11 px-5 left-[120px] lg:left-[454px] top-[350px] lg:top-[384px] absolute rounded justify-center items-center gap-2 inline-flex">
            <div className="w-[68px] h-6 text-center text-[#90a3bf] text-sm lg:text-base font-semibold leading-snug lg:leading-normal">Show All</div>
            </div>
        </div>
    </div>
    )
}

