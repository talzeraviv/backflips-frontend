import {
  USER_SIGNIN,
  USER_SIGNOUT,
  ADD_TO_FAVORITES,
  TOGGLE_MUTE,
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
    case ADD_TO_FAVORITES: {
      localStorage.setItem("userFavorites", JSON.stringify(payload));
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
