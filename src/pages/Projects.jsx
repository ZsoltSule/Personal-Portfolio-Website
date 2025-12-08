import './projects.css';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projectData';
import { useState } from 'react';

function Projects() {

    const [selectedLanguage, setSelectedLanguage] = useState("Any");
    const filteredProjects =
        selectedLanguage === "Any"
            ? projectData
            : projectData.filter(project =>
                  project.languages.includes(selectedLanguage)
              );

    return (
        <div className="projects-container">
            <div className="projects-wrapper">
                <h1>My Projects</h1>
                <hr/>

                <div className="filter-section">
                    <label className="filter-label">Language:</label>

                    <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="filter-select"
                    >
                        <option value="Any">Any</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="PHP">PHP</option>
                        <option value="C#">C#</option>
                        <option value="C/C++">C/C++</option>
                    </select>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>       
        </div>
    );
}

export default Projects;
