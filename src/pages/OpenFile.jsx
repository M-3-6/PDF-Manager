import React, {useState, useEffect} from "react";
import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
import HighlightAndComment from "../components/HighlightAndComment";
// import { useParams } from "react-router-dom";
// import axios from 'axios';

const Open = () => {
    // const [pdfFileData, setPdfFileData] = useState(null);

    // const fileID = 1; // Replace with the actual file ID you want to fetch

    // useEffect(() => {
    //     axios
    //     .get(`http://localhost:5000/get-file/${fileID}`, {
    //         responseType: "arraybuffer",
    //     })
    //     .then((response) => {
    //         const pdfBlob = new Blob([response.data], { type: "application/pdf" });
    //         setPdfFileData(pdfBlob);
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching PDF Blob:", error);
    //     });
    // }, [fileID]);

    // const { file_id } = useParams();

    // console.log(pdfFileData);

    const fileData = "some-file.pdf";
    return (
        <div>
            <Logout />
            <HighlightAndComment pdfUrl={fileData} /> 
            <Sidebar />  
        </div>
    )
}

export default Open;