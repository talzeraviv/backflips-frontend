import { useState, useContext, React } from "react";
import logo from "../assets/logo.svg";
import Input from "../Components/Input/Input";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Store } from "../Context/StoreProvider";
import axios from "axios";
import { USER_SIGNIN } from "../Reducers/Actions";

const SignUpPage = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState("email");
  const [error, setError] = useState(false);

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const nextStep = async () => {
    if (step == "email") {
      if (!error && email != "") {
        setStep("password");
      }
    } else if (step == "password") {
      if (password != "") {
        const { data } = await axios.post("/users/signup", {
          email: email,
          password: password,
        });
        console.log(data);
        await ctxDispatch({ type: USER_SIGNIN, payload: data });
        navigate("/");
      }
    }
  };

  const validEmailHandler = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(email)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="h-screen bg-no-repeat bg-[url('/src/assets/hero.jpg')] bg-center bg-fixed bg-cover">
      <div className="w-full h-full bg-black bg-gradient-to-t from-black via-transparent to-black bg-opacity-40">
        <nav className="px-12 py-5">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="sm:h-6 md:h-10 md:pl-28 h-4 cursor-pointer"
          />
        </nav>

        <div className="flex flex-col flex-shrink flex-grow justify-center items-center text-white md:p-40 sm:px-14 sm:py-14 self-center w-full">
          <div className="flex flex-col justify-center items-center text-center space-y-3 m-5">
            <h1 className="text-3xl sm:text-2xl lg:text-5xl font-bold">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="sm:text-xl">Watch anywhere. Cancel anytime.</p>
            <h3 className="lg:text-xl sm:text-xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </div>

          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row mx-4 sm:mx-0 justify-center items-center space-x-2">
            {step == "email" && (
              <Input
                label="Email address"
                onChange={(e) => {
                  validEmailHandler(e);
                }}
                id="email"
                type="email"
                value={email}
                error={error}
              />
            )}
            {step == "password" && (
              <>
                <Input
                  label="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  type="password"
                  value={password}
                />
              </>
            )}

            <button
              onClick={nextStep}
              className="bg-red-600 py-3 px-6 sm:text-xl text-white rounded-md hover:bg-red-700 transition flex flex-row justify-center items-center whitespace-nowrap"
            >
              <span>Get Started</span>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
