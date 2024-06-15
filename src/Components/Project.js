

import React from 'react';
import './Home.css'
import './Project.css'
import { Link } from 'react-router-dom';
import computer from '../Assets/computerset.jpg';
import mono from '../Assets/mono.png'
function Project() {
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
      <div>
        <div className='mywork'>
          <h1>My Work</h1>
          <p>I am a full stack DEVELOPER who loves building user friendly website and web applications, and currently residing in Ontario, canada </p>

         <div>
           <div className='projects'>
            <img src={mono} alt='Monophoto' style={{ width: '400px', height: '300px'}}></img>
            <p>school project about the African Renaissance Monuments in Senegal created with HTML and CSS </p>
            <a href='https://github.com/mercychriz/Website_Sidebar_footer'><button>View Project</button></a>
           </div>
         </div>
        </div>
      </div>
      <div className='footer'>
      <p> &copy; {new Date().getFullYear()} Mercy Aikhionbare Osazee</p>
      </div>
      </div>
      );
      }
    
export default Project