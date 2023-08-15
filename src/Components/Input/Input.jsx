import React from "react";
import { BiErrorAlt } from "react-icons/bi";

const Input = ({ id, onChange, value, label, type, error }) => {
  return (
    <div className="relative">
      <input
        size={40}
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        className={`
            ${
              error
                ? "outline outline-red-600 outline-1"
                : "outline outline-zinc-500 outline-1"
            }
            block 
            rounded-md 
            px-4 
            pt-6
            pb-1
            w-full
            text-md
            text-white
             bg-black
            appearance-none
            peer`}
        placeholder=""
      />

      <label
        htmlFor={id}
        className="
                absolute
                text-md
                text-zinc-400
                duration-150
                transform
                -translate-y-3
                scale-75
                top-4
                z-10
                origin-[0]
                left-4
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3"
      >
        {label}
      </label>
      <div>
        {error && (
          <div className="absolute text-red-600 flex flex-row space-x-1">
            <BiErrorAlt className="mt-1"></BiErrorAlt>
            <span>Please enter a valid {label}.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
