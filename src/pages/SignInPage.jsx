import { useCallback, useState } from "react";
import logo from "../assets/logo.svg";
import Input from "../Components/input/Input";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

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
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  label="Username or Email"
                  type="username"
                />

                <Input
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  value={password}
                  type="password"
                />
              </div>
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition ">
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
