import { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import Input from "../Components/Input/Input";
import { useNavigate } from "react-router-dom";
import { Store } from "../Context/StoreProvider";
import axios from "axios";
import { USER_SIGNIN } from "../Reducers/Actions";

export const SignInPage = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      const { data } = await axios.post("/users/signin", {
        email,
        password,
      });
      await ctxDispatch({ type: USER_SIGNIN, payload: data });
      navigate("/");
    } catch (error) {}
  };

  const autofillCredentials = () => {
    setEmail("demo@example.com");
    setPassword("12345");
  };

  return (
    <div className="absolute h-full w-full bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src={logo} alt="logo" className="h-12 pointer-events-none" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
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
            <p className="text-neutral-500 mt-6">
              First time using Netflix?
              <span
                onClick={() => navigate("/signup")}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                Create an account
              </span>
            </p>

            <div className="text-neutral-500 mt-4 text-center justify-center">
              <span>Welcome to my Netflix clone :)</span>
              <p>
                For your convenience, you can use the following demo account:
              </p>
            </div>
            <div className="flex items-start justify-center flex-col text-white mt-4 p-4 outline outline-1 outline-white">
              <p>Username: demo@example.com</p>
              <p>Password: 12345</p>
              <button
                className="bg-white py-3 bg-opacity-30 rounded-md w-1/2 mt-4 hover:bg-opacity-20 transition m-auto"
                onClick={autofillCredentials}
              >
                Autofill
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
