import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
class App extends React.Component{
    render(){
      return (
        <div>
          <div id="preloder" style={{display:"none"}}>
            <div className="loader"></div>
          </div>
          <Header/>  
          <Hero/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
          </Routes>
          <Footer/>
        </div>
      );
    }
}
export default App;