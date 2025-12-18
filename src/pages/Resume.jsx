import './resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div className="inner-wrapper">
          <h1>Resume</h1>
        <hr/>
        <p>
           Junior Frontend Engineer with hands on experience in building modern, responsive, and scalable web applications using React, 
           JavaScript, and TypeScript. Proficient in HTML, CSS, Tailwind CSS, and MySQL, with a strong understanding of clean UI design and 
           user-focused development. Experienced in using Git for version control and collaborative workflows, and passionate about creating 
           high-quality web experiences through well-structured and maintainable code. Also experienced in building applications using .NET and Python.
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
            My experience comes from building personal projects and modern, responsive web applications using React,
            JavaScript, TypeScript, HTML, CSS, and Tailwind CSS, along with MySQL for data handling and Git for version control. 
            I have developed several personal projects, including a portfolio website to showcase ongoing work, a 2D platformer game 
            built with Python and Pygame featuring a custom level editor using JSON for creating and loading game levels, and a banking application developed
            using the .NET Framework with functionality for account creation, interest rates, and deposit and withdrawal operations. 
            I have also created an interactive Pong game as a fun project to explore game logic and user interaction. I demonstrate strong problem-solving skills, 
            a strong interest in clean UI design, and a commitment to continuous learning across frontend and general software development technologies.
        </p>

        <hr/>
        <h1>Education</h1>
        <hr/>
        <p>
            I hold a Bachelor’s degree in Computer Science from the University of Oradea and completed my secondary education at Gheorghe Șincai National College 
            in Baia Mare, where I obtained my Baccalaureate diploma. I am currently pursuing a Master’s degree in Distributed Systems on the Internet. I have a high level of English proficiency, 
            speaking fluently at a (B2–C1) level. I am a native speaker of Romanian and Hungarian (C2 level) and have basic to intermediate proficiency in German (A2–B1 level).
        </p>
      </div>   
    </div>
  );
}

export default Resume;
