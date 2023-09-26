import React, { useCallback, useMemo, useState, useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../../Reducers/Actions";
import { postFetcher, deleteFetcher } from "../../libs/Fetcher";
import useFavourites from "../../hooks/useFavourites";
import { Store } from "../../Context/StoreProvider";
import { mutate } from "swr";

const FavouriteButton = ({ content }) => {
  const { mutate: mutateFavourites } = useFavourites();
  const { state, dispatch } = useContext(Store);

  const isFavourite = useMemo(() => {
    return state?.userInfo?.myList.some(
      (favContent) => favContent._id === content._id
    );
  }, [state, content]);

  const toggleFavourites = useCallback(() => {
    if (isFavourite) {
      dispatch({ type: REMOVE_FROM_FAVOURITES, payload: content });
      deleteFetcher("/users/list", "?contentId=", content._id);
    } else {
      dispatch({ type: ADD_TO_FAVOURITES, payload: content });
      postFetcher("/users/list", { contentId: content._id });
    }

    mutate({ myList: state?.userInfo?.myList });
    mutateFavourites();
  }, [content._id, isFavourite, state, mutate, mutateFavourites]);

  const Icon = isFavourite ? AiOutlineMinus : AiOutlinePlus;

  return (
    <div
      className="cursor-pointer group/item w-6 h-6 lg:w-8 lg:h-8 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300 ml-2 bg-white hover:bg-neutral-300 text-black gap-3"
      onClick={toggleFavourites}
    >
      <Icon />
    </div>
  );
};

export default FavouriteButton;
