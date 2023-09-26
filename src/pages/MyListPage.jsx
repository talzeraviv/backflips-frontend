import React, { useEffect, useState, useContext } from "react";
import ContentCard from "../Components/ContentCard/ContentCard";
import { Store } from "../Context/StoreProvider";

const MyListPage = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { myList } = userInfo;

  return (
    <div className="flex flex-wrap w-screen h-screen">
      <div className="w-full h-full mx-16 my-28">
        <h1 className="text-white text-2xl my-5">
          {myList.length
            ? "My List:"
            : 'Please add content to "My List", in order to view your added content in this page.'}
        </h1>
        <div className="grid grid-cols-5 gap-4 mx-auto">
          {myList.map((content) => (
            <ContentCard
              key={content._id}
              content={content}
              className="max-w-xs"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyListPage;
