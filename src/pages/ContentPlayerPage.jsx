import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useSearchParams } from "react-router-dom";
import useRequestedContent from "../hooks/useRequestedContent";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function ContentPlayerPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { data, error, isLoading } = useRequestedContent(id);

  return <RenderContent content={data} error={error} isLoading={isLoading} />;
}

const RenderContent = ({ content, error, isLoading }) => {
  const [backArrowOpacity, setBackArrowOpacity] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(0);

  const handleMouseEnter = () => {
    setBackArrowOpacity(100);
    setAnimationDuration(0);
  };

  const handleMouseLeave = () => {
    setBackArrowOpacity(0);
    setAnimationDuration(0);
  };

  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading content...</h1>;
  }

  if (error) {
    return <h1>Error... {error.message}</h1>;
  }

  return (
    <div
      className="w-screen h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        url={content.video}
        controls={true}
        pip={false}
        playing
        width="100%"
        height="100%"
      />
      <BiArrowBack
        size={25}
        onClick={() => navigate(-1)}
        className={`absolute left-0 top-0 cursor-pointer text-white my-20 mx-6 transition duration-0 ease-in-out opacity-${backArrowOpacity}`}
      />
    </div>
  );
};

export default ContentPlayerPage;
