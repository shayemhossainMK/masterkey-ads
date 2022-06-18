import React from "react";
import photo1 from "../../../img/bannerDimention/photo1.png";
import photo2 from "../../../img/bannerDimention/photo2.png";
const BannerAdDimension = () => {
  return (
    <div className="pb-10">
      <div>
        <h1 className="text-center text-2xl text-primary font-bold">
          BANNER AD DIMENSIONS
        </h1>
      </div>
      <p className="text-center mt-3">
        We have wide range of supported banner dimensions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="mx-auto">
          <img src={photo1} alt="" />
          <p className="text-center mt-4">Ad for desktop</p>
        </div>
        <div className="mx-auto">
          <img src={photo2} alt="" />
          <p className="text-center mt-4">Ad for mobile</p>
        </div>
      </div>
    </div>
  );
};

export default BannerAdDimension;
