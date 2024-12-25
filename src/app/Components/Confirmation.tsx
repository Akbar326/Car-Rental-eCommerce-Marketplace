import Image from "next/image"
import Safe from "@/app/assets/Safe.png"
import { MdCheckBoxOutlineBlank } from "react-icons/md"

export function Confirmation() {
  return (
    <div className="bg-white rounded-[10px] p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-[#1a202c]">Confirmation</h2>
          <p className="text-sm text-[#90a3bf]">We are getting to the end. Just few clicks and your rental is ready!</p>
        </div>
        <span className="text-sm text-[#90a3bf]">Step 4 of 4</span>
      </div>
      <div className="space-y-4">
        <CheckboxField label="I agree with sending an Marketing and newsletter emails. No spam, promissed!" />
        <CheckboxField label="I agree with our terms and conditions and privacy policy." />
      </div>
      <button className="bg-[#3563e9] text-white font-bold py-4 px-6 rounded-[10px]">
        Rent Now
      </button>
      <div className="flex items-start gap-4">
        <Image src={Safe} alt="Safe Icon" className="w-8 h-8" />
        <div>
          <h3 className="text-[#1a202c] font-semibold">All your data are safe</h3>
          <p className="text-sm text-[#90a3bf]">We are using the most advanced security to provide you the best experience ever.</p>
        </div>
      </div>
    </div>
  )
}

function CheckboxField({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 bg-[#f6f7f9] rounded-[10px] p-4">
      <MdCheckBoxOutlineBlank className="text-[#90a3bf] text-2xl flex-shrink-0" />
      <span className="text-[#1f2544] font-semibold">{label}</span>
    </div>
  )
}

