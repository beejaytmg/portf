import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Project = () => {
  const [projectsData, setprojectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchprojects = async () => {
      try {
        const projectsResponse = await axios.get('https://authapiko.pythonanywhere.com/projects/');
        const fetchedprojectsData = projectsResponse.data;
        setprojectsData(fetchedprojectsData);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Couldn't fetch projects");
      }
    };

    fetchprojects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading ? (
        <div className="text-center">Loading projects...</div>
      ) : (
        projectsData.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 py-1 px-2">
              <h3 className="text-sm font-semibold text-white">{project.name}</h3>
            </div>
            <div className="p-2">
              <p className="text-xs text-gray-600">Type: {project.type}</p>
              <p className="text-xs text-gray-600">Detail: {project.detail}</p>
              <img
                src={project.image}
                alt={`project cover for ${project.name}`}
                className="mt-2 rounded-lg w-full h-auto"
              />
              <Link to={project.link} className="mt-1 block text-purple-600 hover:underline text-xs">
                Project Link
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Project;
