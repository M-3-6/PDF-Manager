import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <Link to="/home" className="nav-link" style={{"color":"white"}}>
        <button className="upload-button logout-button home-button">Home</button>
        </Link>
    );
}

export default HomeButton;