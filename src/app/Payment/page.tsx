"use client"
import { useParams } from "next/navigation";
import { RentalInfo } from "@/app/Components/RentalInfo"
import { BillingInfo } from "@/app/Components/BillingInfo"
import { PaymentMethod } from "@/app/Components/PaymentMetod"
import { Confirmation } from "@/app/Components/Confirmation"
import { RentalSummary } from "@/app/Components/RentalSummary"


const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f7f9] p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <BillingInfo />
          <RentalInfo />
          <PaymentMethod />
          <Confirmation />
        </div>
        <div className="lg:col-span-1 order-first lg:order-last mb- lg:mb-0">
          <RentalSummary/>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage;

