import React from "react";

export default class Student extends React.Component{
    render(){
        const xyz = this.props.data;
        return (
            <div>
                <h3>{xyz.name}</h3>
                <h3>{xyz.email}</h3>
                <h3>{xyz.birthday}</h3>
                <p>{xyz.tel}</p>
            </div>
        )
    }
}