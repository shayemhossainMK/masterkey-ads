import React from "react";
import popUnderImg from "../../../../img/popunder.jpg";
const PopUder = () => {
  return (
    <div>
      <div className=" mb-16 bg-gray-100">
        <div className="mt-10  md:mt-20">
          <div className="md:flex  md:pl-7">
            <img
              src={popUnderImg}
              className="md:max-w-2xl w-96 rounded-md shadow-2xl object-fill"
            />
            <div className="md:px-16">
              <h4 className="text-primary text-2xl mb-2 mt-7 md:mt-2">
                POP-UNDER
              </h4>
              <p>One of the most effective ways to run campaigns</p>
              <p className="my-5 text-xl">
                The pop ads is also a classic ad format that opens in the
                background or over the webpage after user click at the website.
                This ad type show the high levels of efficiency of the
                advertising campaign.
              </p>
              <p className="mt-10">
                <button className="btn btn-primary rounded-full text-white btn-sm px-5">
                  Start Advertising
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUder;
