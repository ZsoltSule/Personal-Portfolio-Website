import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Card from "./Card";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contacts from "./pages/Contacts";

function App() {

    return (
        <Router>
            <div>
                <Card/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="*" element={<Navigate to="/" />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App
