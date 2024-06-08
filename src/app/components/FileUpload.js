// components/FileUpload.js
"use client";
import { useState } from "react";

import uploadFile from "../detabases/uploadFile";
import Image from "next/image";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(false);
  const [downloadURL, setDownloadURL] = useState(null);
  // console.log(storage);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        setUploadProgress(true)
        const downloadURL = await uploadFile(selectedFile);
        console.log("File available at:", downloadURL);
        setDownloadURL(downloadURL);
        setUploadProgress(false);
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(selectedFile);
  return (
    <div className="max-w-md mx-auto">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleUpload}
        disabled={uploadProgress}
        className=" disabled:bg-slate-300 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
       {uploadProgress?'uploadString...':'upload'}
      </button>
      {uploadProgress > 0 && (
        <div className="mt-4">Uploading: </div>
      )}
      {downloadURL && (
        <div className="mt-4">
        <img src={downloadURL} alt='Your uploaded [pdf,files..ect] pls check download once ....' width={500} height={500} />
        
          <a
            href={downloadURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Download File
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
