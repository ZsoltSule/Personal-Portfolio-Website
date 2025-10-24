import './projects.css'
import ProjectCard from '../components/ProjectCard'
import {projectData} from '../data/projectData'

function Projects(){
    return(
            <div className="projects-container"> 
                <h1 className="title text 4x1 text-yellow-300 font-bold mb-6"></h1>
                <hr className="mb-6 border-yellow-300"/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectData.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
    );
}

export default Projects