import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";

const ContentCard = ({ content, isFirstInGroup, isLastInGroup }) => {
  const [showVideo, setShowVideo] = useState(false);
  const isMobile = window.innerWidth <= 640;

  const handleMouseEnter = () => setShowVideo(true);
  const handleMouseLeave = () => setShowVideo(false);

  const rating = 90 + Math.floor(Math.random() * 10);

  let hoverIndent = "";

  if (isFirstInGroup || isLastInGroup) {
    hoverIndent = isFirstInGroup
      ? "group-hover:translate-x-[3vw]"
      : "group-hover:translate-x-[-3vw]";
  }

  return (
    <div
      className="group bg-zinc-900 relative h-[10vw]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="cursor-pointer object-cover transition shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-full"
        src={content.imgThumb}
        alt={content.title}
      />
      <div
        className={`opacity-0 absolute top-0 transition duration-200 z-10 shadow-md invisible sm:visible delay-300 w-full scale-0 group-hover:scale-125 group-hover:-translate-y-[6vw] ${hoverIndent} group-hover:opacity-100`}
      >
        <div className="bg-black w-full h-[12vw] pointer-events-none">
          {showVideo && !isMobile && (
            <ReactPlayer
              url={content.video}
              controls={false}
              disablePictureInPicture={true}
              playing
              width="100%"
              height="100%"
            />
          )}
        </div>
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              className="cursor-pointer my-1 w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 text-black"
              onClick={() => {}}
            >
              <BsFillPlayFill size={30} />
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <p className="text-green-400 font-semibold">{rating}% Match</p>
            <p className="text-white text-[10px] lg:text-sm">
              {content.duration}
            </p>
          </div>
          <p className="text-white text-[10px] lg:text-sm">{content.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
