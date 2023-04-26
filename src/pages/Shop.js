import React from "react";
import Hero from "../components/Hero";
import SideBar from "../components/shoppage/Sidebar";
import Grid from "../components/shoppage/Grid";
export default class Shop extends React.Component{
    render(){
        return (
            <section className="product spad">
            <div className="container">
                <div className="row">
                    <SideBar/>
                    <Grid/>
                </div>
            </div>
            </section>
        )
    }
}