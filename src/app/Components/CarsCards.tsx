"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Import Icons
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";

export default function CarsCards({ category }: { category: string }) {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch car data from Sanity with error handling
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await client.fetch(`*[_type == "car"] {
          name, 
          brand, 
          type, 
          fuelCapacity, 
          transmission, 
          seatingCapacity, 
          pricePerDay, 
          originalPrice,
          tags,
          "slug": slug.current,
          "imageUrl": image.asset->url
        }`);
        setData(response);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError("Failed to fetch car data. Please try again later.");
      } finally {
        setLoading(false); // End loading
      }
    };
    fetchData();
  }, []);

  // Toggle favorite and update local storage
  const toggleFavorite = (car: any) => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    // Check if the car is already in the wishlist
    const isFavorited = savedWishlist.some((item: any) => item.slug === car.slug);

    let updatedWishlist;

    if (isFavorited) {
      // Remove car from wishlist
      updatedWishlist = savedWishlist.filter((item: any) => item.slug !== car.slug);
    } else {
      // Add car to wishlist
      updatedWishlist = [...savedWishlist, car];
    }

    // Save updated wishlist in local storage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Update state to re-render UI
    setFavorites((prev) => ({ ...prev, [car.slug]: !isFavorited }));
  };

  // Filter data based on category
  const filteredData = data.filter((item: any) => item.tags?.includes(category));

  if (loading) {
    return <p className="text-center text-[#90a3bf] text-lg font-semibold">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-lg font-semibold">{error}</p>;
  }

  return (
    <div className="flex flex-wrap gap-5">
      {filteredData.map((item: any, index: number) => (
        <div key={index} className="w-[310px] h-[420px] relative bg-white rounded-[10px] shadow-md">
          {/* Title and Type */}
          <div className="absolute top-[24px] left-[24px] flex-col">
            <div className="text-[#1a202c] text-xl font-bold">{item.name}</div>
            <div className="text-[#90a3bf] text-sm font-bold">{item.type}</div>
          </div>

          {/* Heart Icon with Toggle */}
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => toggleFavorite(item)}>
            {favorites[item.slug] ? (
              <IoHeart className="text-red-500 w-6 h-6" />
            ) : (
              <IoHeartOutline className="text-gray-400 w-6 h-6" />
            )}
          </div>

          {/* Image */}
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={300}
            height={200}
            className="absolute top-[125px] left-[36px] w-[232px] h-[100px] object-contain"
          />

          {/* Features */}
          <div className="flex items-center gap-3 absolute bottom-[120px] left-[24px]">
            <div className="flex items-center gap-1 text-[#90a3bf] text-lg font-medium">
              <BsFuelPumpFill />
              {item.fuelCapacity}
            </div>
            <div className="flex items-center gap-1 text-[#90a3bf] text-lg font-medium">
              <GiCartwheel />
              {item.transmission}
            </div>
            <div className="flex items-center gap-1 text-[#90a3bf] text-lg font-medium">
              <HiUsers />
              {item.seatingCapacity}
            </div>
          </div>

          {/* Price Section */}
          <div className="absolute bottom-[12px] left-[24px] flex-col w-[calc(100%-48px)]">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-1">
                <p className="text-[#1a202c] text-xl font-bold">{item.pricePerDay}/</p>
                <p className="text-[#90a3bf] text-sm">day</p>
              </div>
              {item.originalPrice && (
                <p className="text-[#90a3bf] text-sm">
                  <span className="line-through">{item.originalPrice}</span>
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Link href="/Payment">
                <button className="bg-[#3563e9] text-white rounded-[4px] text-base font-semibold px-6 py-2 hover:bg-[#274bb7] transition">Rent Now</button>
              </Link>
              <Link href={`Cars/${item.slug}`}>
                <button className="border border-[#3563e9] text-[#3563e9] rounded-[4px] text-base font-semibold px-8 py-2 hover:bg-[#f0f4ff] transition">Detail</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
