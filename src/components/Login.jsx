import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailSchema, PasswordSchema } from "../validation/login";
// import { supabase } from "../libs/supabase/client";
import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../context/GlobalContext";

const Login = () => {
  const navigate = useNavigate();

//   const { setIsAuthenticated } = useGlobalContext();

  const passwordRef = useRef(null);
  // This state is set to true when the email verification checks out to be true
  // used to conditionally render the password field if the email exits in database
  const [userEmailExit, setUserEmail] = useState(false);

  const [disableEmailSubmitBtn, setDisableEmailSubmitBtn] = useState(false);
  const [disablePasswordSubmitBtn, setDisablePasswordSubmitBtn] =
    useState(false);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
     resolver: zodResolver(EmailSchema) 
    });

  const handleEmailCheck = (value) => {
    // checks if the user email exists in the database
    setDisableEmailSubmitBtn(true);
    setUserDetails({ ...userDetails, email: value.email });
    setTimeout(() => {
      setUserEmail(true);
      setDisableEmailSubmitBtn(false);
    }, 500);
    // MAKE A POST REQUEST TO THE SERVER TO VERIFY EMAIL---IF SUCCESSFUL.
    // SUMBIT BTN DISAPPEARS AND PASSWORD FIELD APPEARS.
    // SAVE THE EMAIL IN THE USER CREDENTIAL STATE
  };

  const handlePasswordCheck = async (e) => {
    e.preventDefault();
    setDisablePasswordSubmitBtn(true);
    // Get the password value from the password input field
    const passwordValue = passwordRef.current.value;
    if (passwordValue === "" || passwordValue.length < 6) {
      setPasswordError("Password must be 6 characters");
      setDisablePasswordSubmitBtn(false);
      return;
    }
    // Validate password using Zod
    try {
      PasswordSchema.parse(passwordValue);

    //   // MANUAL WAY
    //   if (data.user !== null) {
    //     // update the isAuthenticated state using the setIsAuthenticated from the global context
    //     // setIsAuthenticated(data.user);
    //     //  using setTimeout to navigate to the dashboard route because the global context takes some time to update.
    //     setTimeout(() => navigate("/dashboard"), 2000);
    //     //  navigate("/dashboard");
    //     return;
    //   }

    //   error && setPasswordError("Password Incorrect");
      setPasswordError('Network Error')
      setDisablePasswordSubmitBtn(false);

      // update the isAuthenticated state using the setIsAuthenticated from the global context
      // handleSupaBaseSignIn(userDetails.email, passwordValue)
      // Password validation successful, navigate to dashboard
      // navigate("/dashboard");
    } catch (error) {
      // Password validation failed, update error message
      setPasswordError("Password must be 6 characters or above");
      setDisablePasswordSubmitBtn(false);
    }
  };

  return (
    <div className="h-[100dvh] w-screeny bg-[#1F2226]y bg-white text-[#1F2226] flex flex-col gap-4 justify-center px-3 items-center">
      <main className="space-y-4 text-center">
        <h1 className="text-slate-900 text-2xl md:text-3xl font-medium ">
          Login
        </h1>
        <div className="bg-[#F0F0F2] py-4 px-3 lg:py-8 lg:px-10 space-y-2 rounded-lg w-full md:w-[500px] lg:w-fit">
          {passwordError && (
            <p className="py-2 px-2 text-sm font-medium text-red-800 bg-red-400 rounded-md">
              {passwordError}
            </p>
          )}
          {/* Email Input */}
          <div className="space-y-4">
            <div className="input-container flex flex-col items-start gap-1">
              <label htmlFor="email" className="font-medium text-gray-600">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="px-3 py-2 text-base rounded-md border w-full lg:w-[400px] outline-none placeholder:text-gray-300 placeholder:text-sm"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-sm text-red-600 inline-block px-2 py-1 font-semibold">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex justify-start items-center">
              <button
                className={`${
                  userEmailExit && "hidden"
                } font-medium text-base bg-[#1F2226] disabled:bg-[#1f22264b] text-[#F0F0F2] py-2 px-6 rounded-lg`}
                onClick={handleSubmit(handleEmailCheck)}
                disabled={disableEmailSubmitBtn}
              >
                Submit
              </button>
              {disableEmailSubmitBtn && (
                <span className="loader">
                  <svg viewBox="25 25 50 50">
                    <circle r="10" cy="50" cx="50"></circle>
                  </svg>
                </span>
              )}
            </div>
          </div>
          {/* Password Input */}
          {userEmailExit && (
            <div className="space-y-4">
              <div className="input-container flex flex-col items-start gap-1 w-full">
                <label htmlFor="password" className="font-medium text-gray-600">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="px-3 py-2 text-base rounded-md border w-full lg:w-[400px] outline-none placeholder:text-gray-300 placeholder:text-sm"
                  placeholder="Enter your password"
                  ref={passwordRef}
                  onKeyDown={() => setPasswordError("")}
                />
              </div>
              <div className="flex justify-start items-center">
                <button
                  className={`font-medium text-base bg-[#1F2226] disabled:bg-[#1f22264b] text-[#F0F0F2] py-2 px-6 rounded-lg`}
                  onClick={(e) => handlePasswordCheck(e)}
                  disabled={disablePasswordSubmitBtn}
                >
                  Submit
                </button>
                {disablePasswordSubmitBtn && (
                  <span className="loader">
                    <svg viewBox="25 25 50 50">
                      <circle r="10" cy="50" cx="50"></circle>
                    </svg>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Login;
