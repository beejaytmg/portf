import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UploadProject = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [detail, setDetail] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate()
  const handlenameChange = (e) => setName(e.target.value);
  const handletypeChange = (e) => setType(e.target.value);
  const handledetailChange = (e) => setDetail(e.target.value);
  const handlelinkChange = (e) => setLink(e.target.value);
  const handleCoverFileChange = (e) => setImage(e.target.files[0]);
  useEffect(() => {
    const handleVerify = () => {
      const refreshToken = localStorage.getItem('refresh');
      axios
        .post('https://authapiko.pythonanywhere.com/token/', {
          refresh: refreshToken,
        })
        .then((response) => {
          setAccessToken(response.data.access);
        })
        .catch(error => {
          console.error(error);
          // Handle error, e.g., show an error message to the user
        });
    };
    handleVerify();
  }, []);
  // const [accessToken, setAccessToken] = useState('');

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('type', type);
    formData.append('detail', detail);
    formData.append('link', link);
    formData.append('image', image);
    
    // const accessToken = localStorage.getItem('access');
    // console.log(accessToken)
    // Make the API request with the typeization header
    axios.post('https://authapiko.pythonanywhere.com/projects/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'Authorization': `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      console.log(response.data);
      navigate("/");
      // Handle success, e.g., show a success message to the user
    })
    .catch(error => {
      console.error(error);
      // Handle error, e.g., show an error message to the user
    });
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Book</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">name:</label>
        <input
          type="text"
          value={name}
          onChange={handlenameChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">type:</label>
        <input
          type="text"
          value={type}
          onChange={handletypeChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">detail:</label>
        <textarea
          value={detail}
          onChange={handledetailChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">link:</label>
        <input
          type="text"
          value={link}
          onChange={handlelinkChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">image</label>
        <input
          type="file"
          onChange={handleCoverFileChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadProject;
