import './contacts.css'

function Contacts(){
    return(
        <>
            <div className="contacts-container">
                <h1 className="title">Contacts</h1>
                <hr></hr>
                <p className="mb-4 mt-4 p-2 text-2xl font-semibold text-center">You can contact me on the platforms that I listed below.</p>
                <hr></hr>
                <div className="grid grid-cols-2 gap-8 mb-4 mt-4 mr-40 p-2 text-xl font-semibold text-center">
                    <a href="https://www.facebook.com/zsolt.sule.14" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-700"><i className="fa-brands fa-facebook"><span className="text-white hover:text-yellow-300 ml-3 font-serif">Facebook</span></i></a>
                    <a href="https://www.instagram.com/zsolti_sule" target="_blank" rel="noopener noreferrer" className="text-4xl"><i className="fa-brands fa-instagram bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent transition-colors duration-300"><span className="text-white hover:text-yellow-300 ml-3 font-serif">Instagram</span></i></a>
                    <a href="https://github.com/ZsoltSule" target="_blank" rel="noopener noreferrer" className="text-4xl"><i className="fa-brands fa-github text-black"><span className="text-white hover:text-yellow-300 ml-3 font-serif">GitHub</span></i></a>
                    <a href="https://www.linkedin.com/in/sule-zsolt-5a3bb1357" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-700"><i className="fa-brands fa-square-linkedin"><span className="text-white hover:text-yellow-300 ml-3 font-serif">LinkedIn</span></i></a>
                </div>
                <hr></hr>
                <p className="text-center p-2 mt-12 text-4xl font-bold">Thanks for visiting my website! :)</p>
            </div>
        </>
    );
}

export default Contacts