import { useCallback, useContext, useState } from "react";
import logo from "../assets/logo.svg";
import Input from "../Components/input/Input";
import { useNavigate } from "react-router-dom";
import { Store } from "../Context/StoreProvider";
import axios from "axios";
import { USER_SIGNIN } from "../Reducers/Actions";

export const Signin = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const Navigate = useNavigate();

  const submitHandler = async () => {
    try {
      const { data } = await axios.post("/users/signin", {
        email,
        password,
      });
      console.log(data);
      await ctxDispatch({ type: USER_SIGNIN, payload: data });
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="absolute h-full w-full bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <img src={logo} alt="logo" className="h-12" />
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                Sign In
              </h2>
              <div className="flex flex-col gap-4">
                <Input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  label="Email"
                  type="email"
                />

                <Input
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  value={password}
                  type="password"
                />
              </div>
              <button
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition "
                onClick={submitHandler}
              >
                Login
              </button>
              <p className="text-neutral-500 mt-12">
                First time using Netflix?
                <span className="text-white ml-1 hover:underline cursor-pointer">
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
