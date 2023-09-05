import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../../Reducers/Actions";
import { postFetcher, deleteFetcher } from "../../libs/Fetcher";

const FavouriteButton = ({ content, dispatch, isFavourite }) => {
  const [favouriteToggle, setFavouriteToggle] = useState(isFavourite);
  const addRemoveFunc = () => {
    if (!favouriteToggle) {
      setFavouriteToggle(true);
      dispatch({ type: ADD_TO_FAVOURITES, payload: content });
      postFetcher("/users/list", { contentId: content._id });
    } else {
      setFavouriteToggle(false);
      dispatch({ type: REMOVE_FROM_FAVOURITES, payload: content });
      deleteFetcher("/users/list", "?contentId=", content._id);
    }
  };

  return (
    <div
      className="cursor-pointer group/item w-6 h-6 lg:w-8 lg:h-8 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300 ml-2 bg-white hover:bg-neutral-300 text-black gap-3"
      onClick={addRemoveFunc}
    >
      {favouriteToggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
    </div>
  );
};

export default FavouriteButton;
