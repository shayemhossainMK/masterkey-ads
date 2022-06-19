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
            <label className="w-64 mt-3 flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="text-xs ml-3">
                I agree with
                <span className="text-primary ml-1">privacy & policy</span>
              </span>
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
              className="btn btn-outline btn-secondary px-5"
            >
              <img className="mr-2" src={googleLogo} alt="" />
              Continue with Google
            </button>
          </div>
          <div className="mt-3">
            <button
              onClick={() => signInWithFacebook()}
              className="btn btn-outline btn-secondary"
            >
              <img className="mr-2 w-7" src={facebookLogo} alt="" />
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
