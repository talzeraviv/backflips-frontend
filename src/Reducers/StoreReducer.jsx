import {
  USER_SIGNIN,
  USER_SIGNOUT,
  TOGGLE_MUTE,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "./Actions";

export const StoreReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_SIGNIN: {
      localStorage.setItem("userInfo", JSON.stringify(payload));
      return { ...state, userInfo: payload };
    }
    case USER_SIGNOUT: {
      localStorage.removeItem("userInfo");
      return { ...state, userInfo: null };
    }
    case ADD_TO_FAVOURITES: {
      const updatedMyList = [...state.userInfo.myList, payload];
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ ...state.userInfo, myList: updatedMyList })
      );
      return { ...state, userFavorites: payload };
    }
    case REMOVE_FROM_FAVOURITES: {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const updatedMyList = userInfo.myList.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ ...userInfo, myList: updatedMyList })
      );
      return { ...state, userFavorites: payload };
    }
    case TOGGLE_MUTE:
      return {
        ...state,
        isMuted: !state.isMuted,
      };
    default:
      return state;
  }
};
