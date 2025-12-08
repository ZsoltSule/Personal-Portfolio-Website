import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projectData";
import "./projectDetails.css";

function ProjectDetails() {
    const { id } = useParams();
    const project = projectData.find((p) => p.id === id);

    if (!project) {
        return <p className="not-found">Project not found!</p>;
    }

    return (
        <div className="projectDetails-container">
            <div className="inner-wrapper">  
                <h1>{project.title}</h1>
                <hr />
                <img 
                    src={project.demo} 
                    alt={project.title}
                    className="project-image"
                />
                <hr />
                <h2>Technologies</h2>
                <hr />

                <div className="description">
                    <ul>
                        {project.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>

                <hr />
                <div className="description">
                    <p>{project.longDesc}</p>
                </div>

                <hr />
                <div className="project-buttons">
                    <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                    >
                        GitHub
                    </a>

                    {project.live && (
                        <a 
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn"
                        >
                            Live
                        </a>
                    )}
                </div>

                <Link to="/projects" className="project-btn back-btn">
                    Back to Projects
                </Link>

            </div>
        </div>
    );
}

export default ProjectDetails;
