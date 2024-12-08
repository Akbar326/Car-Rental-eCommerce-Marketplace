import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";

// Import Icons
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
import MGZXExclusive from "@/app/assets/MGZX.png";
import NewMGZS from "@/app/assets/NewMGZS.png";
import MGExcite from "@/app/assets/MGExite.png";


export default function CategoryPage() {
    return (
<div className="w-full max-w-[1441px] h-[1600px] relative bg-[#f6f7f9]">

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

  <div className="left-[392px] top-[200px] absolute flex-col justify-start items-start gap-8 inline-flex">
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

        <div className="justify-start items-start gap-8 inline-flex">

              {/* MG ZX Exclusice */}
              <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
                <div className="w-6 h-6 left-[256px] top-[24px] absolute">
                  <div className="w-6 h-6 left-0 top-0 absolute"></div>
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
                <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-40 h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                    MG ZX Exclusice
                  </div>
                  <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                    Hatchback
                  </div>
                  <IoIosHeartEmpty className="w-6 h-6 text-[#90A3BF] left-[220px] absolute" />
                </div>
                <div className="left-[24px] top-[316px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-32 h-6">
                    <span className="text-[#1a202c] text-xl font-bold">
                      $76.00/{" "}
                    </span>
                    <span className="text-[#90a3bf] text-sm font-bold">
                      day
                    </span>
                  </div>
                  <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold line-through">
                    $80.00
                  </div>
                </div>
                <Image
                  src={MGZXExclusive}
                  alt="MG ZX Eclusice"
                  className="w-[264px] h-[108px] left-6 top-[118px] absolute"
                />
                <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
              </div>

              {/* New MG ZS */}
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
                    New MG ZS
                  </div>
                  <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                    SUV
                  </div>
                  <IoIosHeartEmpty className="w-6 h-6 text-[#90A3BF] left-[220px] absolute" />
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
                  src={NewMGZS}
                  alt="New MG ZS"
                  className="w-72 h-28 top-[116px] absolute"
                />
                <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
              </div>

              {/* MG ZX Excite */}
              <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
                <div className="w-6 h-6 left-[256px] top-[24px] absolute">
                  <div className="w-6 h-6 left-0 top-0 absolute"></div>
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
                      4 People
                    </div>
                  </div>
                </div>
                <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-40 h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                    MG ZX Excite
                  </div>
                  <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                    Hatchback
                  </div>
                  <IoHeart className="w-6 h-6 left-[220px] absolute text-red-500" />
                </div>
                <Image
                  src={MGExcite}
                  alt="MG ZX Excite"
                  className="w-[264px] h-[108px] top-[118px] absolute"
                />
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
                <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
              </div>
        </div>
    </div>
            {/* Shop More Button */}
            <div className="left-[822px] top-[1492px] absolute justify-start items-center gap-[290px] inline-flex">
                <div className="w-[156px] h-11 px-5 bg-[#3563e9] rounded justify-center items-center gap-2 flex">
                <div className="w-[116px] h-6 text-center text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Show more car</div>
                </div>
                <div className="w-[140px] h-6 text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">120 Car</div>
            </div>

            {/* Arrow Button */}
            <div className="origin-top-left -rotate-90 w-[60px] h-[60px] left-[868px] top-[130px] absolute z-50">
            <div className="w-12 h-[60px] bg-[#103293]/30 rounded-[10px] blur-2xl absolute " />
                <div className="w-[60px] h-[60px] left-0 top-0 absolute -rotate-90 bg-[#3563e9] rounded-[10px] flex justify-center items-center">
                <LuArrowDownUp className="w-6 h-6 text-white" />
                </div>
            </div>

        {/* Pick-Up Seection */}
            <div className="w-[486px] h-[132px] left-[392px] top-[32px] absolute rounded-[10px]">
                <div className="w-[486px] h-[136px] left-0 top-0 absolute bg-white rounded-[10px]" />
                <div className="left-5 top-[24px] absolute justify-start items-center gap-2 inline-flex">
                    <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
                        <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
                    </div>
                    <div className="w-[75px] h-5 text-[#1a202c] text-base font-semibold leading-6">
                        Pick - Up
                    </div>
                </div>

            {/* Location */}
            <div className="w-[438px] h-12 left-5 top-[60px] absolute justify-start items-start gap-3 inline-flex">
            <div className="w-[110px] h-12 flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold leading-6">
                Locations
                </div>
                <div className="justify-start items-center inline-flex">
                <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium">
                    Select your city
                </div>
                <FaChevronDown className="w-3.5 h-3.5 text-[#1A202C]" />
                </div>
            </div>
            <div className="w-px h-full mx-7 border border-[#c3d4e9]/40"></div>

            {/* Date */}
            <div className="w-[116px] h-[48px] flex-col justify-start items-start ml-[-30px] gap-2 inline-flex">
                <div className="w-12 h-5 text-[#1a202c] text-base font-bold leading-normal">
                Date
                </div>
                <div className="justify-start items-center inline-flex">
                <div className="w-28 h-5 text-[#90a3bf] text-xs font-medium">
                    Select your date
                </div>
                <FaChevronDown className="w-3.5 h-3.5 text-[#1A202C]" />
                </div>
            </div>
            <div className="w-px h-full mx-4 border border-[#c3d4e9]/40"></div>


            {/* Time */}
            <div className="flex-col justify-start items-start ml-[-20px] gap-2 inline-flex">
                <div className="w-12 h-5 text-[#1a202c] text-base font-bold leading-normal">
                Time
                </div>
                <div className="justify-start items-center inline-flex">
                <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium">
                    Select your time
                </div>
                <FaChevronDown className="w-3.5 h-3.5 text-[#1A202C]" />
                </div>
            </div>
            </div>
        </div>

        {/* Drop-Off Section */}
        <div className="w-[486px] h-[132px] left-[921px] top-[32px] absolute rounded-[10px]">
            <div className="w-[486px] h-[136px] left-0 top-0 absolute bg-white rounded-[10px]" />

                <div className="left-5 top-[24px] absolute justify-start items-center gap-2 inline-flex">
                        <div className="p-1 bg-[#5caffc]/30 rounded-[70px] justify-center items-center flex">
                            <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
                        </div>
                        <div className="w-[90px] h-5 text-[#1a202c] text-base font-semibold leading-6">
                            Drop - Off
                        </div>
                </div>      

            {/* Location */}
            <div className="w-[438px] h-12 left-5 top-[60px] absolute justify-start items-start gap-3 inline-flex">
            <div className="w-[110px] h-12 flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold leading-6">
                Locations
                </div>
                <div className="justify-start items-center inline-flex">
                <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium">
                    Select your city
                </div>
                <FaChevronDown className="w-3.5 h-3.5 text-[#1A202C]" />
                </div>
            </div>
            <div className="w-px h-full mx-7 border border-[#c3d4e9]/40"></div>

            {/* Date */}
            <div className="w-[116px] h-[48px] flex-col justify-start items-start ml-[-30px] gap-2 inline-flex">
                <div className="w-12 h-5 text-[#1a202c] text-base font-bold leading-normal">
                Date
                </div>
                <div className="justify-start items-center inline-flex">
                <div className="w-28 h-5 text-[#90a3bf] text-xs font-medium">
                    Select your date
                </div>
                <FaChevronDown className="w-3.5 h-3.5 text-[#1A202C]" />
                </div>
            </div>
            <div className="w-px h-full mx-4 border border-[#c3d4e9]/40"></div>


            {/* Time */}
            <div className="flex-col justify-start items-start ml-[-20px] gap-2 inline-flex">
                <div className="w-12 h-5 text-[#1a202c] text-base font-bold leading-normal">
                Time
                </div>
                <div className="justify-start items-center inline-flex">
                <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium">
                    Select your time
                </div>
                <FaChevronDown className="w-3.5 h-3.5 text-[#1A202C]" />
                </div>
            </div>
            </div>
        </div>

</div>
    )
}