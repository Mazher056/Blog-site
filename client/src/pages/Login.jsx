import { useContext, useState } from "react";
import "../Css/Login.css"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contextjs/AuthContext";




function Login() {
    const { login } = useContext(AuthContext);
    const [data, setdata] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleOnchage = ((a) => {
        setdata({
            ...data,
            [a.target.name]: a.target.value
        })
    })
    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result)
            if (response.ok) {
                login(result.token);
                console.log("Response received form backend ", result.message)
                localStorage.setItem("token", result.token);
                navigate("/");
            } else {
                console.log("Login Failed ")
            }
        } catch (e) {
            console.log("Error during Login ", e);
        }
        setdata({ email: "", password: "" });
    }
    return <>
        <div className="maincontainer">
            <div className="container">

                <form className="loginform" >


                    <h1>Wellcome Back!</h1>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={data.email} name="email" onChange={handleOnchage} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={data.password} name="password" onChange={handleOnchage} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="buttoncontainer">
                        <button onClick={handlesubmit} type="submit" className="btn btn-primary loginbutton">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login;