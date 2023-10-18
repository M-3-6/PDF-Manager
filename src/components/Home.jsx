import React from "react";
import Dashboard from "../pages/Dashboard";
import Logout from "./Logout";
import Upload from "./UploadFile";

const Home = () => {
    return (
        <div>
            <Logout />
            <Upload />
            <Dashboard />
        </div>
    )
}

export default Home;