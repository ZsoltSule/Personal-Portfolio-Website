import {Link} from "react-router-dom";

function ProjectCard({project}) {
    return (
        <div className="border mt-2 border-yellow-300 rounded-lg overflow-hidden bg-yellow-300 transform transition duration-500 hover:shadow-lg hover:scale-110">
            <Link to={`/projects/${project.id}`} className="block">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4"/>
                <h2 className="text-xl font-bold text-black text-center">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-1 mb-1 justify-center">
                    {project.languages.map((lang, index) => (
                            <span key={index} className="bg-black text-yellow-300 px-2 py-1 rounded-md text-sm font-bold">{lang}</span>
                    ))}
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard;