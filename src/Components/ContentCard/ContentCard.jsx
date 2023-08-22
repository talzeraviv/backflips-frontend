import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const ContentCard = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span-1 relative h-[12vw] overflow-y-visible zindextransition">
      <img
        className="relative cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
        src={data.imgThumb}
        alt="Thunbnail"
      />
      <div className="opacity-0 top-10 absolute transition duration-200 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:z-50 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <div className="bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {}}
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <BsFillPlayFill className="text-black" size={30} />
            </div>
          </div>
          <img
            src={data.imgThumb}
            alt="Thumbnail"
            className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-full"
          />

          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white"> 2023</span>
          </p>

          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
