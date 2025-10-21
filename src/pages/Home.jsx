import './home.css'

function Home(){
    return(
        <>
            <div className="home-container">
                <h1 className="title">About Me</h1>
                <hr></hr>
                <h2 className="subtitle">22 / Junior Developer / Oradea</h2>
                <hr></hr>
                <p class="skills">
                    <span data-lang="C/C++">C/C++</span>
                    <span data-lang="HTML">HTML</span>
                    <span data-lang="CSS">CSS</span>
                    <span data-lang="JavaScript">JavaScript</span>
                    <span data-lang="C#">C#</span>                 
                    <span data-lang="Python">Python</span>               
                </p>
                <hr></hr>
                <div className="description">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum hic numquam 
                        deleniti ducimus architecto, fugiat velit exercitationem, 
                        quas explicabo perferendis cupiditate obcaecati, minima dolores cum nisi. Veniam, iure quia?              
                    </p>
                    <hr></hr>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum hic numquam 
                        deleniti ducimus architecto, fugiat velit exercitationem, 
                        quas explicabo perferendis cupiditate obcaecati, minima dolores cum nisi. Veniam, iure quia?              
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home