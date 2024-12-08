// Import Icons
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
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

export default function DetailPage() {
    return (
<div className="w-[1440px] h-[2016px] relative bg-[#f6f7f9]">

    {/* Left Side Manue */}
    <div className="w-[360px] h-[1600px] left-0 top-0 absolute bg-white border-r border-[#f2f4f6]">
            {/* Type */}
            <div className="left-[32px] top-[32px] absolute flex-col justify-start items-start gap-7 inline-flex">
            <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-semibold">T Y P E</div>
            <div className="flex-col justify-start items-start gap-8 flex">

                {/* Sports */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <IoCheckbox className="w-6 h-6 top-1 text-[#3563E9] relative" />
                    <div className="w-36 h-6 text-justify gap-2"><span className="text-[#596780] text-xl font-semibold  leading-[30px]">Sport</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (10)</span></div>
                </div>

                {/* SUV */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <IoCheckbox className="w-6 h-6 top-1 text-[#3563E9] relative" />
                    <div className="w-20 h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">SUV</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (12)</span></div>
                </div>

                {/* MPV */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <MdCheckBoxOutlineBlank className="w-6 h-6 top-1 text-[#90A3BF] relative"/>
                    <div className="w-[88px] h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">MPV</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (16)</span></div>
                </div>

                {/* Sedan */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <MdCheckBoxOutlineBlank className="w-6 h-6 top-1 text-[#90A3BF] relative"/>
                    <div className="w-28 h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">Sedan</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (20)</span></div>
                </div>

                {/* Coupe */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <MdCheckBoxOutlineBlank className="w-6 h-6 top-1 text-[#90A3BF] relative"/>
                    <div className="w-28 h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">Coupe</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (14)</span></div>
                </div>

                {/* Hatchback */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <MdCheckBoxOutlineBlank className="w-6 h-6 top-1 text-[#90A3BF] relative"/>
                    <div className="w-40 h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">Hatchback</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (14)</span></div>
                </div>
            </div>
            </div>


            {/* Capacity */}
            <div className="left-[32px] top-[440px] absolute flex-col justify-start items-start gap-7 inline-flex">
            <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-semibold font-['Plus Jakarta Sans']">C A P A C I T Y</div>
            <div className="flex-col justify-start items-start gap-8 flex">

                {/* 2 Person */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <IoCheckbox className="w-6 h-6 top-1 text-[#3563E9] relative" />
                    <div className="w-36 h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">2 Person</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (10)</span></div>
                </div>

                {/* 4 Person */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <MdCheckBoxOutlineBlank className="w-6 h-6 top-1 text-[#90A3BF] relative"/>
                    <div className="w-[127px] h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">4 Person</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (14)</span></div>
                </div>

                {/* 6 Person */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <MdCheckBoxOutlineBlank className="w-6 h-6 top-1 text-[#90A3BF] relative"/>
                    <div className="w-[130px] h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">6 Person</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (12)</span></div>
                </div>

                {/* 8 or More */}
                <div className="justify-start items-start gap-2 inline-flex">
                    <IoCheckbox className="w-6 h-6 top-1 text-[#3563E9] relative" />
                    <div className="w-36 h-6 text-justify"><span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">8 or More</span><span className="text-[#90a3bf] text-xl font-semibold leading-[30px]">  (16)</span></div>
                </div>
            </div>
            </div>

            {/* Price */}
            <div className="left-[32px] top-[736px] absolute flex-col justify-start items-start gap-7 inline-flex">
            <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-semibold font-['Plus Jakarta Sans']">P R I C E</div>
            <div className="flex-col justify-start items-start gap-3 flex">
                <div className="w-[296px] h-5 relative">
                <div className="w-[296px] h-3 left-0 top-[4px] absolute bg-[#90a3bf] rounded-xl" />
                <div className="w-[220px] h-3 left-0 top-[4px] absolute bg-[#3563e9] rounded-xl" />
                <div className="w-5 h-5 left-[210px] top-0 absolute bg-[#3563e9] rounded-full border-4 border-white" />
                </div>
                <div className="w-[296px] h-6 text-justify text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">Max. $100.00</div>
            </div>
            </div>


    </div>
    
    {/* Car Images */}
    <Image src={CarMain} alt="Banner" className="w-[492px] h-[360px] left-[392px] top-[32px] absolute" />
    <Image src={CarPic1} alt="Car Picture" className="w-[148px] h-[124px] left-[392px] top-[416px] absolute" />
    <Image src={CarPic2} alt="Car Picture" className="w-[148px] h-[124px] left-[564px] top-[416px] absolute" />
    <Image src={CarPic3} alt="Car Picture" className="w-[148px] h-[124px] left-[736px] top-[416px] absolute" />


    <div className="w-[492px] h-[508px] left-[916px] top-[32px] absolute bg-white rounded-[10px]">

        {/* Car Detail */}
        <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <h1 className="w-[220px] h-10 text-[#1a202c] text-[32px] font-bold leading-[48px]">Nissan GT - R</h1>
            <IoHeart className="w-6 h-6 left-[410px] top-[10px] absolute text-red-500" />
            <div className="h-6 justify-start items-center gap-2 inline-flex">
                <Image src={Rating} alt="Rating" className="" />
                <div className="w-[104px] h-5 text-[#596780] text-sm font-medium tracking-tight">440+ Reviewer</div>
            </div>
        </div>

        <p className="w-[460px] h-[120px] left-[24px] top-[128px] absolute text-[#596780] text-xl font-normal leading-10">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
        </p>

        <div className="left-[24px] top-[280px] absolute justify-start items-start gap-10 inline-flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-start gap-3 inline-flex">
                <div className="w-[92px] h-7 text-[#90a3bf] text-xl font-normal leading-[30px]">Type Car</div>
                <div className="w-[92px] h-7 text-right text-[#596780] text-xl font-semibold leading-[30px]">Sport</div>
                </div>
                <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-[92px] h-7 text-[#90a3bf] text-xl font-normal leading-[30px]">Steering </div>
                <div className="w-[92px] h-7 text-right text-[#596780] text-xl font-semibold leading-[30px]">Manual</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-[92px] h-7 text-[#90a3bf] text-xl font-normal leading-[30px]">Capacity</div>
                <div className="w-[92px] h-7 text-right text-[#596780] text-xl font-semibold leading-[30px]">2 Person</div>
                </div>
                <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-[92px] h-7 text-[#90a3bf] text-xl font-normal leading-[30px]">Gasoline </div>
                <div className="w-[92px] h-7 text-right text-[#596780] text-xl font-semibold leading-[30px]">70L</div>
                </div>
            </div>
        </div>

        <div className="left-[24px] top-[420px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-[200px] h-8"><span className="text-[#1a202c] text-[28px] font-bold">$80.00/</span><span className="text-[#1a202c] text-[32px] font-bold font-['Plus Jakarta Sans']"> </span><span className="text-[#90a3bf] text-base font-bold font-['Plus Jakarta Sans']">days</span></div>
        <div className="w-[200px] h-5 text-[#90a3bf] text-base font-bold line-through">$100.00</div>
        </div>
        <div className="w-[140px] h-14 px-5 left-[328px] top-[420px] absolute bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
        <div className="w-[76px] h-6 text-center text-white text-base font-bold leading-normal">Rent Now</div>
        </div>
        <div className="w-6 h-6 left-[444px] top-[24px] absolute">
        <div className="w-6 h-6 left-0 top-0 absolute">
        </div>
        </div>
    </div>


    <div className="left-[392px] top-[1056px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start gap-[756px] inline-flex">
            <div className="w-[132px] h-11 px-5 rounded justify-center items-center gap-2 flex">
                <div className="w-[92px] h-6 text-center text-[#90a3bf] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Recent Car</div>
            </div>
            <div className="w-32 h-11 px-5 rounded justify-center items-center gap-2 flex">
                <div className="w-16 h-6 text-center text-[#3563e9] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">View All</div>
            </div>
        </div>

        <div className="justify-start items-start gap-8 inline-flex">
            {/* Koenigsegg */}
            <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
              <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-32 h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                  Koenigsegg
                </div>
                <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                  Sport
                </div>
              </div>
              <IoHeart className="w-6 h-6 left-[256px] top-[24px] absolute text-red-500" />

              <div className="left-[24px] top-[320px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[116px] h-11">
                  <span className="text-[#1a202c] text-xl font-bold]">
                    $99.00/{" "}
                  </span>
                  <span className="text-[#90a3bf] text-sm font-bold">
                    day
                  </span>
                </div>
              </div>
              <div className="w-[116px] h-11 px-5 left-[164px] top-[320px] absolute bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-white text-base font-semibold leading-normal">
                  Rent Now
                </div>
              </div>
              <div className="left-[24px] top-[272px] absolute justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-start gap-1.5 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute"></div>
                  </div>
                  <BsFuelPumpFill className="w-6 h-6 text-[#90A3BF] absolute" />
                  <div className="w-7 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                    90L
                  </div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <GiCartwheel className="w-6 h-6 text-[#90A3BF]" />
                  <div className="w-12 h-6 text-[#90a3bf] text-sm font-medium">
                    Manual
                  </div>
                </div>
                <div className="justify-start items-start gap-1.5 flex">
                  <HiUsers className="w-6 h-6 text-[#90a3bf]" />
                  <div className="w-[60px] h-6 text-[#90a3bf] text-sm font-medium">
                    2 People
                  </div>
                </div>
              </div>
              <Image
                src={Koenigsegg}
                alt="Koeingsegg"
                className="w-[232px] h-[72px] left-[36px] top-[136px] absolute"
              />
              <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
            </div>

            {/* Nissan GT-R */}
            <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
              <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-32 h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                  Nissan GT - R
                </div>
                <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                  Sport
                </div>
              </div>
              <div className="w-[116px] h-11 px-5 left-[164px] top-[320px] absolute bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-white text-base font-semibold leading-normal">
                  Rent Now
                </div>
              </div>
              <div className="left-[24px] top-[272px] absolute justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-start gap-1.5 flex">
                  <BsFuelPumpFill className="w-6 h-6 text-[#90A3BF]" />
                  <div className="w-7 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                    80L
                  </div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <GiCartwheel className="w-6 h-6 text-[#90A3BF]" />
                  <div className="w-12 h-6 text-[#90a3bf] text-sm font-medium">
                    Manual
                  </div>
                </div>
                <div className="justify-start items-start gap-1.5 flex">
                  <HiUsers className="w-6 h-6 text-[#90a3bf]" />
                  <div className="w-[60px] h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                    2 People
                  </div>
                </div>
              </div>
              <IoIosHeartEmpty className="w-6 h-6 text-[#90A3BF] left-[256px] top-[24px] absolute" />
              <div className="left-[24px] top-[316px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-32 h-6">
                  <span className="text-[#1a202c] text-xl font-bold">
                    $80.00/{" "}
                  </span>
                  <span className="text-[#90a3bf] text-sm font-bold">
                    day
                  </span>
                </div>
                <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold line-through">
                  $100.00
                </div>
              </div>
              <Image
                src={NissanGTR}
                alt="Nissa GT-R"
                className="w-[204px] h-16 left-[40px] top-[138px] absolute"
              />
              <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
            </div>

            {/* Rools Royce */}
            <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
              <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-32 h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                  Rolls - Royce
                </div>
                <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                  Sedan
                </div>
                <IoIosHeartEmpty className="w-6 h-6 text-[#90A3BF] left-[230px] absolute" />
              </div>
              <div className="w-6 h-6 left-[256px] top-[24px] absolute">
                <div className="w-6 h-6 left-0 top-0 absolute"></div>
              </div>
              <div className="left-[24px] top-[320px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[116px] h-11">
                  <span className="text-[#1a202c] text-xl font-bold">
                    $96.00/{" "}
                  </span>
                  <span className="text-[#90a3bf] text-sm font-bold">
                    day
                  </span>
                </div>
              </div>
              <div className="w-[116px] h-11 px-5 left-[164px] top-[320px] absolute bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-white text-base font-semibold leading-normal">
                  Rent Now
                </div>
              </div>
              <div className="left-[24px] top-[272px] absolute justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-start gap-1.5 flex">
                  <BsFuelPumpFill className="w-6 h-6 text-[#90A3BF]" />
                  <div className="w-7 h-6 text-[#90a3bf] text-sm font-medium">
                    70L
                  </div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <GiCartwheel className="w-6 h-6 text-[#90A3BF]" />
                  <div className="w-12 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                    Manual
                  </div>
                </div>
                <div className="justify-start items-start gap-1.5 flex">
                  <HiUsers className="w-6 h-6 text-[#90a3bf]" />
                  <div className="w-[60px] h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                    4 People
                  </div>
                </div>
              </div>
              <Image
                src={RollsRoyce}
                alt="Rolls Royce"
                className="w-[220px] h-[68px] left-[40px] top-[136px] absolute"
              />
              <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
            </div>
        </div>

    </div>

  <div className="left-[392px] top-[1536px] absolute flex-col justify-start items-start gap-4 inline-flex">
    <div className="justify-start items-start gap-[692px] inline-flex">
      <div className="w-[196px] h-11 px-5 rounded justify-center items-center gap-2 flex">
        <div className="w-[156px] h-6 text-center text-[#90a3bf] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Recomendation Car</div>
      </div>
      <div className="w-32 h-11 px-5 rounded justify-center items-center gap-2 flex">
        <div className="w-16 h-6 text-center text-[#3563e9] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">View All</div>
      </div>
    </div>

    <div className="justify-start items-start gap-8 inline-flex">

              {/*All  New Rush */}
              <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
                <div className="w-[116px] h-11 px-5 left-[164px] top-[320px] absolute bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
                  <div className="w-[76px] h-6 text-center text-white text-base font-semibold leading-normal">
                    Rent Now
                  </div>
                </div>
                <div className="left-[24px] top-[272px] absolute justify-start items-start gap-4 inline-flex">
                  <div className="justify-start items-start gap-1.5 flex">
                    <BsFuelPumpFill className="w-6 h-6 text-[#90A3BF]" />
                    <div className="w-7 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                      70L
                    </div>
                  </div>
                  <div className="justify-start items-start gap-1 flex">
                    <GiCartwheel className="w-6 h-6 text-[#90A3BF]" />
                    <div className="w-12 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                      Manual
                    </div>
                  </div>
                  <div className="justify-start items-start gap-1.5 flex">
                    <HiUsers className="w-6 h-6 text-[#90a3bf]" />
                    <div className="w-[60px] h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                      6 People
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 left-[256px] top-[24px] absolute">
                  <div className="w-6 h-6 left-0 top-0 absolute"></div>
                </div>
                <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-32 h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                    All New Rush
                  </div>
                  <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                    SUV
                  </div>
                  <IoIosHeartEmpty className="w-6 h-6 text-[#90A3BF] left-[220px] absolute" />
                </div>

                <Image
                  src={NewRush}
                  alt="NewRush"
                  className="w-56 h-[100px] left-[40px] top-[122px] absolute"
                />
                <div className="left-[24px] top-[316px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-32 h-6">
                    <span className="text-[#1a202c] text-xl font-bold">
                      $72.00/{" "}
                    </span>
                    <span className="text-[#90a3bf] text-sm font-bold">
                      day
                    </span>
                  </div>
                  <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold line-through">
                    $80.00
                  </div>
                </div>
                <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
              </div>

              {/* CR-V */}
              <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
                <div className="w-[116px] h-11 px-5 left-[164px] top-[320px] absolute bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
                  <div className="w-[76px] h-6 text-center text-white text-base font-semibold leading-normal">
                    Rent Now
                  </div>
                </div>
                <div className="left-[24px] top-[272px] absolute justify-start items-start gap-4 inline-flex">
                  <div className="justify-start items-start gap-1.5 flex">
                    <BsFuelPumpFill className="w-6 h-6 text-[#90A3BF]" />
                    <div className="w-7 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                      80L
                    </div>
                  </div>
                  <div className="justify-start items-start gap-1 flex">
                    <GiCartwheel className="w-6 h-6 text-[#90A3BF]" />
                    <div className="w-12 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                      Manual
                    </div>
                  </div>
                  <div className="justify-start items-start gap-1.5 flex">
                    <HiUsers className="w-6 h-6 text-[#90a3bf]" />
                    <div className="w-[60px] h-6 text-[#90a3bf] text-sm font-medium">
                      6 People
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 left-[256px] top-[24px] absolute">
                  <div className="w-6 h-6 left-0 top-0 absolute"></div>
                </div>
                <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-32 h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                    CR - V
                  </div>
                  <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                    SUV
                  </div>
                  <IoHeart className="w-6 h-6 left-[220px] absolute text-red-500" />
                </div>
                <div className="left-[24px] top-[320px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-32 h-11">
                    <span className="text-[#1a202c] text-xl font-bold">
                      $80.00/{" "}
                    </span>
                    <span className="text-[#90a3bf] text-sm font-bold">
                      day
                    </span>
                  </div>
                </div>
                <Image
                  src={CRV}
                  alt="CRV"
                  className="w-[248px] h-[100px] left-[40px] top-[122px] absolute"
                />
                <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
              </div>

              {/* New Terios */}
              <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
                <div className="w-[116px] h-11 px-5 left-[164px] top-[320px] absolute bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
                  <div className="w-[76px] h-6 text-center text-white text-base font-semibold leading-normal">
                    Rent Now
                  </div>
                </div>
                <div className="left-[24px] top-[272px] absolute justify-start items-start gap-4 inline-flex">
                  <div className="justify-start items-start gap-1.5 flex">
                    <BsFuelPumpFill className="w-6 h-6 text-[#90A3BF]" />
                    <div className="w-7 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                      90L
                    </div>
                  </div>
                  <div className="justify-start items-start gap-1 flex">
                    <GiCartwheel className="w-6 h-6 text-[#90A3BF]" />
                    <div className="w-12 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                      Manual
                    </div>
                  </div>
                  <div className="justify-start items-start gap-1.5 flex">
                    <HiUsers className="w-6 h-6 text-[#90a3bf]" />
                    <div className="w-[60px] h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
                      6 People
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 left-[256px] top-[24px] absolute">
                  <div className="w-6 h-6 left-0 top-0 absolute"></div>
                </div>
                <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[140px] h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                    All New Terios
                  </div>
                  <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                    SUV
                  </div>
                  <IoIosHeartEmpty className="w-6 h-6 text-[#90A3BF] left-[220px] absolute" />
                </div>
                <div className="left-[24px] top-[320px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-32 h-11">
                    <span className="text-[#1a202c] text-xl font-bold">
                      $74.00/{" "}
                    </span>
                    <span className="text-[#90a3bf] text-sm font-bold">
                      day
                    </span>
                  </div>
                </div>
                <Image
                  src={NewTerios}
                  alt="New Terios"
                  className="w-56 h-[100px] left-[40px] top-[122px] absolute"
                />
                <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
              </div>

    </div>
  </div>


    <div className="w-[1016px] h-[452px] left-[392px] top-[572px] absolute bg-white rounded-[10px]">
        <div className="left-[24px] top-[24px] absolute justify-start items-start gap-3 inline-flex">
        <div className="w-20 h-7 text-[#1a202c] text-xl font-semibold font-['Plus Jakarta Sans']">Reviews</div>
        <div className="w-11 h-7 px-5 bg-[#3563e9] rounded justify-center items-center gap-2 flex">
            <div className="w-5 h-4 text-center text-white text-sm font-bold font-['Plus Jakarta Sans']">13</div>
        </div>
        </div>
        <div className="w-[968px] h-[124px] left-[24px] top-[84px] absolute">
        <div className="h-14 left-[72px] top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-32 h-7 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Alex Stanton</div>
            <div className="w-32 h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">CEO at Bukalapak</div>
        </div>

        <div className="h-14 left-[840px] top-0 absolute flex-col justify-start items-end gap-2 inline-flex">
            <div className="w-32 h-7 text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">21 July 2022</div>
            <Image src={Rating} alt="Rating" />
        </div>
        <Image src={AlexStanton} alt="AlexStanton" className="w-14 h-14 left-0 top-0" />

        <div className="w-[896px] left-[72px] top-[68px] absolute text-[#596780] text-sm font-normal font-['Plus Jakarta Sans'] leading-7">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</div>
        </div>
        <div className="w-[968px] h-32 left-[24px] top-[232px] absolute">
        <div className="h-14 left-[72px] top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-32 h-7 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Skylar Dias</div>
            <div className="w-32 h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">CEO at Amazon</div>
        </div>
        <div className="h-14 left-[840px] top-0 absolute flex-col justify-start items-end gap-2 inline-flex">
            <div className="w-32 h-7 text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">20 July 2022</div>
            <Image src={Rating} alt="Rating"/>
        </div>
        <div className="w-[896px] left-[72px] top-[72px] absolute text-[#596780] text-sm font-normal font-['Plus Jakarta Sans'] leading-7">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</div>
        <Image src={SkylarDias} alt="SkylarDias" className="w-14 h-14 left-0 top-0" />
        </div>
        <div className="w-[132px] h-11 px-5 left-[454px] top-[384px] absolute rounded justify-center items-center gap-2 inline-flex">
        <div className="w-[68px] h-6 text-center text-[#90a3bf] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Show All</div>
        <div className="w-4 h-4 relative">
            <div className="w-4 h-4 left-0 top-0 absolute">
            </div>
        </div>
        </div>
    </div>
</div>
    )
}