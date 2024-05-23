import React from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            number:'',
            address:''
        }
    }
    
    changeName = (event) =>{
        this.setState({
            name:event.target.value,
        })
    }
    changeNumber = (event) =>{
        this.setState({
            number:event.target.value,
        })
    }
    changeAddress = (event) =>{
        this.setState({
            address:event.target.value,
        })
    }
    fromSubmit =async (event) =>{
        event.preventDefault()
        var result=await axios.post('http://localhost:3000/student',this.state)
        console.log(result.data)
        alert("Data Inserted Succesfuly")
        this.setState({
            name:'',
            number:'',
            address:''
        })
        goto('/student')
    }
    render(){
    return (
        <>
            <div className="container">
                <div class="row">
                    <div className="offset-md-3 col-md-6">
                        <form action=""  onSubmit={this.fromSubmit} >
                            <table width={'100%'} className="bg-secondary text-light rounded p-4">
                                <tr>
                                    <td><label className="mt-4" htmlFor="">Enter Your Name</label>
                                   <input className="form-control" type="text" name="" id="" value={this.state.name} onChange={this.changeName} /></td>
                                </tr>
                                <tr>
                                    <td><label className="mt-4" htmlFor="">Enter Your Number</label>
                                    <input className="form-control" type="text" name="" id="" value={this.state.number} onChange={this.changeNumber}/></td>
                                </tr>
                                <tr>
                                    <td><label className="mt-4" htmlFor="">Enter Your Address</label>
                                    <input className="form-control" type="text" name="" id="" value={this.state.address} onChange={this.changeAddress}/></td>
                                </tr>
                                <tr>
                                   <center><br /><br />
                                    <input className="btn btn-outline-warning"  type="submit" value={'SAVE'} />
                                    </center><br /><br />
                                </tr>

                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )}
}
export default Home