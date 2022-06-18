import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../img/google.svg";
import facebookLogo from "../../img/facebook.png";

const Signup = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="w-96 mx-auto px-10 py-10 bg-base-100 shadow-xl rounded-2xl">
        <div className="flex justify-evenly">
          <div className="font-semibold">
            <Link to="/login">Login</Link>
          </div>
          <div className="text-secondary border-b-4 border-secondary font-semibold">
            Signup
          </div>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            class="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Phone No / Email"
            class="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />{" "}
          <br />
          <input
            type="text"
            name=""
            placeholder="Password"
            class="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />
          <input
            type="text"
            name=""
            placeholder="Confirm Password"
            class="input w-full max-w-xs mt-5 bg-gray-100 rounded-full"
          />
          <br />
          <div className="flex items-center mt-4">
            <label class="w-64 mt-3 flex items-center">
              <input type="checkbox" class="checkbox checkbox-primary" />
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
            <button className="btn btn-outline btn-secondary px-7">
              <img className="mr-2" src={googleLogo} alt="" />
              Continue with Google
            </button>
          </div>
          <div className="mt-3">
            <button className="btn btn-outline btn-secondary">
              <img className="mr-2 w-10" src={facebookLogo} alt="" />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
