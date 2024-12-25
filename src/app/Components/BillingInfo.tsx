export function BillingInfo() {
    return (
      <div className="bg-white rounded-[10px] p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-[#1a202c]">Billing Info</h2>
            <p className="text-sm text-[#90a3bf]">Please enter your billing info</p>
          </div>
          <span className="text-sm text-[#90a3bf]">Step 1 of 4</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Name" placeholder="Your name" />
          <InputField label="Phone Number" placeholder="Phone Number" />
          <InputField label="Address" placeholder="Address" />
          <InputField label="Town / City" placeholder="Town or City" />
        </div>
      </div>
    )
  }
  
  function InputField({ label, placeholder }: { label: string; placeholder: string }) {
    return (
      <div className="space-y-2">
        <label className="text-[#1a202c] font-semibold">{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-14 bg-[#f6f7f9] rounded-[10px] border-none outline-none px-4 text-sm text-[#90a3bf]"
        />
      </div>
    )
  }
  
  