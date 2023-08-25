import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import useBillboard from "../../hooks/useBillboard";
import ReactPlayer from "react-player";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const Billboard = () => {
  const { data } = useBillboard();
  const [titlePosition, setTitlePosition] = useState("translate-y-48");
  const [descriptionPosition, setDescriptionPosition] = useState("opacity-0");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitlePosition("");
      setDescriptionPosition("opacity-100");
    }, 3000); // Change this to the desired delay in milliseconds

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, []);

  return (
    <div className="relative h-[42vw]">
      <ReactPlayer
        className="absolute w-full h-full object-cover pointer-events-none"
        muted
        disablePictureInPicture={true}
        playing
        controls={false}
        url={data?.video}
        alt={data?.title}
        height={"100%"}
        width={"100%"}
      />
      <div className="absolute inset-0 bg-gradient-to-r w-3/4 from-black opacity-100"></div>

      <div className="absolute top-[60%] md:top-[40%] ml-4 md:ml-16 text-white drop-shadow-md shadow-black">
        <p
          className={`${titlePosition} transition-transform duration-1000 text-xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold`}
        >
          {data?.title}
        </p>
        <p
          className={`text-[8px] ${descriptionPosition} transition-opacity duration-[2000ms] md:text-lg mt-3 md:mt-8 w-[80%] md:w-[80%] lg:w-[45%] break-words`}
        >
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className={`bg-white text-black ${descriptionPosition} transition-opacity duration-[2000ms] bg-opacity-100 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20`}
          >
            <BsFillPlayFill className="mr-1" />
            Play
          </button>
          <button
            className={`bg-white ${descriptionPosition} transition-opacity duration-[2000ms] bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20`}
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
