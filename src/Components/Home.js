import React from 'react';
import './Home.css'
import './About.css'
import { Link } from 'react-router-dom';
import computer from '../Assets/computerset.jpg';

function Home() {
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
      <div className='part2'>
        <h1>Welcome</h1>
        <hi>I AM A FULLSTACK DEVELOPER</hi>
        <p>i am a FULLSTACK DEVELOPER, my focus is to build a complete and functional web applications</p>
         <p> i am currently living in Ontario, Canada.
        </p>
      
        <a href="/Mercy Aikhionbare Osazee Resume1.pdf" download className="cv-button"><button style={{width :'150px'}}>Download CV</button></a>
      </div>

      <div className='footer'>
      <p> &copy; {new Date().getFullYear()} Mercy Aikhionbare Osazee</p>
      </div>
    </div>
  );
}

export default Home;