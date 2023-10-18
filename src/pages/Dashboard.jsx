import { useState } from 'react';
// import ShowFile from '../components/ShowFile';


const Dashboard = () => {

    const pdfFiles = [
        "some-file.pdf",
        "some-file-2.pdf"
    ];

	return (
        <div>
        <div className="pdf-grid">
            {pdfFiles.map((file, index) => (
                <div  className="pdf-container">
                    {/* <ShowFile file={file} scale={0.5} /> */}
                </div>
            ))}
            </div>
            <button className='upload-button'>View All Files</button>
        </div>
	);
};

export default Dashboard;