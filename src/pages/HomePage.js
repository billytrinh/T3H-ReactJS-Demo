import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Categories from './../components/homepage/Categories';
import Features from "../components/homepage/Features";
import Banner from "../components/homepage/Banner";
import LatestProduct from "../components/homepage/LatestProduct";
import Blog from "../components/homepage/Blog";
export default class HomePage extends React.Component{
    constructor(props){
        super(props);
      
    }
    render(){
       return  (
        <div>
            <Categories/>
            <Features/>
            <Banner/>
            <LatestProduct/>
            <Blog/>
        </div>
       )
    }
}