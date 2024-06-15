import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import computer from '../Assets/computerset.jpg';
import personalphoto from '../Assets/personalphoto.png'
import git from '../Assets/git.png'
import gmail from '../Assets/gmail.png'
import linkedin from '../Assets/linkedin.png'

function Home() {
  const emailAddress = 'mercychris070@gmail.com';
  return (
    <div className='container'>
      <div className='navbar'>
        <nav > 
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='aboutm'>
        <div className='aboutme'>
          <img src={personalphoto} alt='myphoto'style={{ width: '350px', height: '350px'}}></img>
         

        </div>
        <div className='personnal'> 
        <h1>About Me</h1>
   <h2>
    HELLO! i'm Mercy Osazee Aikhionbare 
   </h2>
   <p> here is  a bit about  me
    i am an entry level developer, i love self learning its one of the ways 
    that helped me build my skills in React.
    i currently reside in Ontario Canada.
    Coding has become a perfect union of my two favorites passion and i love seeing the results of my efforts 
    helping the user experience.
      </p>
<h1>
  Personal Interest:</h1>
 <p> outside of coding, i enjoy playing football, i enjoy traveling, 
  i love exploring new cuisine. i also spending tiime with family and friends</p>
 <strong>Lets Connect:</strong>
 <p>I'm always open to new opportunities and collaborations. Feel free to reach out to me at</p>
 <a href='https://github.com/mercychriz/mercychriz'><img src={git} alt='mygit'></img></a> 
  <a href={`mailto:${emailAddress}`}><img src={gmail} alt='mygmial'style={{ width: '30px', height: '30px'}}></img></a>
  <a href='www.linkedin.com/in/mercychristopherokocha0239'><img src={ linkedin} alt='mylinkedin'style={{ width: '30px', height: '30px'}}></img></a>

 
        </div>
      </div>
      <div className='footer'>
      <p> &copy; {new Date().getFullYear()} Mercy Aikhionbare Osazee</p>
      </div>
    </div>
  );
}

export default Home;