import {Link} from "react-router-dom";

function ProjectCard({project}) {
    return (
        <div>
            <Link to={`/projects/${project.id}`}>
                <img src={project.image} alr={project.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
                <h2 className="text-xl font-bold text-yellow-300 text-center">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                    {project.languages.map((lang, index) => (
                            <span key={index} className="bg-yellow-300 text-black px-2 py-1 rounded-md text-sm font-semibold">{lang}</span>
                    ))}
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard;