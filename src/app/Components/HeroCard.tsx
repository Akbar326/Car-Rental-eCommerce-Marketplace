'use client'
import React from "react";
import CarsCards from "./CarsCards";
import Link from "next/link";

const HeroCard = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-10 px-7 md:px-10 bg-[#f6f7f9]">
      <div className="flex flex-col gap-8">
        {/* Popular Car Section */}
        <div className="flex justify-between items-center">
          <h3 className="text-left text-[#90a3bf] text-base font-semibold">
            Popular Car
          </h3>
          <Link href="/Wishlist" className="text-blue-600 text-base font-semibold hover:underline">
            Go to Wishlist
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <CarsCards category="popular" />
        </div>

        {/* Recommendation Car Section */}
        <div className="flex justify-between items-center">
          <h3 className="text-left text-[#90a3bf] text-base font-semibold">
            Recommended Car
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <CarsCards category="recommended" />
        </div>
      </div>

      {/* Shop More Button */}
      <div className="flex justify-between items-center w-[280px] md:w-[760px] h-[36px] md:h-[44px] ml-9 md:ml-[560px] mt-8 px-4">
        <Link href="/Category">
          <button className="bg-[#3563e9] text-white text-base font-semibold rounded px-5 py-2 flex justify-center items-center">
            Show more car
          </button>
        </Link>

        <p className="text-[#90a3bf] text-sm font-medium">120 Car</p>
      </div>
    </div>
  );
};

export default HeroCard;
