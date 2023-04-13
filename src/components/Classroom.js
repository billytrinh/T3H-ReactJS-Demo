import React from "react";
import Student from "./Student";
import Teacher from "./Teacher";

class Classroom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 20
        }
    }
    componentDidMount(){ // tự động chạy sau khi sinh ra giao diện lần đầu tiên
        let c = this.state.count;
        // setInterval(()=>{
        //     c++;
        //     this.setState({
        //         count: c
        //     })
        // },1000);
    }

    addStudent(){
        let c = this.state.count;
        c++;
        this.setState({
            count: c
        });
    }
    render(){
        const svs = [{
           name: "Nguyễn Văn Đức",
           email: "ducnv@gmail.com",
           birthday:"25/8/1999",
           tel: "0987654321"     
        },
        {
            name: "Đào Huy Anh",
            email: "anhdv@gmail.com",
            birthday:"25/8/2000",
            tel: "098123983"     
         }
        ];
        const teacher = {
            name: "Trịnh Quang Hòa",
            email: "hoatq@gmail.com",
            age: 18,
            address: "Hà Nội, Việt Nam"
        }

        const c = this.state.count;
        return ( 
        <div>
           <h2>Lớp ReactJS 202212</h2>  
           <h3>Số lượng sinh viên: {c}</h3>  
           <button className="btn btn-primary" onClick={this.addStudent.bind(this)}>Thêm sinh viên</button> 
           <Teacher teacher={teacher}/>
           <h3>Danh sách sinh viên:</h3>
           {
            svs.map(function(v,k){
                // v <=> arr[i]
                // k <=> i
                return <Student data={v} />
            })
            
           }
        </div>
        )
    }
}
export default Classroom;