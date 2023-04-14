import React from "react";
import Student from "./Student";
import Teacher from "./Teacher";

class Classroom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            className: "ReactJS 202212",
            room: "Microsoft",
            count: 2,
            students: [{
                name: "Nguyễn Văn Đức",
                email: "ducnv@gmail.com",
                birthday:"25/8/1999",
                tel: "0987654321",
                mark: 8     
             },
             {
                 name: "Đào Huy Anh",
                 email: "anhdv@gmail.com",
                 birthday:"25/8/2000",
                 tel: "098123983"   ,
                 mark: 6  
              }
             ],
             svName: "",
             svEmail:"",
             svBirthday:"",
             svTel:"",
             svMark:0
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
        const newStudent = {
            name: this.state.svName,
            email: this.state.svEmail,
            birthday: this.state.svBirthday,
            tel: this.state.svTel,
            mark: this.state.svMark
        }
        let students = this.state.students;
        students.push(newStudent);
        this.setState({
            count: c,
            students: students
        });
    }
    changeName(event){
        const input = event.target;
       // input.name => birthday
        let className = input.value;
        this.setState({
            className: className
        })
    }
    changInputStudent(event){
        const input = event.target;
        const inputName = input.name;
        const abc = ["svMark","svAge"];
        const v = abc.includes(inputName) ?parseInt( input.value): input.value;
        this.setState({
            [inputName]:v
        })
        
    }
    render(){
        const svs = this.state.students;
        const c = this.state.count;
        const className = this.state.className;
        const room = this.state.room;

        const svName = this.state.svName;
        const svEmail = this.state.svEmail;
        const svBirthday = this.state.svBirthday;
        const svTel = this.state.svTel;
        const svMark = this.state.svMark;


        // tinh trung binh diem thi
        let tong = 0;
        svs.map((v,i)=>{
            tong += v.mark;
        })
        return ( 
        <div>
           <h2>Lớp {className}</h2>  
           <h3>Phòng {room}</h3>
           <input value={className} onChange={this.changeName.bind(this)} name="class" className="form-control" type="text" placeholder="Tên lớp"/>
           <h3>Số lượng sinh viên: {c}</h3>  
           <h3>Trung bình điểm thi: {tong/svs.length}</h3>  

           <div className="card">
                <div className="card-body">
                    <input type="text" onChange={this.changInputStudent.bind(this)} value={svName} name="svName" className="form-control" placeholder="Student Name"/>
                    <input type="email" onChange={this.changInputStudent.bind(this)} value={svEmail} name="svEmail" className="form-control" placeholder="Student email"/>
                    <input type="date" onChange={this.changInputStudent.bind(this)} value={svBirthday} name="svBirthday" className="form-control" placeholder="Student birthday"/>
                    <input type="tel" onChange={this.changInputStudent.bind(this)} value={svTel} name="svTel" className="form-control" placeholder="Student Tel"/>
                    <input type="number" onChange={this.changInputStudent.bind(this)} value={svMark} name="svMark" className="form-control" placeholder="Student Mark"/>
                    <button className="btn btn-primary" onClick={this.addStudent.bind(this)}>Thêm sinh viên</button> 
                </div>
           </div>
           
           <h3>Danh sách sinh viên:</h3>
           {
            svs.map(function(v,i){
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