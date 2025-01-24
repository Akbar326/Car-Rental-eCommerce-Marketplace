// Import Images
import Image from "next/image";
import MainCard1 from "@/app/assets/HeroCard1.png";
import MainCard2 from "@/app/assets/HeroCard2.png";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="w-full max-w-[1440px] mx-auto h-auto px-4 relative bg-[#f6f7f9]">
            <div className="relative flex flex-col items-center justify-between sm:flex-row sm:h-auto gap-6">

                {/* Hero Main Card-1 */}
                <div className="flex flex-col items-start relative w-[327px] md:w-[640px] h-[232px] md:h-[340px] md:left-[25px] mb-[-45px] md:mb-1 mt-3 md:mt-2">
                    <Image src={MainCard1} alt="Main Card 1" className="" />
                    <div className="absolute inset-0 flex flex-col mt-2 md:mt-6 ml-2 md:ml-6 gap-2 md:gap-4">
                        <h2 className="w-[260px] md:w-[300px] text-white text-base md:text-[32px] font-semibold leading-6 md:leading-[48px]">
                            The Best Platform for Car Rental
                        </h2>
                        <p className="w-[216px] md:w-[284px] text-white text-xs md:text-base font-medium leading-5 md:leading-6">
                            Ease of doing a car rental safely and reliably. Of course at a low price.
                        </p>
                        <Link href="/Category">
                            <button className="w-[100px] md:w-[120px] md:h-11 h-9 px-5 bg-[#3563e9] rounded text-white text-xs md:text-base font-semibold">
                                Rental Car
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Hero Main Card-2 */}
                <div className="flex flex-col items-start relative w-[327px] md:w-[640px] h-[232px] md:h-[340px] md:right-[25px] mb-[-45px] md:mb-1 md:mt-2">
                    <Image src={MainCard2} alt="Main Card 2" className="" />
                    <div className="absolute inset-0 flex flex-col mt-2 md:mt-6 ml-2 md:ml-6 gap-2 md:gap-4">
                        <h2 className="w-[260px] md:w-[300px] text-white text-base md:text-[32px] font-semibold leading-6 md:leading-[48px]">
                            Easy way to rent a car at a low price
                        </h2>
                        <p className="w-[216px] md:w-[284px] text-white text-xs md:text-base font-medium leading-5 md:leading-6">
                            Providing cheap car rental services and safe and comfortable facilities.
                        </p>
                        <Link href="/Category">
                            <button className="w-[100px] md:w-[120px] md:h-11 h-9 px-5 bg-[#54A6FF] rounded text-white text-xs md:text-base font-semibold">
                                Rental Car
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
