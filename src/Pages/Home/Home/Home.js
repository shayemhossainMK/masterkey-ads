import React from "react";
import AddFormat from "../AddFormat/AddFormat";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";
import Summary from "../Summary/Summary";
import Reviews from "../Reviews/Reviews";
import OurPartners from "../OurPartners/OurPartners";
import OurPartnersTwo from "../OurPartners/OurPartnersTwo";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Services></Services>
      <AddFormat></AddFormat>
      <Summary></Summary>
      {/* <Reviews></Reviews> */}
      {/* <div>
        <div className="hidden md:block">
          <OurPartners></OurPartners>
        </div>
        <div className="block md:hidden">
          <OurPartnersTwo></OurPartnersTwo>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
