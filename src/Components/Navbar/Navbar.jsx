import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "../MobileMenu/MobileMenu";
import AccountMenu from "../AccountMenu/AccountMenu";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "./../../assets/logo.svg";
import userPhoto from "./../../assets/BlueNetflix.jpg";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [ShowBackground, setShowBackground] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [previousUrl, setPreviousUrl] = useState("");

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const searchHandler = () => {
    setSearchActive(!searchActive);
  };

  const onChangeHandler = (e) => {
    if (e.target.value === "") {
      navigate(previousUrl);
      setPreviousUrl("");
      console.log("Empty");
    } else {
      if (pathname !== "/search") {
        setPreviousUrl(pathname);
      }
      navigate(`/search?q=${e.target.value}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY >= TOP_OFFSET);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  if (
    pathname === "/signin" ||
    pathname === "/signup" ||
    pathname === "/register" ||
    pathname === "/watch"
  )
    return null;

  return (
    <nav className="w-full fixed z-20">
      <div
        className={`
        px-4
        md:px-16
        py-4
        flex
        flex-row
        items-center
        transition
        duration-500
        ${
          ShowBackground
            ? "bg-zinc-900 bg-opacity-90"
            : "bg-gradient-to-b from-black"
        }
        `}
      >
        <img className="h-4 lg:h-7" src={logo} alt="" />

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" redirect={() => navigate("/")} />
          <NavbarItem label="Series" redirect={() => navigate("/series")} />
          <NavbarItem label="Movies" redirect={() => navigate("/movies")} />
          <NavbarItem label="My List" redirect={() => navigate("/mylist")} />
        </div>

        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div
            className={`relative cursor-pointer transition-all duration-500 ml-2 ${
              searchActive ? " w-[15em]" : " w-[1em]"
            }`}
          >
            <BsSearch
              onClick={searchHandler}
              className="absolute m-2 left-0 top-0 bottom-0 my-auto z-10 text-gray-200 hover:text-gray-300"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              className={`bg-black outline outline-1 appearance-none pl-8 py-1 pr-2 outline-white w-full transition-all text-white text-sm ${
                searchActive ? "visible" : "invisible pointer-events-none"
              }`}
              placeholder="Search Titles..."
            />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={userPhoto} alt="default-user-photo" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
