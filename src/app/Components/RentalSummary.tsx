import Image from "next/image"
import Rating from "@/app/assets/Rating.png"
import Car from "@/app/assets/NissanGTRBackground.png"

export function RentalSummary() {
  return (
    <div className="bg-white rounded-[10px] p-4 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-[#1a202c]">Rental Summary</h2>
        <p className="text-sm text-[#90a3bf]">Prices may change depending on the length of the rental and the price of your rental car.</p>
      </div>
      <div className="flex items-center gap-4">
        <Image src={Car} alt="Nissan GT-R" className="w-40 h-auto" />
        <div>
          <h3 className="text-2xl font-bold text-[#1a202c]">Nissan GT - R</h3>
          <div className="flex items-center gap-2">
            <Image src={Rating} alt="Rating" />
            <span className="text-sm text-[#596780] text-nowrap">440+ Reviewer</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#c3d4e9]/40 pt-4 space-y-4">
        <PriceRow label="Subtotal" value="$80.00" />
        <PriceRow label="Tax" value="$0" />
      </div>
      <div className="bg-[#f6f7f9] rounded-[10px] p-4 flex justify-between items-center">
        <input type="text" placeholder="Apply promo code" className="bg-transparent text-[#90a3bf] text-sm border-none outline-none" />
        <button className="text-[#1a202c] font-semibold">Apply now</button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-[#1a202c]">Total Rental Price</h3>
          <p className="text-sm text-[#90a3bf]">Overall price and includes rental discount</p>
        </div>
        <span className="text-3xl font-bold text-[#1a202c]">$80.00</span>
      </div>
    </div>
  )
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[#90a3bf]">{label}</span>
      <span className="text-[#1a202c] font-semibold">{value}</span>
    </div>
  )
}
