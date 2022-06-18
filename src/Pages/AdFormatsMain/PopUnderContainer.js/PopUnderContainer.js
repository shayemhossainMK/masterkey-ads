import React from "react";
import PopUder from "../../Home/AddFormat/PopUnder/PopUder";
import AdPrice from "../AdPrice/AdPrice";
import WhyAds from "../WhyAds/WhyAds";

const PopUnderContainer = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="px-3 md:px-20">
        <PopUder></PopUder>
        <div className="py-10">
          <div>
            <h1 className="text-2xl text-primary font-bold text-center pb-10 md:pb-10">
              WHY POP-UNDER ADS?
            </h1>
          </div>
          <WhyAds></WhyAds>
        </div>
        <AdPrice></AdPrice>
      </div>
    </div>
  );
};

export default PopUnderContainer;
