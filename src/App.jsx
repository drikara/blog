import React from 'react';
import Home from "./components/home/Home"; 
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
function App() {
  return (
    <div className="m-5 text-xl px-40 font-sans">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;