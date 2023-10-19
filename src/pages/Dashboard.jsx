import { useState, useEffect } from 'react';
import ShowFile from '../components/ShowFile';
import axios from 'axios';


const Dashboard = () => {

    // const pdfFiles = [
    //     "some-file.pdf",
    //     "some-file-2.pdf"
    // ];

    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/get_all_files')
        .then(response => {
            setFiles(response.data);
        })
        .catch(error => {
            console.error('Error fetching files:', error);
        });
    }, []);

    // <div className="pdf-grid">
    //             {pdfFiles && pdfFiles.map((file, index) => (
    //                 <div key={index} className="pdf-container">
    //                     {/* <ShowFile file={file} scale={0.5} /> */}
    //                 </div>
    //             ))}
    //         </div>

	return (
        <div>
            <div className='pdf-grid'>
                {files.slice(0,4).map(file => (
                        <div key={file.id} className="pdf-container">
                            <ShowFile file={file} scale={0.5} />
                        </div>
                ))}
            </div>
            <button className='upload-button'>View All Files</button>
        </div>
	);
};

export default Dashboard;