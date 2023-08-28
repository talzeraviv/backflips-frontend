import React, { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";

const ContentCard = ({ content, isFirstInGroup, isLastInGroup }) => {
  const [showVideo, setShowVideo] = useState(false);
  const isMobile = window.innerWidth <= 640;

  const handleMouseEnter = () => setShowVideo(true);
  const handleMouseLeave = () => {
    setShowVideo(false);
    setPrevImgOpacity(100);
  };

  const [prevImgOpacity, setPrevImgOpacity] = useState(100);

  const hideImageOnPlayHandler = () => {
    setPrevImgOpacity(0);
  };

  const [rating, setRating] = useState(0); // Initialize with 0 or a default value
  // Calculate the rating when the component mounts
  useEffect(() => {
    // Use your rating calculation logic here, for example:
    const calculatedRating = 90 + Math.floor(Math.random() * 10); // Random rating between 0 and 100
    setRating(calculatedRating);
  }, []);

  let hoverIndent = "";

  if (isFirstInGroup || isLastInGroup) {
    hoverIndent = isFirstInGroup
      ? "group-hover:translate-x-[3vw]"
      : "group-hover:translate-x-[-3vw]";
  }

  return (
    <div
      className="group bg-zinc-900 relative w-full h-[10vw]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="cursor-pointer object-cover transition shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-full"
        src={content.imgThumb}
        alt={content.title}
      />
      <div
        className={`absolute opacity-0 top-0 transition duration-200 z-10 shadow-md invisible sm:visible delay-300 w-full h-full scale-0 group-hover:scale-125 group-hover:-translate-y-[6vw] ${hoverIndent} group-hover:opacity-100`}
      >
        <div className="w-full h-full">
          <img
            className={`absolute inset-0 object-cover h-full w-full ${
              showVideo ? "transition" : ""
            } opacity-${prevImgOpacity}`}
            src={content.imgThumb}
            alt=""
          />
          {showVideo && !isMobile && (
            <ReactPlayer
              url={content.video}
              controls={false}
              disablePictureInPicture={true}
              playing
              width="100%"
              height="100%"
              onPlay={hideImageOnPlayHandler}
            />
          )}
        </div>
        <div className="z-10 flex flex-col bg-zinc-800 gap-1 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center">
            <div
              className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 text-black gap-3"
              onClick={() => {}}
            >
              <BsFillPlayFill size={25} />
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
