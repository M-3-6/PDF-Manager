import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowFile from '../components/ShowFile';
import { Link } from 'react-router-dom';

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
      <div className='pdf-grid'>
         {files.map(file => (
            <Link to="/open-file">
                <button key={file.id} className="pdf-container">
                    <ShowFile file={file} scale={0.5} />
                </button>
                </Link>
        ))}
    </div>
  );
}

export default FileList;
