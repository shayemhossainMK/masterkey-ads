import React from "react";
import InfluencersBanner from "./Influencersbanner.js/InfluencersBanner";
import InfluencersChooseUs from "./InfluencersChooseUs/InfluencersChooseUs";

const Influencers = () => {
  return (
    <div className="pb-10 bg-gray-100">
      <InfluencersBanner></InfluencersBanner>
      <InfluencersChooseUs></InfluencersChooseUs>
    </div>
  );
};

export default Influencers;
