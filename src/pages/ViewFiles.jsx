import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowFile from '../components/ShowFile';
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';
import HomeButton from '../components/HomeButton';

function FileList() {
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

  return (
    <div className='view-files-container'>
      <Logout />
      <HomeButton />
      <div className='pdf-grid'>
         {files.map(file => (
            <Link to="/open-file">
                <button key={file.id} className="pdf-container">
                    <ShowFile file={file} scale={0.5} />
                </button>
                </Link>
        ))}
      </div>
    </div>
  );
}

export default FileList;
