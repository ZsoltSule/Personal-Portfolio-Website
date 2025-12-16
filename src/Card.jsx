import profilePic from './assets/pictures/card-profile-pic.jpeg'
import circularPic from './assets/pictures/pfp_circular.png'
import './Card.css';
import { NavLink, Outlet } from 'react-router-dom'

function Card() {
    return (
        <>
            <div className="container">
                <nav className="navWrapper">
                    <ul className="navTop">
                        <li>
                            <img className="circularPic" src={circularPic} alt="profile" />
                        </li>
                    </ul>
                    <ul className="navIcons">
                        <li>
                            <NavLink to="/" end aria-label="Home" title="Home" className={({ isActive }) => (isActive ? 'active' : '')}>
                                <i className="fa-solid fa-house"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/projects" aria-label="Projects" title="Projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                                <i className="fa-solid fa-book"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/resume" aria-label="Resume" title="Resume" className={({ isActive }) => (isActive ? 'active' : '')}>
                                <i className="fa-solid fa-file"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contacts" aria-label="Contacts" title="Contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
                                <i className="fa-solid fa-message"></i>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="card">
                    <img className="profilePic" src={profilePic} alt="profile picture" />
                    <h2>Zsolt Sule</h2>
                    <p>Frontend Developer</p>

                    <div className="socialsIcons">
                        <a href="https://github.com/ZsoltSule" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github github"></i>
                        </a>

                        <a href="https://www.instagram.com/zsolti_sule" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram instagram"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/sule-zsolt-5a3bb1357" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-linkedin linkedin"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Card;
