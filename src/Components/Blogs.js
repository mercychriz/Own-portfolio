import React from 'react'
import './Home.css'
import './Blogs.css'
import { Link } from 'react-router-dom';
import computer from '../Assets/computerset.jpg';
import codefree from '../Assets/codefree.png';
import codepen from '../Assets/codepen.jpg';
import W3Schools_logo from '../Assets/wschool.png';

function Blogs() {
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
      <div className='blogss'>
      <h1>My Blog</h1>
        <p>I am a full stack DEVELOPER who loves building user friendly website and web applications, and currently residing in Ontario, canada </p>
        </div>
        <div className='blogger'>
          <div className='blogger1'><img src={codefree} alt='codefree' style={{ width: '300px', height: '300px'}}></img>
        <div className='blogger11'><h1>FreeCodeCamp</h1> 
         <p>freeCodeCamp is a non-profit educational organization that consists of an interactive learning web platform,
           an online community forum, chat rooms,
           online publications and local organizations that intend to make learning software development accessible to anyone.</p>
           <a href='https://www.freecodecamp.org/learn/front-end-development-libraries/#jquery'><button>Read More</button></a>
           </div></div>
          <div className='blogger2'><img src={codepen} alt='codepen' style={{ width: '300px', height: '300px'}}></img>
      <div className='blogger11'>    <h1>Codepen:</h1>
          <p>CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets.
             It functions as an online code editor and open-source learning environment,
             where developers can create code snippets, called "pens," and test them.</p>
           <a href='https://codepen.io/'> <button>Read More</button></a> </div></div> 
          <div className='blogger3'><img src= {W3Schools_logo} alt='w3school' style={{ width: '300px', height: '300px'}}></img>
       <div className='blogger11'>   <h1>W3School</h1>
          <p>W3Schools is a freemium educational website for learning coding online. Initially released in 1998, 
            it derives its name from the World Wide Web but is not affiliated with the W3 Consortium. 
            W3Schools offers courses covering many aspects of web development. W3Schools also publishes free HTML templates.</p>
            <a href='https://www.w3schools.com/howto/howto_blog_become_frontenddev.asp'><button>Read More</button></a></div></div> 
        </div>
    </div>
    <div className='footer'>
      <p> &copy; {new Date().getFullYear()} Mercy Aikhionbare Osazee</p>
      </div>
    </div>
  )
}

export default Blogs
