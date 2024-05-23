import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    var goto = useNavigate()

    const DeleteData =async (id) =>{
        await axios.delete(`http://localhost:3000/student/${id}`).then((resp)=>{
            alert("delete successfull");
            goto("/student")
        }).catch((err)=>{
            alert("data id not deleted");
        });   
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
                <td><button className="btn btn-outline-danger"><Link to={`/delete`} onClick={()=>DeleteData(val.id)}>delet</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-outline-success"><Link to={`/update/${val.id}`}>update</Link></button></td>   
            </tr>
            )
        })}
        </tbody>
       </table>
        </>
    )
}
export default Student