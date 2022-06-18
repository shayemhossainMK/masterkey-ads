import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10 h-screen">
      <div className="md:px-20">
        <div className="shadow-xl p-10 bg-base-100 rounded-2xl mx-3">
          <div className="pb-10">
            <h1 className="text-2xl text-center font-semibold ">Contact Us</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center">
              <form className="form-control">
                <input
                  type="text"
                  placeholder="You/Your org. Name"
                  className="input w-full max-w-sm bg-gray-100 rounded-3xl"
                />
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  className="input w-full max-w-sm bg-gray-100 rounded-3xl"
                />
                <label className="label cursor-pointer w-64 mt-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>
                    I agree with{" "}
                    <span className="text-primary">privacy & policy</span>
                  </span>
                </label>
              </form>
            </div>
            <div>
              <div className="flex justify-center my-4 md:my-0">
                <textarea
                  className="bg-gray-100 p-5 mx-auto rounded-2xl"
                  name=""
                  id=""
                  cols="37"
                  rows="5"
                  placeholder="Your Message*"
                ></textarea>
              </div>
            </div>
            <div className="md:px-7">
              <p>
                Our team is always available to answer your queries. Be sure to
                go through FAQ before sending the question to find the solution
                as fast as possible. <br /> <span>Or,</span>
              </p>
              <p>Email us: support@masterkey.digital</p>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-primary btn-sm px-7 text-white rounded-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
