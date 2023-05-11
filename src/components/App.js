import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Market from "./Market";
import ChooseUs from "./ChooseUs";
import JoinUs from "./JoinUs";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Market />
      <ChooseUs />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
