import React from "react";
import EasyRegister from "./EasyRegister/EasyRegister";
import PublishersBanner from "./PublishersBanner/PublishersBanner";
import PublishersChooseUs from "./PublishersChooseUs/PublishersChooseUs";
import PublishersPaymentMethods from "./PublishersPaymentMethods/PublishersPaymentMethods";

const Publishers = () => {
  return (
    <div className="pb-10 bg-gray-100">
      <PublishersBanner></PublishersBanner>
      <EasyRegister></EasyRegister>
      <PublishersChooseUs></PublishersChooseUs>
      <PublishersPaymentMethods></PublishersPaymentMethods>
    </div>
  );
};

export default Publishers;
