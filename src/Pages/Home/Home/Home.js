import React from "react";
import AddFormat from "../AddFormat/AddFormat";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";
import Summary from "../Summary/Summary";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Services></Services>
      <AddFormat></AddFormat>
      <Summary></Summary>
    </div>
  );
};

export default Home;
