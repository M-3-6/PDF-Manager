import React from "react";
import Logout from "../components/Logout";

// import ShowFile from "../components/ShowFile";
import Sidebar from "../components/Sidebar";
// import PdfHighlighterComponent from "../components/HighLightDemo";
// import ShowComments from "../components/ShowComments";
// import CommentDemo from "../components/CommentDemo";
import HighlightAndComment from "../components/HighlightAndComment";
// import PdfHighlighterComponent from "../components/CommentDemo";


const Open = () => {
    return (
        <div>
            <Logout />
            <HighlightAndComment />
            {/* <ShowFile className="pdf-container" file={file} scale={2}/> */}
            {/* <PdfHighlighterComponent /> */}
            {/* <ShowComments /> */}
            {/* <CommentDemo /> */}
            <Sidebar />  
        </div>
    )
}

export default Open;