import Image from "next/image"
import Rating from "@/app/assets/Rating.png"
import Car from "@/app/assets/NissanGTRBackground.png"
import VisaCard from "@/app/assets/VisaCard.png"
import MasterCard from "@/app/assets/MasterCard.png"
import PayPal from "@/app/assets/PayPal.png"
import BitCoin from "@/app/assets/Bitcoin.png"
import Safe from "@/app/assets/Safe.png"

import { FaChevronDown } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

export default function PaymentPage() {
    return (
    <div className="w-[1440px] h-[2240px] relative bg-[#f6f7f9]">

        {/* Rental Summary */}
        <div className="w-[492px] h-[560px] left-[916px] top-[32px] absolute bg-white rounded-[10px]">
            <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Rental Summary</div>
            <div className="w-[444px] h-12 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Prices may change depending on the length of the rental and the price of your rental car.</div>
            </div>
            <Image src={Car} alt="Nissan GT-R" className="left-[24px] top-[132px] absolute" />            
            <div className="left-[172px] top-[150px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[220px] h-10 text-[#1a202c] text-[32px] font-bold font-['Plus Jakarta Sans'] leading-[48px]">Nissan GT - R</div>
            <div className="h-6 justify-start items-center gap-2 inline-flex">
                <Image src={Rating} alt="" />
                <div className="w-[104px] h-5 text-[#596780] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">440+ Reviewer</div>
            </div>
            </div>
            <div className="w-[444px] h-[0px] left-[24px] top-[272px] absolute border border-[#c3d4e9]/40"></div>
            <div className="left-[24px] top-[304px] absolute justify-start items-start gap-[212px] inline-flex">
            <div className="w-[116px] h-5 text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Subtotal</div>
            <div className="w-[116px] h-5 text-right text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">$80.00</div>
            </div>
            <div className="left-[24px] top-[348px] absolute justify-start items-start gap-[212px] inline-flex">
            <div className="w-[116px] h-5 text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Tax</div>
            <div className="w-[116px] h-5 text-right text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">$0</div>
            </div>

            <div className="w-[444px] h-14 left-[24px] top-[400px] absolute">
            <div className="w-[444px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
            <input type="text" placeholder="Apply promo code" className="w-44 h-8 left-[32px] top-[12px] absolute text-[#90a3bf] bg-[#f6f7f9] text-sm font-medium leading-[21px]" />
            <div className="w-[100px] h-6 left-[312px] top-[16px] absolute text-right text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Apply now</div>
            </div>

            <div className="left-[24px] top-[488px] absolute justify-start items-start gap-8 inline-flex">
            <div className="w-[284px] flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Total Rental Price</div>
                <div className="w-[284px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Overall price and includes rental discount</div>
            </div>
            <div className="w-32 h-12 text-right text-[#1a202c] text-[32px] font-bold font-['Plus Jakarta Sans']">$80.00</div>
            </div>
        </div>

        {/* Payment Detail */}
        <div className="left-[32px] top-[32px] absolute flex-col justify-start items-start gap-8 inline-flex">

                {/* Billing Info */}
                <div className="w-[852px] h-[336px] relative bg-white rounded-[10px]">
                    <div className="w-[72px] h-5 left-[756px] top-[52px] absolute text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Step 1 of 4</div>
                    <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                        <div className="w-48 h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Billing Info</div>
                        <div className="w-48 h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Please enter your billing info</div>
                    </div>

                    <div className="left-[24px] top-[104px] absolute flex-col justify-start items-start gap-4 inline-flex">
                        <div className="w-12 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Name</div>
                        <div className="w-[386px] h-14 relative">
                        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                        <input type="text" placeholder="Your name" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                        </div>
                    </div>
                    <div className="left-[24px] top-[220px] absolute flex-col justify-start items-start gap-4 inline-flex">
                        <div className="w-[68px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Address</div>
                        <div className="w-[386px] h-14 relative">
                        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                        <input type="text" placeholder="Address" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                        </div>
                    </div>
                    <div className="left-[442px] top-[104px] absolute flex-col justify-start items-start gap-4 inline-flex">
                        <div className="w-[116px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Phone Number</div>
                        <div className="w-[386px] h-14 relative">
                        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                        <input type="phone" placeholder="Phone Number" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                        </div>
                    </div>
                    <div className="left-[442px] top-[220px] absolute flex-col justify-start items-start gap-4 inline-flex">
                        <div className="w-[92px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Town / City</div>
                        <div className="w-[386px] h-14 relative">
                        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                        <input type="text" placeholder="Town or City" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                        </div>
                    </div>
                </div>

                {/* Rental Info */}
                <div className="w-[852px] h-[664px] relative bg-white rounded-[10px]">
                    <div className="w-[72px] h-5 left-[756px] top-[52px] absolute text-right text-[#90a3bf] text-sm font-medium leading-[21px]">Step 2 of 4</div>
                    <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                        <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Rental Info</div>
                        <div className="w-[200px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Please select your rental date</div>
                    </div>

                    {/* Pick-Up */}
                    <div className="left-[24px] top-[104px] absolute justify-start items-center gap-2 inline-flex">
                        <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
                        <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
                        </div>
                        <div className="w-[75px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">Pick - Up</div>
                    </div>
                    <div className="left-[24px] top-[148px] absolute flex-col justify-start items-start gap-4 inline-flex">
                        <div className="w-20 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
                        <div className="w-[386px] h-14 relative">
                        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                        <input type="text" placeholder="Select your city" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                        < FaChevronDown className="w-3.5 h-3.5 left-[348px] top-[21px] absolute text-[#90a3bf]" />
                        </div>
                    </div>
                    <div className="left-[442px] top-[148px] absolute flex-col justify-start items-start gap-4 inline-flex">
                        <div className="w-10 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Date</div>
                        <div className="w-[386px] h-14 relative">
                        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                        <input type="text" placeholder="Select your date" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                        < FaChevronDown className="w-3.5 h-3.5 left-[348px] top-[21px] absolute text-[#90a3bf]" />
                        </div>
                    </div>
                    <div className="left-[24px] top-[264px] absolute flex-col justify-start items-start gap-4 inline-flex">
                        <div className="w-10 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Time</div>
                        <div className="w-[386px] h-14 relative">
                        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                        <input type="text" placeholder="Select your time" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                        < FaChevronDown className="w-3.5 h-3.5 left-[348px] top-[21px] absolute text-[#90a3bf]" />
                        </div>
                    </div>

                    {/* Drop off */}
                    <div className="left-[24px] top-[388px] absolute justify-start items-center gap-2 inline-flex">
                        <div className="p-1 bg-[#5caffc]/30 rounded-[70px] justify-center items-center flex">
                        <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
                        </div>
                        <div className="w-[90px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">Drop - Off</div>
                    </div>
                <div className="left-[24px] top-[432px] absolute flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-20 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
                    <div className="w-[386px] h-14 relative">
                    <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                    <input type="text" placeholder="Select your city" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                    < FaChevronDown className="w-3.5 h-3.5 left-[348px] top-[21px] absolute text-[#90a3bf]" />
                    </div>
                </div>
                <div className="left-[442px] top-[430px] absolute flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-10 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Date</div>
                    <div className="w-[386px] h-14 relative">
                    <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                    <input type="text" placeholder="Select your date" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                    < FaChevronDown className="w-3.5 h-3.5 left-[348px] top-[21px] absolute text-[#90a3bf]" />
                    </div>
                </div>
                <div className="left-[24px] top-[548px] absolute flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-10 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Time</div>
                    <div className="w-[386px] h-14 relative">
                    <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                    <input type="text" placeholder="Select your time" className="w-[300px] h-8 left-[32px] top-[12px] bg-[#f6f7f9] absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                    < FaChevronDown className="w-3.5 h-3.5 left-[348px] top-[21px] absolute text-[#90a3bf]" />
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="w-[852px] h-[596px] relative bg-white rounded-[10px]">
                <div className="w-[72px] h-5 left-[756px] top-[52px] absolute text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Step 3 of 4</div>
                <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                    <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Payment Method</div>
                    <div className="w-[236px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Please enter your payment method</div>
                </div>


                <div className="w-[804px] h-[308px] left-[24px] top-[104px] absolute bg-[#f6f7f9] rounded-[10px]">
                    <div className="left-[24px] top-[24px] absolute justify-start items-center gap-2 inline-flex">
                    <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
                        <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
                    </div>

                    <div className="w-[95px] h-5 text-[#1a202c] text-base font-semibold">Credit Card</div>
                    </div>
                    <div className="left-[24px] top-[76px] absolute flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-[104px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Card Number</div>
                    <div className="w-[362px] h-14 relative">
                        <div className="w-[362px] h-14 left-0 top-0 absolute bg-white rounded-[10px]" />
                    <input type="card number" placeholder="Card Number" className="w-[300px] h-8 left-[32px] top-[10px] bg-white absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                    </div>
                    </div>

                    <div className="left-[24px] top-[192px] absolute flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-[94px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Card Holder</div>
                    <div className="w-[362px] h-14 relative">
                        <div className="w-[362px] h-14 left-0 top-0 absolute bg-white rounded-[10px]" />
                        <input type="name" placeholder="Card Holder" className="w-[300px] h-8 left-[32px] top-[10px] bg-white absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                    </div>
                    </div>

                    <div className="left-[418px] top-[76px] absolute flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-[120px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Expration Date</div>
                    <div className="w-[362px] h-14 relative">
                        <div className="w-[362px] h-14 left-0 top-0 absolute bg-white rounded-[10px]" />
                        <input type="text" placeholder="DD / MM / YY" className="w-[300px] h-8 left-[32px] top-[10px] bg-white absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                    </div>
                    </div>

                    <div className="left-[418px] top-[192px] absolute flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-9 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">CVC</div>
                    <div className="w-[362px] h-14 relative">
                        <div className="w-[362px] h-14 left-0 top-0 absolute bg-white rounded-[10px]" />
                        <input type="number" placeholder="CVC" className="w-[300px] h-8 left-[32px] top-[10px] bg-white absolute text-[#90a3bf] text-sm font-medium leading-[21px]" />
                    </div>
                    </div>

                    <div className="left-[688px] top-[24px] absolute justify-start items-center gap-3 inline-flex">
                        <Image src={VisaCard} alt="Visa Card"/>
                        <Image src={MasterCard} alt="Master Card"/>
                    </div>
                </div>

                <div className="w-[804px] h-14 left-[24px] top-[436px] absolute">
                    <div className="w-[804px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                    <FaRegCircle className="w-6 h-6 left-[32px] top-[16px] absolute bg-[#FFFFFF] rounded-full text-[#90A3BF]"/>
                    <div className="w-[52px] h-6 left-[76px] top-[16px] absolute text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">PayPal</div>
                    <Image src={PayPal} alt="PayPal" className="w-[100px] h-6 left-[672px] top-4 absolute" /> 
                </div>

                <div className="w-[804px] h-14 left-[24px] top-[516px] absolute">
                    <div className="w-[804px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                    <FaRegCircle className="w-6 h-6 left-[32px] top-[16px] absolute bg-[#FFFFFF] rounded-full text-[#90A3BF]"/>
                    <div className="w-14 h-6 left-[76px] top-[16px] absolute text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Bitcoin</div>
                    <Image src={BitCoin} alt="BitCoin" className="w-[93px] h-5 left-[672px] top-4 absolute" />
                </div>
                </div>

            <div className="w-[852px] h-[484px] relative bg-white rounded-[10px]">
            <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Confirmation</div>
                <div className="w-[436px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">We are getting to the end. Just few clicks and your rental is ready!</div>
            </div>
            <div className="w-[72px] h-5 left-[756px] top-[52px] absolute text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Step 4 of 4</div>

            <div className="left-[24px] top-[104px] absolute flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-[804px] h-14 relative">
                <div className="w-[804px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                < MdCheckBoxOutlineBlank className="w-6 h-6 left-[32px] top-[16px] absolute text-[#90a3bf]" />
                <div className="w-[683px] h-6 left-[76px] top-[16px] absolute text-[#1f2544] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>
                </div>

                <div className="w-[804px] h-14 relative">
                <div className="w-[804px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
                < MdCheckBoxOutlineBlank className="w-6 h-6 left-[32px] top-[16px] absolute text-[#90a3bf]" />
                <div className="w-[654px] h-6 left-[76px] top-[16px] absolute text-[#1f2544] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">I agree with our terms and conditions and privacy policy.</div>
                </div>
            </div>

            <div className="left-[24px] top-[360px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-8 h-8 relative">
                <Image src={Safe} alt="Safe Icon" />
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[204px] h-6 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">All your data are safe</div>
                <div className="w-[548px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">We are using the most advanced security to provide you the best experience ever.</div>
                </div>
            </div>
            <div className="w-[140px] h-14 px-5 left-[24px] top-[272px] absolute bg-[#3563e9] rounded-[10px] justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-white text-base font-bold font-['Plus Jakarta Sans']">Rent Now</div>
            </div>
            </div>
        </div>
    </div>
    )
}