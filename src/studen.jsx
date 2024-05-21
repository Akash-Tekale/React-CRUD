import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import axios from "axios";

function Student (){
    const [student,setstudent] = useState([]);
    useEffect(()=>{
        load_student();
    })
    const load_student=async ()=>{
        var result= await axios.get('http://localhost:3000/student')
        setstudent(result.data);
    }

    return(
        <>
       <table className="table table-bordered table-hover">
        <thead>
        <tr>
        <th>id</th>
        <th>name</th>
        <th>number</th>
        <th>address</th>
        </tr>
        </thead>
        <tbody>
        {student.map((val)=>{
            return(
            <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.number}</td>
                <td>{val.address}</td>
                <td><button className="btn btn-outline-danger">delet</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-outline-success">update</button></td>   
            </tr>
            )
        })}
        </tbody>
       </table>
        </>
    )
}
export default Student