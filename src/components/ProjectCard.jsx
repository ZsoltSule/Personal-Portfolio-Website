import {Link} from "react-router-dom";

function ProjectCard({project}) {
    return (
        <div>
            <Link to={`/projects/${project.id}`}>
                <img src={project.image} alr={project.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
            </Link>
        </div>
    )
}

export default ProjectCard;