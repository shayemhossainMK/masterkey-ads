import React from "react";
import AdvertisersSummary from "./AdvertisersSummary/AdvertisersSummary";
import AdvertisersBanner from "./Banner/AdvertisersBanner";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Prices from "./Prices/Prices";

const Advertisers = () => {
  return (
    <div className="bg-gray-100 pb-10">
      <AdvertisersBanner></AdvertisersBanner>
      <AdvertisersSummary></AdvertisersSummary>
      <KeyFeatures></KeyFeatures>
      <Prices></Prices>
    </div>
  );
};

export default Advertisers;
