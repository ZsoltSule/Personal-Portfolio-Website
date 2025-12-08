import { Link } from "react-router-dom";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <Link to={`/projects/${project.id}`} className="project-link">
                <img src={project.image} alt={project.title} className="project-image" />

                <h2 className="project-title">{project.title}</h2>

                <div className="project-languages">
                    {project.languages.map((lang, index) => (
                        <span key={index} className="project-language">
                            {lang}
                        </span>
                    ))}
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;
