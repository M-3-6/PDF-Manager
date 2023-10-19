import React from "react";
import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
import HighlightAndComment from "../components/HighlightAndComment";
import { useParams } from "react-router-dom";

const Open = () => {
    // const { file_id } = useParams();
    const pdfUrl = "some-file.pdf";
    // console.log(file_id);
    return (
        <div>
            <Logout />
            <HighlightAndComment pdfUrl={pdfUrl}/>
            <Sidebar />  
        </div>
    )
}

export default Open;