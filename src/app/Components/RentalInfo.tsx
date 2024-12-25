export function RentalInfo() {
    return (
      <div className="bg-white rounded-[10px] p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-[#1a202c]">Rental Info</h2>
            <p className="text-sm text-[#90a3bf]">Please select your rental date</p>
          </div>
          <span className="text-sm text-[#90a3bf]">Step 2 of 4</span>
        </div>
        <RentalSection title="Pick - Up" bgColor="bg-[#3563e9]/30" dotColor="bg-[#3563e9]" />
        <RentalSection title="Drop - Off" bgColor="bg-[#5caffc]/30" dotColor="bg-[#54a6ff]" />
      </div>
    )
  }
  
  function RentalSection({ title, bgColor, dotColor }: { title: string; bgColor: string; dotColor: string }) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className={`p-1 ${bgColor} rounded-full`}>
            <div className={`w-2 h-2 ${dotColor} rounded-full`} />
          </div>
          <span className="text-[#1a202c] font-semibold">{title}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField label="Locations" placeholder="Select your city" />
          <SelectField label="Date" placeholder="Select your date" />
          <SelectField label="Time" placeholder="Select your time" />
        </div>
      </div>
    )
  }
  
  function SelectField({ label, placeholder }: { label: string; placeholder: string }) {
    return (
      <div className="space-y-2">
        <label className="text-[#1a202c] font-semibold">{label}</label>
          <select className="w-full h-14 bg-[#f6f7f9] rounded-[10px] px-4 text-sm text-[#90a3bf] appearance-none border-none outline-none">
            <option value="">{placeholder}</option>
          </select>
      </div>
    )
  }