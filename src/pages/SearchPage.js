import React from "react";
import Category from "../components/Category";

export default class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {
                    id: 1,
                    name: "Watch"
                },
                {
                    id:2,
                    name: "Fashion"
                }
            ],
            checked: 2
        }
    }
    changeChecked(cat_id){
        this.setState({
            checked: cat_id
        })
    }
    render(){
        const cats = this.state.categories;
        const checked = this.state.checked;
        return (
            <ul>
                {
                    cats.map((v,k)=>{
                        return <Category key={k} category={v} checkChange={this.changeChecked.bind(this)} checked={checked}/>
                    })
                }
            </ul>
        );
    }
}