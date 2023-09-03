import React, { useState, useEffect } from "react";
import useBillboard from "../../hooks/useBillboard";
import ReactPlayer from "react-player";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Billboard = ({ type }) => {
  const { data, error, isLoading } = useBillboard(type);
  const [titlePosition, setTitlePosition] = useState("lg:translate-y-40");
  const [descriptionOpacity, setDescriptionOpacity] = useState("lg:opacity-0");

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitlePosition("");
      setDescriptionOpacity("lg:opacity-100");
    }, 3000); // Change this to the desired delay in milliseconds

    return () => {
      clearTimeout(timeout);
    }; // Clear the timeout on unmount
  }, []);

  return (
    <div className="relative h-[120vh]">
      <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-b from-transparent to-zinc-900 z-10" />
      <div className="absolute inset-0">
        <ReactPlayer
          className="object-cover w-full h-full pointer-events-none"
          muted
          disablePictureInPicture
          playing
          loop
          controls={false}
          url={data?.video}
          alt={data?.title}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r w-3/4 from-black opacity-80"></div>
      <div className="absolute inset-0 bottom-32 flex flex-col justify-center w-1/2 px-12 gap-4 text-white">
        <div
          className={`transition-transform duration-[800ms] ${titlePosition}`}
        >
          <img src={data?.imgTitle} alt={data?.title} width={300} />
        </div>

        <div
          className={`transition-opacity duration-[2300ms] hidden md:visible md:block md:text-sm lg:text-base  ${descriptionOpacity}`}
        >
          <p className="line-clamp-4">{data?.description}</p>
        </div>

        <div
          className={`flex flex-row items-center gap-3 ${descriptionOpacity} transition-opacity duration-[2300ms]`}
        >
          <button
            className="bg-white text-black bg-opacity-100 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20"
            onClick={() => navigate(`/watch?id=${data._id}`)}
          >
            <BsFillPlayFill className="mr-1" />
            Play
          </button>
          <button className="bg-white bg-opacity-30 rounded-md md:py-2 py-1 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center whitespace-nowrap hover:bg-opacity-20">
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
