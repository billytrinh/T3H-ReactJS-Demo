import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Shop from "./pages/Shop";
class App extends React.Component{
    render(){
      return (
        <div>
          <div id="preloder" style={{display:"none"}}>
            <div className="loader"></div>
          </div>
          <Header/>  
        
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/detail/:id" element={<ProductPage/>}/>
          </Routes>
          <Footer/>
        </div>
      );
    }
}
export default App;