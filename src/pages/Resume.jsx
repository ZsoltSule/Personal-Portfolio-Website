import './resume.css'

function Resume(){
    return(
        <>
            <div className="resume-container">
                <h1 className="title">Resume</h1>
                <hr></hr>
                <p className="mb-4 mt-4 p-2 text-xl font-semibold text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis voluptatibus modi 
                    repellendus provident velit obcaecati porro! Eveniet ipsum expedita quo quas placeat quis, 
                    ex tempora harum. Perspiciatis, tenetur quo?
                </p>
                <hr></hr>
                <h1 className="title">Skills</h1>
                <hr></hr>
                <div className="grid grid-cols-2 gap-8 mb-4 mt-4 p-2 text-xl font-semibold text-center">
                    <div className="flex flex-col items-center">
                        <span className="block text-2xl mb-3">Front-End</span>
                        <div className="flex gap-1">
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>   
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="block text-2xl mb-3">Back-End</span>
                        <div className="flex gap-1">
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="block text-2xl mb-3">Problem Solving</span>
                        <div className="flex gap-1">
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mb-3">
                        <span className="block text-2xl mb-3">Version Control</span>
                        <div className="flex gap-1">
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>       
                </div>
                <hr></hr>
                <h1 className="title">Experience</h1>
                <hr></hr>
                <p className="mb-4 mt-4 p-2 text-xl font-semibold text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Recusandae exercitationem saepe, doloremque beatae quasi iste maxime dolorum illum enim, 
                    dolor corrupti a, architecto vero ullam veniam sunt accusantium. Error, maxime?
                </p>
                <hr></hr>
                <h1 className="title">Education</h1>
                <hr></hr>
                <p className="mb-4 mt-4 p-2 text-xl font-semibold text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Recusandae exercitationem saepe, doloremque beatae quasi iste maxime dolorum illum enim, 
                    dolor corrupti a, architecto vero ullam veniam sunt accusantium. Error, maxime?
                </p>
                <hr></hr>
                <div className="text-2xl text-center mt-4 p-4">
                    <a href="/CV.pdf" download className="inline-block bg-yellow-300 text-black font-bold px-6 py-3 mr-4 rounded-2xl transform transition duration-300 hover:scale-110">Download Resume</a>
                    <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-300 text-black font-bold px-6 py-3 ml-4 rounded-2xl transform transition duration-300 hover:scale-110">View Resume</a>
                </div>
            </div>
        </>
    );
}

export default Resume