import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// topi link
import LandingPage from "./stores/pages/LandingPage";
import MobilePage from "./stores/pages/ mobilePage";
import Computerpage from "./stores/pages/computerpage";
import AcPage from "./stores/pages/acPage";
import FridgePage from "./stores/pages/fridgepage";

import MansWarepage from "./stores/pages/mansWarepage";
import TvPage from "./stores/pages/tvpage";
import Watchpage from "./stores/pages/watchpage";
import WomanPage from "./stores/pages/womanPage";

// click pic opion onther page
import MobilSingle from "./singles/mobilsingle";
import Acsingle from "./singles/acsingle";
import Computersingle from "./singles/computersingle";
import Fridgesingle from "./singles/fridgesingle";

import Manswaresingle from "./singles/manswaresingle";
import UserCart from "./stores/usercart";
import Tvsingle from "./singles/tvsingle";
import Watchsingle from "./singles/watchsingle";
import Womansingle from "./singles/womansingle";
import SingIn from "./stores/components/singIn/SingIn";
import SingUp from "./stores/components/singIn/SingUp";
import AdminPage from "./stores/pages/adimenpage";

const Home = () => {
  return (
    <div>
      {/* click buttion */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/computer" element={<Computerpage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/manware" element={<MansWarepage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/watch" element={<Watchpage />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />

        {/* pic click opion */}
        <Route path="/mobiles/:id" element={<MobilSingle />} />
        <Route path="/ac/:id" element={<Acsingle />} />
        <Route path="/computer/:id" element={<Computersingle />} />
        <Route path="/fridge/:id" element={<Fridgesingle />} />
        <Route path="/manware/:id" element={<Manswaresingle />} />
        <Route path="/tv/:id" element={<Tvsingle />} />
        <Route path="/watch/:id" element={<Watchsingle />} />
        <Route path="/woman/:id" element={<Womansingle />} />
        <Route path="/cart" element={<UserCart />} />

        <Route path="/adimen" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default Home;
