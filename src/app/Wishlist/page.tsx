"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";
import Link from "next/link";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const slugs = savedWishlist.map((item: any) => item.slug);

    if (slugs.length > 0) {
      const fetchWishlistData = async () => {
        const query = `*[_type == "car" && slug.current in $slugs] {
          name,
          brand,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          "slug": slug.current,
          "imageUrl": image.asset->url
        }`;
        const sanityData = await client.fetch(query, { slugs });
        setWishlist(sanityData);
        setLoading(false);
      };
      fetchWishlistData();
    } else {
      setLoading(false);
    }
  }, []);

  const removeFromWishlist = (slug: string) => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const updatedWishlist = savedWishlist.filter(
      (item: any) => item.slug !== slug
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist((prev) => prev.filter((item) => item.slug !== slug));
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center bg-[#f6f7f9] h-[calc(100vh-100px)]">
        <div className="loader"></div>
        <p className="text-lg font-semibold text-gray-500 mt-3">
          Loading your wishlist...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col bg-[#f6f7f9]">
      <h1 className="text-3xl font-bold text-gray-500 text-center mt-8 mb-5">
        Your Wishlist
      </h1>
      <div className="flex flex-wrap gap-5 justify-center p-5">
        {wishlist.length === 0 ? (
          <p className="text-xl text-gray-500 mt-32 text-center">
            Your wishlist is empty.
          </p>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.slug}
              className="w-[310px] h-[420px] relative bg-white rounded-[10px] shadow-md"
            >
              {/* Card Content (as is) */}
              <div className="absolute top-[24px] left-[24px] flex-col">
                <div className="text-[#1a202c] text-xl font-bold">
                  {item.name}
                </div>
                <div className="text-[#90a3bf] text-sm font-bold">
                  {item.type}
                </div>
              </div>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="absolute top-[125px] left-[36px] w-[232px] h-[100px] object-contain"
              />
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
              <div className="absolute bottom-[12px] left-[24px] flex-col w-[calc(100%-48px)]">
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center gap-1">
                    <p className="text-[#1a202c] text-xl font-bold">
                      {item.pricePerDay}/
                    </p>
                    <p className="text-[#90a3bf] text-sm">day</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Link href="/Payment">
                    <button className="bg-[#3563e9] text-white rounded-[4px] text-base font-semibold px-6 py-2 hover:bg-[#274bb7] transition">
                      Rent Now
                    </button>
                  </Link>
                  <button
                    onClick={() => removeFromWishlist(item.slug)}
                    className="bg-red-500 text-white rounded-[4px] text-base font-semibold px-6 py-2 hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
