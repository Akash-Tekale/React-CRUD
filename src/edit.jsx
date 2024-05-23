import {React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit (){

    var goto=useNavigate()
    var [data,setdata]= useState([])
    var [name,setname] = useState([])    
    var [number,setnumber] = useState([])    
    var [address,setaddress] = useState([])    


    var userid = useParams();
    // console.log(userid)
   useEffect(()=>{
    updateData()
   },[])


    let updateData =async () => {
        var result = await axios.get(`http://localhost:3000/student/${userid.id}`);
        console.log(result.data)
        setdata(result.data)
        setname(result.data.name)
        setnumber(result.data.number)
        setaddress(result.data.address)
    }
const saveform =async (id) =>{
    await axios.put(`http://localhost:3000/student/${id}`,{
        name:name,
        number:number,
        address:address
    }).then((resp)=>{
        goto("/student")
        alert("update successfull");

    }).catch((err)=>{
        alert("data id not updated");
    });  

}

        return (
            <>
                <center>
                    <h1>update</h1>
                </center>
                <div className="container">
                    <div className="row">
                        <div className="offset-md-3 col-md-6">
                            <form action="">
                                <table width={'100%'} className="bg-primary text-light rounded p-4">
                                    <tbody>
                                    <tr>
                                        <td><label className="mt-4" htmlFor="">Enter Your Name</label>
                                            <input className="form-control" type="text" name="" id="" defaultValue={name} onChange={(e)=>setname(e.target.value)}/></td>
                                    </tr>
                                    <tr>
                                        <td><label className="mt-4" htmlFor="">Enter Your Number</label>
                                            <input className="form-control" type="text" name="" id="" defaultValue={number} onChange={(e)=>setnumber(e.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <td><label className="mt-4" htmlFor="">Enter Your Address</label>
                                            <input className="form-control" type="text" name="" id="" defaultValue={address} onChange={(e)=>setaddress(e.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <center>
                                            <input className="btn btn-outline-warning" type="submit" onClick={()=>saveform(data.id)} value={'update'} />
                                        </center>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default Edit