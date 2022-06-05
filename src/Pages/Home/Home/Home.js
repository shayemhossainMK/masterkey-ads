import React from "react";
import AddFormat from "../AddFormat/AddFormat";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

import Summary from "../Summary/Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AddFormat></AddFormat>
      <Summary></Summary>
    </div>
  );
};

export default Home;
