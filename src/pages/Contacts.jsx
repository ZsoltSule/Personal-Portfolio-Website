import './contacts.css';

function Contacts(){
    return(
        <>
            <div className="contacts-container">
                <div className="inner-wrapper">
                    <h1 className="title">Contacts</h1>
                    <hr/>
                    <p>
                        You can contact me on the platforms that I listed below.
                    </p>
                    <hr/>
                    <div className="contacts-grid">
                        <a href="https://www.facebook.com/zsolt.sule.14" target="_blank" rel="noopener noreferrer" className="contact-link facebook">
                            <i className="fa-brands fa-facebook"></i>
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/zsolti_sule" target="_blank" rel="noopener noreferrer" className="contact-link instagram">
                            <i className="fa-brands fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://github.com/ZsoltSule" target="_blank" rel="noopener noreferrer" className="contact-link github">
                            <i className="fa-brands fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/sule-zsolt-5a3bb1357" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <hr/>
                    <div className="end"><p>Thanks for visiting my website! :)</p></div>
                </div>
            </div>
        </>
    );
}

export default Contacts;
