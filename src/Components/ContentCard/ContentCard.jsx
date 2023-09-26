import React, { useState, useEffect, useContext } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";
import { GoMute, GoUnmute } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Context/StoreProvider";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const ContentCard = ({ content, isFirstInGroup, isLastInGroup }) => {
  const { state, dispatch } = useContext(Store);
  const { isMuted } = state;

  const toggleMute = () => {
    dispatch({ type: "TOGGLE_MUTE" });
  };

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

  const navigate = useNavigate();

  const redirectToWatchPage = () => {
    navigate(`/watch?id=${content._id}`);
  };

  const [rating, setRating] = useState(0);
  useEffect(() => {
    const calculatedRating = 90 + Math.floor(Math.random() * 10);
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
      className="group bg-zinc-900 relative h-[8.5vw]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="cursor-pointer object-cover transition shadow-xl rounded-sm group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-full"
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
            <>
              <ReactPlayer
                url={content.video}
                controls={false}
                pip={false}
                playing
                width="100%"
                height="100%"
                onPlay={hideImageOnPlayHandler}
                muted={isMuted}
                loop={true}
              />
              <button
                className="absolute flex items-center justify-center left-0 bottom-0 cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full transition hover:bg-neutral-300 text-black lg:ml-4 ml-2 mb-2"
                onClick={toggleMute}
              >
                {isMuted ? <GoMute size={25} /> : <GoUnmute size={25} />}
              </button>
            </>
          )}
        </div>
        <div className="z-10 flex flex-col bg-zinc-800 gap-1 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center">
            <div
              className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 text-black gap-3"
              onClick={redirectToWatchPage}
            >
              <BsFillPlayFill size={25} />
            </div>
            <FavouriteButton content={content} />
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
