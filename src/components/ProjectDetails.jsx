import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projectData";
import './projectDetails.css';

function ProjectDetails(){
    const { id } = useParams();
    const project = projectData.find((p) => p.id === id);

    if (!project){
        return <p className="text-white">Project not found!</p>
    }

    return(
        <div className="projectDetails-container p-10">
            <div className="mt-6"> 
                <h1 className="text-4xl font-bold text-white mb-4 text-center">{project.title}</h1>
                <img src={project.demo} alt={project.title} className="project-image w-full h-96 object-cover rounded-lg mb-6"/>

                <h2 className="text-3xl font-bold  text-yellow-300 mt-4 mb-2 text-center">Technologies</h2>
                <hr></hr>
                <ul className="text-2xl font-bold list-disc list-inside mb-6 text-center mt-4">
                    {project.technologies.map((tech, i) => (<li key={i}>{tech}</li>))}
                </ul>
                <hr></hr>
                <p className="text-lg mb-4 mt-4">{project.longDesc}</p>

                <div className="flex gap-6 justify-center">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-300 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transform transition duration-300 hover:scale-110 mt-4">GitHub</a>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-300 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transform transition duration-300 hover:scale-110 mt-4">Live</a>
                    )}
                </div>
            </div>
                <Link to="/projects" className="inline-block bg-yellow-300 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transform transition duration-300 hover:scale-110 mb-4">Back to Projects</Link>
        </div>
    );
}

export default ProjectDetails;