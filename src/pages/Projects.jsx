import './projects.css'
import ProjectCard from '../components/ProjectCard'
import {projectData} from '../data/projectData'
import {useState} from 'react'

function Projects(){

    const [selectedLanguage, setSelectedLanguage] = useState("Any");
    const filteredProjects = selectedLanguage === "Any" ? projectData : projectData.filter(project => project.languages.includes(selectedLanguage));

    return(
            <div className="projects-container"> 
                <h1 className="title text-3x1 text-white font-bold mb-4">My Projects</h1>
                <hr className="mb-4"/>

                <div className="mb-6 text-center">
                    <label className="text-3xl text-white font-bold mr-2">Language:</label>
                    <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="p-2 rounded bg-yellow-300 text-black font-bold text-xl">
                        <option value="Any">Any</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="C#">C#</option>
                        <option value="C/C++">C/C++</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
    );
}

export default Projects