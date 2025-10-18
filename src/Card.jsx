import profilePic from './assets/pictures/card-profile-pic.jpeg'

function Card(){
    return(
        <>
            <div className="card">
                <img className="card-image" src={profilePic} alt="profile picture" ></img>
                <h2 className="font-bold text-[40px] font-serif m-[0px]">Zsolt Sule</h2>
                <p className="font-semibold italic text-[28px]">Junior Developer</p>
                <a href="https://github.com/ZsoltSule" target="_blank" rel="noopener noreferrer" className="inline-block transform transition duration-300 hover:scale-125">
                    <i className="fa-brands fa-github text-5xl text-black hover:text-gray-700 transition-colors duration-300"></i>
                </a>
                <a href="https://www.instagram.com/zsolti_sule" target="_blank" rel="noopener noreferrer" className="inline-block transform transition duration-300 hover:scale-125">
                    <i className="fa-brands fa-instagram text-5xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent transition-colors duration-300"></i>
                </a>
                <a href="https://www.linkedin.com/in/sule-zsolt-5a3bb1357" target="_blank" rel="noopener noreferrer" className="inline-block transform transition duration-300 hover:scale-125">
                    <i className="fa-brands fa-square-linkedin text-5xl text-blue-800 hover:text-blue-900 transition-colors duration-300"></i>
                </a>
            </div>

            <nav className="navbar">
                <ul>
                    <li><a><i className="fa-solid fa-house text-5xl"></i></a></li>
                    <li><a><i className="fa-solid fa-book text-5xl"></i></a></li>
                    <li><a><i className="fa-solid fa-file text-5xl"></i></a></li>
                    <li><a><i className="fa-solid fa-message text-5xl"></i></a></li>
                </ul>
            </nav>      
        </>   
    );
}

export default Card