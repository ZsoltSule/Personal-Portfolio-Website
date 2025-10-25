import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projectData";

function ProjectDetails(){
    const { id } = useParams();
    const project = projectData.find((p) => p.id === id);

    if (!project){
        return <p className="text-white">Project not found!</p>
    }

    return(
        <div className="p-10 text-white">
            <Link to="/projects" className="text-yellow-300 underline hover:text-yellow-400">Back to Projects</Link>
            <div className="mt-6"> 
                <h1 className="text-4x1 font-bold text-yellow-300 mb-4">{project.title}</h1>
                <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-lg mb-6"/>
                <p className="text-lg mb-4">{project.longDesc}</p>

                <h2 className="text-2xl text-yellow-300 mt-4 mb-2">Technologies:</h2>
                <ul className="list-disc list-inside mb-6">
                    {project.technologies.map((tech, i) => (<li key={i}>{tech}</li>))}
                </ul>
                <div className="flex gap-6">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="border border-yellow-300 px-4 py-2 rounded hover:bg-yellow-300 hover:text-black transition">GitHub</a>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="border border-yellow-300 px-4 py-2 rounded hover:bg-yellow-300 hover:text-black transition">Live</a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;