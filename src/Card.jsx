import profilePic from './assets/pictures/card-profile-pic.jpeg'
import circularPic from './assets/pictures/pfp_circular.png'
import {NavLink, Outlet} from 'react-router-dom'

function Card(){
    return(
        <>
        <div className="flex items-start w-full">
            <nav className="navbar">
                <ul className="space-y-16">
                    <li className="-mt-20 mb-24"><img src={circularPic} className="w-16 h-16 rounded-full border-2 border-yellow-300" alt="profile"/></li>
                    <li><NavLink to="/" aria-label="Home" title="Home" className={({ isActive }) => isActive ? "text-yellow-300" : ""}><i className="fa-solid fa-house text-5xl transform transition duration-300 hover:scale-125"></i></NavLink></li>
                    <li><NavLink to="/projects" aria-label="Projects" title="Projects" className={({ isActive }) => isActive ? "text-yellow-300" : ""}><i className="fa-solid fa-book text-5xl transform transition duration-300 hover:scale-125"></i></NavLink></li>
                    <li><NavLink to="/resume" aria-label="Resume" title="Resume" className={({ isActive }) => isActive ? "text-yellow-300" : ""}><i className="fa-solid fa-file text-5xl transform transition duration-300 hover:scale-125"></i></NavLink></li>
                    <li><NavLink to="/contacts" aria-label="Contacts" title="Contacts" className={({ isActive }) => isActive ? "text-yellow-300" : ""}><i className="fa-solid fa-message text-5xl transform transition duration-300 hover:scale-125"></i></NavLink></li>
                </ul>
            </nav>

            <div className="card">
                <img className="card-image w-16 h-16 rounded-full border-2 border-yellow-300" src={profilePic} alt="profile picture" ></img>
                <h2 className="font-bold text-[40px] font-serif m-[0px] text-white">Zsolt Sule</h2>
                <p className="font-semibold italic text-[28px] text-yellow-300">Junior Developer</p>
                <div className="flex justify-center gap-6">
                    <a href="https://github.com/ZsoltSule" target="_blank" rel="noopener noreferrer" className="inline-block transform transition duration-300 hover:scale-125">
                        <i className="fa-brands fa-github text-5xl text-black transition-colors duration-300"></i>
                    </a>
                    <a href="https://www.instagram.com/zsolti_sule" target="_blank" rel="noopener noreferrer" className="inline-block transform transition duration-300 hover:scale-125">
                        <i className="fa-brands fa-instagram text-5xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent transition-colors duration-300"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sule-zsolt-5a3bb1357" target="_blank" rel="noopener noreferrer" className="inline-block transform transition duration-300 hover:scale-125">
                        <i className="fa-brands fa-square-linkedin text-5xl text-blue-800 transition-colors duration-300"></i>
                    </a>
                </div> 
            </div>  
            <div className="flex-1 self-start">
                <Outlet/> 
            </div>
        </div>    
        </>   
    );
}

export default Card