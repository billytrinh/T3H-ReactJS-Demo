import React from "react";

export default class Category extends React.Component{
    constructor(props){
        super(props);
    }
    clickChange(){
        const cat = this.props.category; 
        this.props.checkChange(cat.id);
    }
    render(){
        const cat = this.props.category; 
        const checked = this.props.checked;
        return (
            <li>
                <label onClick={this.clickChange.bind(this)}>
                    <input checked={checked==cat.id?true:false} type="checkbox" value={cat.id}/> {cat.name}
                </label>
            </li>
        )
    }
}