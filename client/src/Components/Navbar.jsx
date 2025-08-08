import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contextjs/AuthContext.jsx";



function Navbar() {
    const { user, logout } = useContext(AuthContext);
    // const [user, setuser] = useState(null);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         try {
    //             const decode = jwtDecode(token);
    //             setuser(decode);
    //         } catch (error) {
    //             console.log("Error while decoding token ", error);
    //         }
    //     }
    // }, [])
    // const handleLogout = (() => {
    //     localStorage.removeItem("token");
    //     setuser(null);
    //     navigate("/");
    // })

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page" >Home</Link>

                            </li>
                            <li className="nav-item">
                                <Link to={"/About"} className="nav-link active">About</Link>
                            </li>
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <Link to={"/blogpost"} className="nav-link active">Write a blog</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.fullName}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li style={{ cursor: "pointer" }} onClick={logout} >Logout</li>

                                        </ul>
                                    </li>
                                </>
                            ) : (
                                <>
                                 <li className="nav-item">
                                <Link to={"/login"} className="nav-link active">Write a blog</Link>
                            </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </a>
                                    <ul className="dropdown-menu">
                                        <Link to={"/Register"} className="nav-link active">Register</Link>
                                        <Link to={"/login"} className="nav-link active">Login</Link>

                                    </ul>
                                </li>
                                </>
                            )}


                        </ul>

                    </div>
                </div >
            </nav >
        </>
    )
}
export default Navbar;