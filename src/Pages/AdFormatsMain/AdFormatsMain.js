import React from "react";
import { Link } from "react-router-dom";
import popUnder from "../../img/popunder.jpg";
import bannerAd from "../../img/bannerAdd.webp";
import native from "../../img/native.webp";
import skim from "../../img/skim.jpg";

const AdFormatsMain = () => {
  return (
    <div className="pb-20 pt-10 bg-gray-100">
      <div className="px-3 pb-10 pt-5 md:px-20">
        <p className="text-center px-5 md:px-48 ">
          Masterkey offers you any traffic types and a wide variety of
          verticals. We are ready to connect and collaborate. <br /> Together we
          are creating the future!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">
          <div className="w-56 mx-auto bg-base-100  rounded-xl shadow-xl hover:bg-blue-100 duration-500 hover:scale-110">
            <Link to="/popundercontainer">
              <img className="w-56 rounded-xl" src={popUnder} alt="" />
              <h4 className="text-center text-primary font-bold mt-3 pb-3">
                Pop-under
              </h4>
            </Link>
          </div>
          <div className="w-56 mx-auto bg-base-100  rounded-xl shadow-xl hover:bg-red-100 duration-500 hover:scale-110">
            <Link to="/">
              <img className="w-56 h-28 rounded-xl" src={bannerAd} alt="" />
              <h4 className="text-center text-primary font-bold mt-3 pb-3">
                Banner Ad
              </h4>
            </Link>
          </div>
          <div className="w-56 mx-auto bg-base-100  rounded-xl shadow-xl hover:bg-green-100 duration-500 hover:scale-110">
            <Link to="/">
              <img className="w-56 rounded-xl" src={native} alt="" />
              <h4 className="text-center text-primary font-bold mt-3 pb-3">
                Native
              </h4>
            </Link>
          </div>
          <div className="w-56 mx-auto bg-base-100  rounded-xl shadow-xl hover:bg-blue-100 duration-500 hover:scale-110">
            <Link to="/">
              <img className="w-56 rounded-xl" src={skim} alt="" />
              <h4 className="text-center text-primary font-bold mt-3 pb-3">
                Pop-under
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdFormatsMain;
