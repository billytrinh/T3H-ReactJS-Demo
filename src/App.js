import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import ProductPage from "./pages/ProductPage"
import { Route, Routes } from "react-router-dom";
class App extends React.Component{
    render(){
      return (
        <div>
          <Header />
          <section>
            <div className="container">
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/product" element={<ProductPage />} />
              </Routes>
            </div>
          </section>
        </div>
      );
    }
}
export default App;