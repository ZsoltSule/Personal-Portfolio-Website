import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Card from './Card';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './components/ProjectDetails';
import Resume from './pages/Resume';
import Contacts from './pages/Contacts';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Card />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="projects/:id" element={<ProjectDetails />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
