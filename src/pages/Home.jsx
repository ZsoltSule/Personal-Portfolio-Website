import './home.css';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="inner-wrapper">
                    <h1>About Me</h1>
                    <hr/>
                    <h2>22 / Frontend Engineer / Oradea</h2>
                    <hr/>

                    <div className="skills">
                        <span data-lang="C/C++">C/C++</span>
                        <span data-lang="HTML">HTML</span>
                        <span data-lang="CSS">CSS</span>
                        <span data-lang="PHP">PHP</span>
                        <span data-lang="JavaScript">JavaScript</span>
                        <span data-lang="C#">C#</span>
                        <span data-lang="SQL">SQL</span>
                        <span data-lang="Python">Python</span>
                    </div>

                    <hr/>

                    <div className="description">
                        <p>
                            Hello, I'm Zsolt, a 22-year-old Junior Frontend Engineer with a bachelor's degree in Computer Science.
                            I've had a strong passion for technology and programming from a young age. It all began with gaming as a kid, 
                            and later in school I was introduced to programming that’s when my journey truly started.
                        </p>
                        <p>
                            My first programming language was C++ during school, and it helped me develop my way of thinking, improve problem-solving skills, 
                            and learn algorithms and low-level technologies.  
                        </p>
                        <p>
                            During university, I began expanding my knowledge by first learning C#. 
                            I then continued developing my skills with Python, and later discovered my passion for frontend development. 
                            Since then, I have focused on strengthening my frontend abilities, working with technologies such as React, TypeScript, JavaScript, HTML, CSS, and TailwindCSS,
                            the tools I use most frequently and have the most experience with. I have also explored some backend technologies, including PHP and MySQL, to gain the ability to develop full-stack websites.
                        </p>
                        <p>
                            I have created many projects using these technologies over time. One of my biggest projects is a game built with 
                            Python and Pygame, which took a few months to develop on my own. I created everything from scratch, including the
                            level editor and all the graphics. Another project I’m really proud of is this website. For it, I combined several
                            frontend technologies to build a modern, scalable, and easy-to-use platform.
                        </p>
                        <p>
                            At present, I continue developing websites and using the frontend technologies 
                            I’ve learned to refine my skills. My goal is to improve the quality of my work, 
                            increase my development speed, and gain even more hands-on experience. 
                            I am fully committed to mastering frontend development.
                        </p>
                    </div>
                </div>    
            </div>
        </>
    );
}

export default Home;
