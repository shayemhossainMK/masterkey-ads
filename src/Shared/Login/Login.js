import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../img/google.svg";
import facebookLogo from "../../img/facebook.png";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    await signInWithEmailAndPassword(email, password);
  };
  const resetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    toast("Reset email send!");
  };
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-primary text-xs mt-2 px-3">
          User or password are not valid!
          <span
            onClick={resetPassword}
            className="text-green-400 ml-1 cursor-pointer underline"
          >
            Forget password?
          </span>
        </p>
      </div>
    );
  }
  if (user || googleUser || facebookUser) {
    navigate("/");
  }

  return (
    <div className="h-auto py-10 bg-gray-100">
      <div className="w-96 mx-auto px-10 py-10 bg-base-100 shadow-xl rounded-2xl">
        <div className="flex justify-evenly">
          <div className="text-secondary border-b-4 border-secondary font-semibold ">
            Login
          </div>
          <div className="font-semibold">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Email"
            className="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
            className="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />
          <br />
          {errorElement}
          <div className="flex items-center mt-4">
            <label className="w-64 mt-3 pl-2 flex items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />
              <span className="text-xs ml-2">Keep me logged in</span>
            </label>
            <button
              type="submit"
              className="btn btn-secondary btn-sm px-3 rounded-full text-white uppercase"
            >
              Login
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <div className="text-center">
          <div className="mx-auto">
            <button
              onClick={() => signInWithGoogle()}
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                class="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Continue with Google
            </button>
          </div>
          <div className="mt-3">
            <button
              onClick={() => signInWithFacebook()}
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              <svg
                class="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                ></path>
              </svg>
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
