import { useState, useEffect } from 'react';
import ShowFile from './ShowFile';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Dashboard = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get('https://pdf-manager-backend-production.up.railway.app/get_all_files')
        .then(response => {
            setFiles(response.data);
        })
        .catch(error => {
            console.error('Error fetching files:', error);
        });
    }, []);

	return (
            <div className='pdf-grid'>
                {files.slice(0,4).map(file => (
                    <Link to="/open-file">
                        <button key={file.id} className="pdf-container">
                            <ShowFile file={file} scale={0.5} />
                        </button>
                    </Link>
                ))}
            </div>          
	);
};

export default Dashboard;
