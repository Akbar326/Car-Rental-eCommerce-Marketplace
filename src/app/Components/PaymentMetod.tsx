import Image from "next/image"
import VisaCard from "@/app/assets/VisaCard.png"
import MasterCard from "@/app/assets/MasterCard.png"
import PayPal from "@/app/assets/PayPal.png"
import BitCoin from "@/app/assets/Bitcoin.png"
import { FaRegCircle } from "react-icons/fa"

export function PaymentMethod() {
  return (
    <div className="bg-white rounded-[10px] p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#1a202c]">Payment Method</h2>
          <p className="text-sm text-[#90a3bf]">Please enter your payment method</p>
        </div>
        <span className="text-sm text-[#90a3bf]">Step 3 of 4</span>
      </div>
      <div className="bg-[#f6f7f9] rounded-[10px] p-6 space-y-6">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-[#3563e9]/30 rounded-full">
            <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
          </div>
          <span className="text-[#1a202c] font-semibold">Credit Card</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Card Number" placeholder="Card Number" />
          <InputField label="Expiration Date" placeholder="DD / MM / YY" />
          <InputField label="Card Holder" placeholder="Card Holder" />
          <InputField label="CVC" placeholder="CVC" type="number" />
        </div>
        <div className="flex justify-end items-center gap-3">
          <Image src={VisaCard} alt="Visa Card" />
          <Image src={MasterCard} alt="Master Card" />
        </div>
      </div>
      <PaymentOption icon={PayPal} name="PayPal" />
      <PaymentOption icon={BitCoin} name="Bitcoin" />
    </div>
  )
}

function InputField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[#1a202c] font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-14 bg-white rounded-[10px] px-4 text-sm text-[#90a3bf] border-none outline-none"
      />
    </div>
  )
}

function PaymentOption({ icon, name }: { icon: any; name: string }) {
  return (
    <div className="bg-[#f6f7f9] rounded-[10px] p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <FaRegCircle className="text-[#90A3BF]" />
        <span className="text-[#1a202c] font-semibold">{name}</span>
      </div>
      <Image src={icon} alt={name} className="w-[110px] h-6 " />
    </div>
  )
}

