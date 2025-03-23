import { useState } from "react";
import "../Css/Register.css"

function Register() {
    const [data, setdata] = useState({ fullName: "", email: "", password: "" });
    const handleOnchage = ((e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    })
    const handleOneclick=(async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
                
            })
            const result = await response.json()
            if(response.ok ){
                console.log("Data sent from frontend to backend ", result.message)
            }else{

                console.log("Failed ",result)
            }
        }catch(e){
            console.log("Error during register ", e);

        }
        setdata({
            email:"",password:"",fullName:""
        })
    })
    return (
        <>
            <div className="maincontainer">
                <div className="container">
                    <form className="loginform" >

                        <h1>Register With Us!</h1>
                        <div className="mb-3">

                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input name="fullName" onChange={handleOnchage} value={data.fullName} type="Name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" /></div><div className="mb-3">

                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input name="email" value={data.email} onChange={handleOnchage} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name="password" value={data.password} onChange={handleOnchage} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="buttoncontainer">
                            <button onClick={handleOneclick} type="submit" className="btn btn-primary loginbutton">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;