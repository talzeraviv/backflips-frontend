import { useContext, useEffect, useState } from "react";
import ContentCarousel from "../ContentCarousel/ContentCarousel";
import { Store } from "../../Context/StoreProvider";

const RenderMyList = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [myList, setMyList] = useState(userInfo?.myList || []);

  useEffect(() => {
    if (userInfo?.myList) setMyList(userInfo.myList);
  }, [state]); // Update the dependency to include myList

  return myList ? (
    <ContentCarousel data={myList} listTitle="My List:" />
  ) : (
    <h1 className="text-white">Loading...</h1>
  );
};

export default RenderMyList;
