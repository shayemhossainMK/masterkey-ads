import React from "react";
import skim from "../../../../img/skim.jpg";

const Skim = () => {
  return (
    <div>
      <div className=" mb-16 bg-gray-100">
        <div className=" md:flex md:pl-7">
          <img
            src={skim}
            className="md:max-w-2xl w-96 rounded-md shadow-2xl object-fill"
          />
          <div className="md:px-16">
            <h4 className="text-primary text-2xl mt-7 mb-2 md:mt-2">SKIM</h4>
            <p>Embeded a link that redirects to a link</p>
            <p className="my-5  text-xl">
              SKIM" is a link that a publisher inserts on a specific site
              element, and after clicking on it, an advertisement appears to the
              user. SKIM gives 100% control of your sold traffic amount, higher
              CR to advertisers and CPM rates to publishers.
            </p>
            <p className="mt-10 text-secondary">
              <button className="btn btn-primary rounded-full text-white btn-sm px-5">
                Start Advertising
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skim;
