import React from "react";
import BannerAd from "../../Home/AddFormat/BannerAd/BannerAd";
import AdPrice from "../AdPrice/AdPrice";
import BannerAdDimension from "../BannerAdDimensions/BannerAdDimension";
import BannerWorks from "../BannerWorks/BannerWorks";
import WhyAds from "../WhyAds/WhyAds";

const BannerContainer = () => {
  return (
    <div className="bg-gray-100 px-2 md:px-20 py-10">
      <div className="mt-10 md:mt-20">
        <BannerAd></BannerAd>
      </div>
      <BannerWorks></BannerWorks>
      <BannerAdDimension></BannerAdDimension>
      <div className="py-10">
        <div>
          <h1 className="text-2xl text-primary font-bold text-center pb-10 md:pb-10">
            WHY BANNER ADS?
          </h1>
        </div>
        <WhyAds></WhyAds>
      </div>
      <AdPrice></AdPrice>
    </div>
  );
};

export default BannerContainer;
