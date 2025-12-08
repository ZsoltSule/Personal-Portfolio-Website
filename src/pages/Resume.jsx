import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div className="inner-wrapper">
          <h1>Resume</h1>
        <hr/>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis voluptatibus modi 
            repellendus provident velit obcaecati porro! Eveniet ipsum expedita quo quas placeat quis, 
            ex tempora harum. Perspiciatis, tenetur quo?
        </p>

        <hr/>
        <h1>Skills</h1>
        <hr/>
        <div className="skills-grid">
            <div className="skill">
            <span className="skill-name">Front-End</span>
            <div className="stars">
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            </div>
            <div className="skill">
            <span className="skill-name">Back-End</span>
            <div className="stars">
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            </div>
            <div className="skill">
            <span className="skill-name">Problem Solving</span>
            <div className="stars">
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            </div>
            <div className="skill">
            <span className="skill-name">Version Control</span>
            <div className="stars">
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            </div>
        </div>

        <hr/>
        <h1>Experience</h1>
        <hr />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae exercitationem saepe, doloremque beatae quasi iste maxime dolorum illum enim, 
            dolor corrupti a, architecto vero ullam veniam sunt accusantium. Error, maxime?
        </p>

        <hr/>
        <h1>Education</h1>
        <hr/>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae exercitationem saepe, doloremque beatae quasi iste maxime dolorum illum enim, 
            dolor corrupti a, architecto vero ullam veniam sunt accusantium. Error, maxime?
        </p>
      </div>   
    </div>
  );
}

export default Resume;
