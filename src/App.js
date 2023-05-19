import React, { useEffect, useReducer, useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import FireBasePage from "./pages/FireBasePage";
import Cart from "./pages/Cart";
import { UserProvider } from "./context/UserContext";
import store from "./context/store";
import reducer from "./context/reducer";
function App(){
      const localState = localStorage.getItem("state")
                            ?JSON.parse(localStorage.getItem("state"))
                            :store;
      const [state,dispatch] = useReducer(reducer,localState);
      return (
        <UserProvider value={{state,dispatch}}>
        <div>
          <div id="preloder" style={{display:"none"}}>
            <div className="loader"></div>
          </div>
          <Header/>  
        
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/fire-base" element={<FireBasePage/>}/>
              <Route path="/detail/:id" element={<ProductPage/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer/>
        </div>
        </UserProvider>
      );
    
}
export default App;