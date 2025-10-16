import profilePic from './assets/pictures/card-profile-pic.jpeg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
        </div>
    );
}

export default Card