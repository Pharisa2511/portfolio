import "./App.css";
import React  from "react";

//Component
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Number from "./components/Number/Number";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <h1 style={{ color: 'red', textAlign: 'center', margin: '50px' }}>
        TEST: ถ้าเห็นข้อความนี้แสดงว่า App.jsx ทำงานแล้ว
      </h1>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Number/>
      <Footer/>
    </>
  );
}

export default App;