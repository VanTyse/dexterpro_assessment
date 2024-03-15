import { useCallback, useEffect, useState } from "react";
import Icon from "./Icons/Icon";

export type DropdownValue = {
  label: string | React.ReactNode;
  value: string;
};

const Dropdown = ({
  value,
  items,
  onChange,
}: {
  value: DropdownValue;
  items: DropdownValue[];
  onChange: (value: DropdownValue) => void;
}) => {
  const [_value, _setValue] = useState(value);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShow = () => {
    setShowDropdown((x) => !x);
  };

  const handleSelect = (value: DropdownValue) => {
    _setValue(value);
  };

  useEffect(() => {
    onChange(_value);
    setShowDropdown(false);
  }, [_value]);

  const listener = useCallback(() => setShowDropdown(false), []);

  useEffect(() => {
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, []);

  return (
    <div className="relative z-10  w-fit" onClick={(e) => e.stopPropagation()}>
      <div
        className="flex justify-between gap-2 border rounded-md px-4 py-3 bg-white hover:cursor-pointer text-sm items-center w-[230px]"
        onClick={handleShow}
      >
        {_value.label}
        <div>
          <Icon name="chevron_down" />
        </div>
      </div>
      <div
        className={`absolute z-10 top-16 left-0 w-full bg-white rounded-md shadow-dashboard-card transition-all
          ${
            showDropdown
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }
      `}
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((item) => (
          <div
            className={`w-full text-sm whitespace-nowrap p-3 hover:cursor-pointer hover:bg-dxp-grey-10 
            first:rounded-t-md last:rounded-b-md ${
              item.value === _value.value && "text-dxp-green-4"
            }`}
            onClick={() => handleSelect(item)}
            key={item.value}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
