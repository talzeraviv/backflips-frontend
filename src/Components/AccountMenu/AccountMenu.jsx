import React, { useContext } from "react";
import userBlue from "./../../assets/BlueNetflix.jpg";
import { Store } from "../../Context/StoreProvider";
import { USER_SIGNOUT } from "../../Reducers/Actions";
import { useNavigate } from "react-router-dom";

const AccountMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await ctxDispatch({ type: USER_SIGNOUT });
    navigate("/signin");
  };

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src={userBlue} alt="" />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={signOutHandler}
          className="px-3 text-center text-white text-sm"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
