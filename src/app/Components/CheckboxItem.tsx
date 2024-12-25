import { useState } from "react";

interface CheckboxItemProps {
  label: string;
  count: number;
}

const CheckboxItem = ({ label, count }: CheckboxItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => { setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="w-5 h-5 mt-1 text-[#3563E9] bg-white border-2 border-[#90A3BF] rounded-md focus:ring-0"
      />
      <span className="text-[#596780] mx-2 text-xl font-semibold">{label}</span>
      <span className="text-[#90a3bf] text-xl font-semibold"> ({count})</span>
    </div>
  );
};

export default CheckboxItem;
