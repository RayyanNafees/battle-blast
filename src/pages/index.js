import React from "react";
import Home from "./Home";
import NFT from "./NFT";
import Game from "./Game";
import Roadmap from "./Roadmap";
import Tokonomics from "./Tokonomics";
import Footer from "./Footer";
import Presale from "./Presale";
import QNA from "./QNA";
import Dev from "./Dev";
import Terminology from "./Terminology";
import Pokemon from "./Pokemon";
function MainScreen() {
  return (
    <>
      <Home />
      <Presale />
      <QNA />
      <NFT />
      <Game />
      <Terminology />
      <Roadmap />
      <Tokonomics />
      <Pokemon />
      <Dev />
      <Footer />
    </>
  );
}

export default MainScreen;
