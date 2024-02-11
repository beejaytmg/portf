import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Project = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsResponse = await axios.get('https://authapiko.pythonanywhere.com/projects/');
        const fetchedProjectsData = projectsResponse.data;
        setProjectsData(fetchedProjectsData);
        setLoading(false);
      } catch (error) {
        console.error("Couldn't fetch projects");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading ? (
        <div className="text-center">Loading projects...</div>
      ) : (
        projectsData.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            <div className="bg-purple-600 py-2 px-4 rounded-t-lg">
              <h3 className="text-sm font-semibold text-white">{project.name}</h3>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-2">Type: {project.type}</p>
              <p className="text-xs text-gray-600 mb-4">Detail: {project.detail}</p>
              <img
                src={project.image}
                alt={`project cover for ${project.name}`}
                className="rounded-lg w-full h-32 object-cover"
              />
              <Link to={project.link} className="block text-purple-600 mt-2 hover:underline text-sm">
                View Project
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Project;
