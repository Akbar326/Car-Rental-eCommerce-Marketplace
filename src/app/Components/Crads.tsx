"use client"
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Image from "next/image";

const Card = ({ title, type, price, discount ,features, image }: any) => {
    const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="w-[304px] h-[388px] relative bg-white rounded-[10px] shadow-md">
      {/* Title and Type */}
      <div className="absolute top-[24px] left-[24px] flex-col">
        <div className="text-[#1a202c] text-xl font-bold">{title}</div>
        <div className="text-[#90a3bf] text-sm font-bold">{type}</div>
      </div>

      {/* Heart Icon with Toggle */}
      <div
        className="absolute top-[24px] right-[24px] cursor-pointer"
        onClick={() => setIsFavorite(!isFavorite)} // Toggle state on click
      >
        {isFavorite ? (
          <IoHeart className="w-6 h-6 text-red-500" />
        ) : (
          <IoHeartOutline className="w-6 h-6 text-gray-400" />
        )}
      </div>

      {/* Features */}
      <div className="absolute bottom-[85px] left-[24px] flex gap-4">
        {features.map((feature: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            {feature.icon}
            <div className="text-[#90a3bf] text-sm font-medium">{feature.label}</div>
          </div>
        ))}
      </div>

      {/* Price, Discount, and Rent Button */}
      <div className="absolute bottom-[18px] left-[24px] flex-col w-[calc(100%-48px)]">
              {/* Price and Per Day */}
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <p className="text-[#1a202c] text-xl font-bold">${price.toFixed(2)}/</p>
                  <p className="text-[#90a3bf] text-sm font-bold">day</p>
                </div>
                <button className="w-[116px] h-[44px] bg-[#3563e9] text-white rounded-[4px] text-base font-semibold">Rent Now</button>
              </div>

              {/* Discount (optional) */}
              {discount && (
                <p className="text-[#90a3bf] text-sm font-bold -mt-2">
                  <span className="line-through text-[#90a3bf]">${discount.toFixed(2)}</span>
                </p>
              )}
            </div>

      {/* Image */}
      <Image src={image} alt={title} className="absolute top-[125px] left-[36px] w-[232px] h-[100px] object-contain"/>
      <div className="absolute top-[167px] w-full h-[90px] bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default Card;
