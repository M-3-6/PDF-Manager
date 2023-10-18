import React, { useState } from 'react';

function FileUpload() {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  function fileTypeCheck(selectedFiles) {
    for (var i=0; i<selectedFiles.length; i++) {
      if(selectedFiles[i].type !== "application/pdf") return false;
    }
    return true
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleDriveUpload = () => {
    // Implement Google Drive upload functionality here
    setUploadStatus('Uploading from Google Drive...');
  };

  return (
    <div className="container">
      <div className="upload-form">
        <button className="drive-upload" onClick={handleDriveUpload}>Upload from Google Drive</button>
        <p>OR</p>
        <input type="file" id="file-input" accept="*" multiple onChange={handleFileChange} />
        <div className="upload-status">{uploadStatus}</div>
        {fileTypeCheck(selectedFiles)===false ? (<p className="not-pdf">Selected files should be in PDF Format!</p>) : 
         selectedFiles.length > 0 && (
          <div className="selected-files">
            <p>Selected files:</p>
            <ul>
              {selectedFiles.map((file) => (
                <li key={file.name}>{file.type + " : " + file.name}</li>
                )  
              )}
            </ul>
          </div>
        )}
        <button className="upload-button">Upload New File</button>
      </div>
    </div>
  );
}

export default FileUpload;
