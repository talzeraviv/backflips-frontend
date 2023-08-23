import axios from "axios";
import React from "react";
import Navbar from "../Navbar/navbar";
import useBillboard from "../../hooks/useBillboard";
import ReactPlayer from "react-player";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Billboard = () => {
  const { data } = useBillboard();
  return (
    <div className="relative h-[56.25vw] -z-10">
      <img
        className="absolute w-full h-full object-cover"
        src={data?.imgThumb}
        alt=""
      />
      <div className="absolute w-full h-full bg-zinc-900 bg-gradient-to-b from-zinc-900 to-transparent bg-opacity-10"></div>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 text-white">
        <p className=" text-xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-2xl">
          {data?.title}
        </p>
        <p className="text-[8px] md:text-lg mt-3 md:mt-8 w-[80%] md:w-[80%] lg:w-[50%]">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
