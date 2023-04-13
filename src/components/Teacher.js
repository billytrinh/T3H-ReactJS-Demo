import React from "react";

export default class Teacher extends React.Component{

    render(){
        const teacher = this.props.teacher;
        return (
            <div>
                <h3>{teacher.name}</h3>
                <h3>{teacher.email}</h3>
                <h3>{teacher.age}</h3>
                <h3>{teacher.address}</h3>
            </div>
        )
    }
}