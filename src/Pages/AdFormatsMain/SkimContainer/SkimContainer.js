import React from "react";
import Skim from "../../Home/AddFormat/Skim/Skim";
import AdPrice from "../AdPrice/AdPrice";
import SkimWorks from "../SkimWorks/SkimWorks";
import WhyAds from "../WhyAds/WhyAds";

const SkimContainer = () => {
  return (
    <div className="bg-gray-100 px-3 md:px-20">
      <div className=" pt-5 md:pt-10">
        <Skim></Skim>
      </div>
      <div>
        <SkimWorks></SkimWorks>
      </div>
      <div className="py-10">
        <div>
          <h1 className="text-2xl text-primary font-bold text-center pb-10 md:pb-14">
            WHY SKIM ADS?
          </h1>
        </div>
        <WhyAds></WhyAds>
      </div>
      <div className="pb-10">
        <AdPrice></AdPrice>
      </div>
    </div>
  );
};

export default SkimContainer;
