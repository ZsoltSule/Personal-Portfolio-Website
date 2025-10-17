import profilePic from './assets/pictures/card-profile-pic.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" ></img>
            <h2 className="font-bold text-[40px] font-serif">Zsolt Sule</h2>
            <p className="font-semibold italic text-[28px]">Junior Developer</p>
            <a href="https://www.linkedin.com/in/sule-zsolt-5a3bb1357" target="_blank" rel="noopener noreferrer" className="inline-block transform transition duration-300 hover:scale-125">
                <i className="fa-brands fa-square-linkedin text-5xl text-blue-800 hover:text-blue-900 transition-colors duration-300"></i>
            </a>
            
        </div>
    );
}

export default Card