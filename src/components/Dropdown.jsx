import { useState } from "react";

const Dropdown = ({ label = "Options", items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-300"
      >
        {label}
        <i className={`ri-arrow-down-s-line transition ${open ? "rotate-180" : ""}`}></i>
      </button>
      {open && (
        <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-50">
          {items.map((item, index) => (
            <button
              key={index}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
