import React from "react";
import Native from "../../Home/AddFormat/Native/Native";
import AdPrice from "../AdPrice/AdPrice";
import NativeWorks from "../NativeWorks/NativeWorks";
import WhyAds from "../WhyAds/WhyAds";

const nativeContainer = () => {
  return (
    <div className="bg-gray-100 px-3 md:px-20">
      <div className="md:pt-20">
        <Native></Native>
      </div>
      <NativeWorks></NativeWorks>
      <div className="py-10">
        <div>
          <h1 className="text-2xl text-primary font-bold text-center pb-10 md:pb-14">
            WHY NATIVE ADS?
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

export default nativeContainer;
