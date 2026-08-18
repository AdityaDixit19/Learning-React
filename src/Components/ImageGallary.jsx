import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ImageGallary() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-700 flex justify-center items-center">
      <div className="w-60 h-32 relative bg-zinc-700 rounded-md flex  shrink-0 overflow-hidden">
        <img
          className={`w-full h-full shrink-0 object-cover transition-transform duration-[800ms] ${
            val ? "-translate-x-[100%]" : "translate-x-[0%]"
          }`}
          src="https://images.unsplash.com/photo-1612916628677-475f676a6adf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <img
          className={`w-full h-full shrink-0 object-cover transition-transform duration-[800ms] ${
            val ? "-translate-x-[100%]" : "translate-x-[0%]"
          }`}
          src="https://images.unsplash.com/photo-1513384312027-9fa69a360337?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="absolute w-7 h-7 bg-[#dadada7b]  flex  items-center justify-center rounded-full bottom-1 right-[45%]"
        >
          <FaArrowRight size={".7em"} />
        </span>
      </div>
    </div>
  );
}
