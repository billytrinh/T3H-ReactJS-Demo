import React from "react";

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:  [
                {
                    name:"TEN SP",
                    thumbnail: "anh san pham",
                    price:1000,
                    qty: 10
                },
                {
                    name:"TEN SP",
                    thumbnail: "anh san pham",
                    price:1000,
                    qty: 10
                }
            ]
        }
    }
    render(){
        return ('');
    }
}