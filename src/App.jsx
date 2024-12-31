import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Works from "./Components/Works/Works";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Service />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
