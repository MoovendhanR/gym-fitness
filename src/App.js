import React from "react";
import "./App.css"

import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import AnimatedCursor from "./Components/AnimatedCursor";

function App() {
  return (
    <>
  <AnimatedCursor/>
  <Navbar/>
  <Banner/> 
    </>
  );
}

export default App;
