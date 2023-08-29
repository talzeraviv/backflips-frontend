import React from "react";
import { useNavigate } from "react-router-dom";

function MobileMenu({ visible }) {
  const navigate = useNavigate();

  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-4">
        <div
          className="px-3 text-center text-white hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className="px-3 text-center text-white hover:underline"
          onClick={() => navigate("/series")}
        >
          Series
        </div>
        <div
          className="px-3 text-center text-white hover:underline"
          onClick={() => navigate("/movies")}
        >
          Movies
        </div>
        <div
          className="px-3 text-center text-white hover:underline"
          onClick={() => navigate("/favorites")}
        >
          My Favourites
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
