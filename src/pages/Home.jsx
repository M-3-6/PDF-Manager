import React from "react";
import Dashboard from "../components/Dashboard";
import Logout from "../components/Logout";
import Upload from "../components/UploadFile";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Logout />
            <Upload />
            <Dashboard />
            <button className='upload-button'><Link to="/files" style={{"color":"white"}} className="nav-link">View All Files</Link></button>
        </div>
    )
}

export default Home;