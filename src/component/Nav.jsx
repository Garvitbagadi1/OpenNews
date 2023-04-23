import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (<div>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" to="/"><h1 style={{ fontSize: "50px", color: "rgb(252, 244, 243 )" }}>OpenNews</h1></a>
        <form className="d-flex" role="search">
          
        </form>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{width:"100%"}}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/"><h5>Home</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/general"><h5>General</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="business"><h5>Business</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="entertainment"><h5>Entertainment</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/health"><h5>Health</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/science"><h5>Science</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/sports"><h5>Sport</h5></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/technology"><h5>Technology</h5></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>)
};
