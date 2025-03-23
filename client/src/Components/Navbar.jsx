import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

function Navbar() {
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu">
                                    <Link to={"/Register"} className="nav-link active">Register</Link>
                                    <Link to={"/login"} className="nav-link active">Login</Link>
                                    <Link to={"/logout"} className="nav-link active">Logout</Link>
                                   
                                </ul>
                            </li>
                           
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;