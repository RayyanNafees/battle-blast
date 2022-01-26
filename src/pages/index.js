import React from "react";
import Home from "./Home";
import NFT from "./NFT";
import Game from "./Game";
import Roadmap from "./Roadmap";
import Tokonomics from "./Tokonomics";
import Footer from "./Footer";
import Presale from "./Presale";

function MainScreen() {
  return (
    <>
      <Home />
      <Presale />
      <NFT />
      <Game />
      <Roadmap />
      <Tokonomics />
      <Footer />
    </>
  );
}

export default MainScreen;
