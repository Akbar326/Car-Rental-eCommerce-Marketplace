// Import Icons
import { FaChevronDown } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import { IoHeart } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";

// Import Car Images
import Image from "next/image";
import Car1 from "@/app/assets/HeroCar1.png";
import Car2 from "@/app/assets/HeroCar2.png";
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


export default function Hero() {
  return (
    <div className="w-[1440px] h-[2120px] relative bg-[#f6f7f9]">
      {/* Hero Main Card-1 */}
      <div className="w-[640px] h-[360px] left-[64px] top-[32px] absolute bg-[#54a6ff] rounded-[10px]">
        <div className="w-[775px] h-[775px] left-[-157px] top-[-83px] absolute">
          <div className="w-[50px] h-[50px] left-[362px] top-[363px] absolute rounded-full border-8 border-white/5" />
          <div className="w-[150px] h-[150px] left-[312px] top-[313px] absolute rounded-full border-8 border-white/5" />
          <div className="w-[275px] h-[275px] left-[250px] top-[250px] absolute rounded-full border-8 border-white/5" />
          <div className="w-[400px] h-[400px] left-[187px] top-[188px] absolute rounded-full border-8 border-white/5" />
          <div className="w-[525px] h-[525px] left-[125px] top-[125px] absolute rounded-full border-8 border-white/5" />
          <div className="w-[650px] h-[650px] left-[62px] top-[63px] absolute rounded-full border-8 border-white/5" />
          <div className="w-[775px] h-[775px] left-0 top-0 absolute rounded-full border-8 border-white/5" />
          <Image
            src={Car1}
            alt="Car"
            className="w-[406px] h-[116px] left-[294px] top-[317px] absolute"
          />
        </div>
        <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-5 inline-flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[300px] text-white text-[32px] font-semibold leading-[48px]">
              The Best Platform for Car Rental
            </div>
            <div className="w-[284px] text-white text-base font-medium leading-normal">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </div>
          </div>
          <div className="w-[120px] h-11 px-5 bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
            <div className="w-20 h-6 text-center text-white text-base font-semibold leading-normal">
              Rental Car
            </div>
          </div>
        </div>
      </div>

      {/* Hero Main Card-2 */}
      <div className="w-[640px] h-[360px] left-[736px] top-[32px] absolute bg-[#3563e9] rounded-[10px]">
        <div className="w-[50px] h-[50px] left-[362px] top-[363px] absolute rounded-full border-8 border-white/5" />
        <div className="w-[150px] h-[150px] left-[312px] top-[313px] absolute rounded-full border-8 border-white/5" />
        <div className="w-[275px] h-[275px] left-[250px] top-[250px] absolute rounded-full border-8 border-white/5" />
        <div className="w-[400px] h-[400px] left-[187px] top-[188px] absolute rounded-full border-8 border-white/5" />
        <div className="w-[525px] h-[525px] left-[125px] top-[125px] absolute rounded-full border-8 border-white/5" />
        <div className="w-[650px] h-[650px] left-[62px] top-[63px] absolute rounded-full border-8 border-white/5" />
        <div className="w-[775px] h-[775px] left-0 top-0 absolute rounded-full border-8 border-white/5" />

        <div className="w-[758px] h-[360px] left-[-30px] top-0 absolute">
          <Image
            src={Car2}
            alt="Car"
            className="w-[340px] h-[108px] left-[230px] top-[232px] absolute origin-top-left"
          />
        </div>

        <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-5 inline-flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[300px] text-white text-[32px] font-semibold leading-[48px]">
              Easy way to rent a car at a low price
            </div>
            <div className="w-[284px] text-white text-base font-medium leading-normal">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </div>
          </div>
          <div className="w-[120px] h-11 px-5 bg-[#54a6ff] rounded justify-center items-center gap-2 inline-flex">
            <div className="w-20 h-6 text-center text-white text-base font-semibold leading-normal">
              Rental Car
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="origin-top-left -rotate-90 w-[60px] h-[60px] left-[690px] top-[520px] absolute">
        <div className="w-[42px] h-[60px] left-0 top-0 absolute origin-top-left -rotate-90 bg-[#103193]/30 rounded-[10px] blur-2xl" />
        <div className="w-[60px] h-[60px] left-0 top-0 absolute -rotate-90 bg-[#3563e9] rounded-[10px] flex justify-center items-center">
          <LuArrowDownUp className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Pick-Up Seection */}
      <div className="w-[582px] h-[132px] left-[64px] top-[424px] absolute rounded-[10px]">
        <div className="w-[582px] h-[136px] left-0 top-0 absolute bg-white rounded-[10px]" />
        <div className="left-[48px] top-[24px] absolute justify-start items-center gap-2 inline-flex">
          <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
            <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
          </div>
          <div className="w-[75px] h-5 text-[#1a202c] text-base font-semibold leading-normal">
            Pick - Up
          </div>
        </div>

        {/* Locarion */}
        <div className="left-[48px] top-[60px] absolute justify-start items-start gap-3 inline-flex">
          <div className="flex-col justify-start items-start gap-2 inline-flex">
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
          <div className="w-12 h-[0px] mx-3 origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>

          {/* Date */}
          <div className="flex-col justify-start items-start ml-[-30px] gap-2 inline-flex">
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
          <div className="w-12 h-[0px] mx-3 origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>

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
      <div className="w-[582px] h-[132px] left-[794px] top-[424px] absolute rounded-[10px]">
        <div className="w-[582px] h-[136px] left-0 top-0 absolute bg-white rounded-[10px]" />
        <div className="left-[48px] top-[24px] absolute justify-start items-center gap-2 inline-flex">
          <div className="p-1 bg-[#5caffc]/30 rounded-[70px] justify-center items-center flex">
            <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
          </div>
          <div className="w-[90px] h-5 text-[#1a202c] text-base font-semibold leading-normal">
            Drop - Off
          </div>
        </div>

        <div className="left-[48px] top-[60px] absolute justify-start items-start gap-3 inline-flex">

          {/* Location */}
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold leading-normal">
              Locations
            </div>
            <div className="justify-start items-center inline-flex">
              <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium leading-normal">
                Select your city
              </div>
              <FaChevronDown className="w-3.5 h-3.5 text-[#1A202C]" />
            </div>
          </div>
          <div className="w-12 h-[0px] mx-[20px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>

          {/* Date */}
          <div className="flex-col justify-start items-start ml-[-40px] gap-2 inline-flex">
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
          <div className="w-12 h-[0px] mx-3 origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>

          {/* Time */}
          <div className="flex-col justify-start items-start ml-[-20px]">
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

      {/* Popular Car Cards */}
      <div className="left-[64px] top-[592px] absolute flex-col justify-start items-start gap-8 inline-flex">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="justify-start items-start gap-[1076px] inline-flex">
            <div className="w-[132px] h-11 px-5 rounded justify-center items-center gap-2 flex">
              <div className="w-[92px] h-6 text-center text-[#90a3bf] text-base font-semibold">
                Popular Car
              </div>
            </div>
            <div className="w-[104px] h-11 px-5 rounded justify-center items-center gap-2 flex">
              <div className="w-16 h-6 text-center text-[#3563e9] text-base font-semibold">
                View All
              </div>
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
                <IoHeart className="w-6 h-6 left-[220px] absolute text-red-500" />
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

            {/* Nissan GT-R */}
            <div className="w-[304px] h-[388px] relative bg-white rounded-[10px]">
              <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-32 h-6 text-[#1a202c] text-xl font-bold leading-[30px]">
                  Nissan GT - R
                </div>
                <div className="w-32 h-5 text-[#90a3bf] text-sm font-bold leading-[21px]">
                  Sport
                </div>
                <IoIosHeartEmpty className="w-6 h-6 text-[#90A3BF] left-[220px] absolute" />
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
                  <div className="w-12 h-6 text-[#90a3bf] text-sm font-medium leading-[21px]">
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
              <Image
                src={NissanGTR}
                alt="Nissan GT-R"
                className="w-[204px] h-16 left-[40px] top-[138px] absolute"
              />
              <div className="w-6 h-6 left-[256px] top-[24px] absolute">
                <div className="w-6 h-6 left-0 top-0 absolute"></div>
              </div>
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
              <div className="w-[304px] h-[68px] absolute top-[167px] bg-gradient-to-b from-transparent to-white" />
            </div>
          </div>
        </div>

        {/* Recomended Car Crds */}
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="w-[196px] h-11 px-5 rounded justify-center items">
            <div className="w-[156px] h-6 text-center text-[#90a3bf] text-base font-semibold"> 
              Recomendation Car
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-8 flex">
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
                  src={CRV2}
                  alt="CRV"
                  className="w-[248px] h-[100px] left-[40px] top-[122px] absolute"
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
                  <IoHeart className="w-6 h-6 left-[220px] absolute text-red-500" />
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Shop More Button */}
      <div className="left-[642px] top-[2012px] absolute justify-start items-center gap-[438px] inline-flex">
        <div className="w-[156px] h-11 px-5 bg-[#3563e9] rounded justify-center items-center gap-2 flex">
          <div className="w-[116px] h-6 text-center text-white text-base font-semibold leading-normal">
            Show more car
          </div>
        </div>
        <div className="w-[140px] h-6 text-right text-[#90a3bf] text-sm font-medium leading-[21px]">
          120 Car
        </div>
      </div>

    </div>
  );
}
