import React from "react";
import Card from "@/app/Components/Crads"

import Koenigsegg from "@/app/assets/Koenigsegg.png";
import NissanGTR from "@/app/assets/NissanGTR.png";
import RollsRoyce from "@/app/assets/RollsRoyce.png";
import NewRush from "@/app/assets/NewRush.png";
import CRV from "@/app/assets/CRV.png";
import NewTerios from "@/app/assets/NewTerios.png";
import CRV2 from "@/app/assets/CRV2.png";
import MGZXExclusive from "@/app/assets/MGZX.png";
import NewMGZS from "@/app/assets/NewMGZS.png";
import MGExcite from "@/app/assets/MGExite.png";


// Icon
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";

// First Popular Car
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
];


// Recomendation Car
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
    image: CRV2,
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
]

const HeroCard = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-10 px-7 md:px-10 bg-[#f6f7f9]">
      <div className="flex flex-col gap-8">
        {/* Popular Car Section */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-left text-[#90a3bf] text-base font-semibold">
              Popular Car
            </h3>
            <h3 className="text-center text-[#3563e9] text-base font-semibold">
              View All
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
        </div>

        {/* Recommendation Car Section */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-left text-[#90a3bf] text-base font-semibold">
              Recommendation Car
            </h3>
            <h3 className="text-center text-[#3563e9] text-base font-semibold">
              View All
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
        </div>
      </div>

      {/* Shop More Button */}
      <div className="flex justify-between items-center w-[280px] md:w-[760px] h-[36px] md:h-[44px] ml-9 md:ml-[560px] mt-8 px-4">
        <button className="bg-[#3563e9] text-white text-base font-semibold rounded px-5 py-2 flex justify-center items-center">Show more car</button>
        
        <p className="text-[#90a3bf] text-sm font-medium">120 Car</p>
      </div>

    </div>

  );
};

export default HeroCard;
