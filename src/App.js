import { Route, Routes } from "react-router-dom";
import "./App.css";
import BannerAd from "./Pages/Home/AddFormat/BannerAd/BannerAd";
import Native from "./Pages/Home/AddFormat/Native/Native";
import PopUder from "./Pages/Home/AddFormat/PopUnder/PopUder";
import Skim from "./Pages/Home/AddFormat/Skim/Skim";
import Home from "./Pages/Home/Home/Home";
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
      </Routes>
    </div>
  );
}

export default App;
