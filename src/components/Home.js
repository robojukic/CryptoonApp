import React from "react";
import "./Home.css";
import Featured from "./Featured";

function Home() {
  return (
    <div className="home-top">
      <div className="container">
        <div className="container-titleAndImg">
          <img className="home-imgUpDown" src="/bitcoin.png" />
          <h1>TRACK AND TRADE</h1>
          <img className="home-imgUpDown" src="/etherium.png" />
        </div>
        <h1 className="h1-gradient">CRYPTO CURRENCIES</h1>
        <Featured />
      </div>
    </div>
  );
}

export default Home;
