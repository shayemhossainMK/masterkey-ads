import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../img/google.svg";
import facebookLogo from "../../img/facebook.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;
    console.log(name, email, password, cpassword);

    if (password === cpassword) {
      await createUserWithEmailAndPassword(email, password);
    } else {
      window.alert("Your password is not matched!");
    }
  };
  if (user || googleUser) {
    navigate("/");
  }
  return (
    <div className="h-auto pb-10 bg-gray-100">
      <div className="w-96 mx-auto px-10 py-10 bg-base-100 shadow-xl rounded-2xl">
        <div className="flex justify-evenly">
          <div className="font-semibold">
            <Link to="/login">Login</Link>
          </div>
          <div className="text-secondary border-b-4 border-secondary font-semibold">
            Signup
          </div>
        </div>
        <form action="" onSubmit={handleSignup}>
          <input
            type="name"
            name="name"
            placeholder="Name"
            className="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />{" "}
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            className="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />
          <br />
          <div className="flex items-center mt-4">
            <label className="w-64 mt-3 flex items-center">
              <input
                onClick={() => setAgree(!agree)}
                name="terms"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              <span className="text-xs ml-3">
                I agree with
                <span className="text-primary ml-1">privacy & policy</span>
              </span>
            </label>
            <button
              type="submit"
              className="btn btn-secondary btn-sm px-3 rounded-full text-white uppercase"
            >
              Sign up
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
            <button className="btn btn-outline btn-secondary">
              <img className="mr-2 w-7" src={facebookLogo} alt="" />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
