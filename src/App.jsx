import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Card from './Card';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './components/ProjectDetails';
import Resume from './pages/Resume';
import Contacts from './pages/Contacts';

const PageTransition = ({children}) => (
    <motion.div initial = {{opacity: 0, y: 20}} 
                animate = {{opacity: 1, y: 0}}
                exit = {{opacity: 0, y: -20}}
                transition = {{duration: 0.5, ease: "easeInOut"}}>{children}</motion.div>
);

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Card />}>
                    <Route index element={<PageTransition><Home/></PageTransition>}/>
                    <Route path="projects" element={<PageTransition><Projects/></PageTransition>}/>
                    <Route path="projects/:id" element={<PageTransition><ProjectDetails/></PageTransition>}/>
                    <Route path="resume" element={<PageTransition><Resume/></PageTransition>}/>
                    <Route path="contacts" element={<PageTransition><Contacts/></PageTransition>}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
         <Router>
            <AnimatedRoutes/>
        </Router>
    );
}

export default App;
