import React from "react";
import PopUder from "../../Home/AddFormat/PopUnder/PopUder";
import AdPrice from "../AdPrice/AdPrice";
import WhyAds from "../WhyAds/WhyAds";

const PopUnderContainer = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="px-3 md:px-20">
        <PopUder></PopUder>
        <WhyAds></WhyAds>
        <AdPrice></AdPrice>
      </div>
    </div>
  );
};

export default PopUnderContainer;
