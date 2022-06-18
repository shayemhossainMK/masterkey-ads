import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdFormatsMain from "./Pages/AdFormatsMain/AdFormatsMain";
import PopUnderContainer from "./Pages/AdFormatsMain/PopUnderContainer.js/PopUnderContainer";
import Advertisers from "./Pages/Advertisers/Advertisers";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import BannerAd from "./Pages/Home/AddFormat/BannerAd/BannerAd";
import Native from "./Pages/Home/AddFormat/Native/Native";
import PopUder from "./Pages/Home/AddFormat/PopUnder/PopUder";
import Skim from "./Pages/Home/AddFormat/Skim/Skim";
import Home from "./Pages/Home/Home/Home";
import Influencers from "./Pages/Influencers/Influencers";
import Publishers from "./Pages/Publishers/Publishers";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}>
          <Route path="/popunder" element={<PopUder></PopUder>}></Route>
          <Route path="/bannerad" element={<BannerAd></BannerAd>}></Route>
          <Route path="/native" element={<Native></Native>}></Route>
          <Route path="/skim" element={<Skim></Skim>}></Route>
        </Route>
        <Route
          path="/advertisers"
          element={<Advertisers></Advertisers>}
        ></Route>
        <Route path="/publishers" element={<Publishers></Publishers>}></Route>
        <Route
          path="/influancers"
          element={<Influencers></Influencers>}
        ></Route>
        <Route
          path="/addformatsmain"
          element={<AdFormatsMain></AdFormatsMain>}
        ></Route>
        <Route
          path="/popundercontainer"
          element={<PopUnderContainer></PopUnderContainer>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
