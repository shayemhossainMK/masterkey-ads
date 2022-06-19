import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../img/google.svg";
import facebookLogo from "../../img/facebook.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;
    const agree = e.target.terms.checked;
    console.log(name, email, password, cpassword);

    if (password === cpassword && agree) {
      createUserWithEmailAndPassword(email, password);
      toast("Email verification send!");
    } else {
      toast.error("Password not matched!");
    }
  };
  let errorElement;
  if (error || googleError || facebookError) {
    errorElement = (
      <div>
        <p>
          <span className="text-primary ml-1">
            {error?.message} {googleError?.message}
            {facebookError?.message}
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
            className="input input-sm w-full max-w-xs mt-5 bg-gray-100 rounded-full"
            required
          />{" "}
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-sm w-full max-w-xs mt-5 bg-gray-100 rounded-full"
            required
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-sm w-full max-w-xs mt-5 bg-gray-100 rounded-full"
            required
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            className="input input-sm w-full max-w-xs mt-5 bg-gray-100 rounded-full"
            required
          />
          <br />
          <div className="flex items-center mt-4">
            <label className="w-64 mt-3 flex items-center">
              <input
                onClick={() => setAgree(!agree)}
                name="terms"
                type="checkbox"
                id="terms"
                required
                className="checkbox checkbox-sm checkbox-primary"
              />
              <span
                className={
                  agree ? "text-xs ml-2 text-green-600" : "text-xs ml-2"
                }
              >
                I agree with
                <span className="text-primary ml-1">privacy & policy</span>
              </span>
            </label>
            <button
              // disabled={!agree}
              type="submit"
              className="btn btn-secondary btn-sm px-3 rounded-full text-white uppercase"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="mt-3">{errorElement}</div>
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

export default Signup;
