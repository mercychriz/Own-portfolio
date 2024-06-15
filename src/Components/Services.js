import React from 'react'
import './Home.css'
import './Services.css'
import { Link } from 'react-router-dom';
import computer from '../Assets/computerset.jpg';

function Services() {
  
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
      <div className='services'>
        <h1>My Services</h1>
        <p>I am a full stack DEVELOPER who loves building user friendly web site and web applications, and currently residing in Ontario, canada </p>
        <div className='table'>
        <table>
          <tr>
            <td><h1>Front-End</h1>
            <p>Building user interface and experience in using HTML, CSS, JavaScript, and frameworks like React.</p></td>
            <td><h1>Back-End Development:</h1>
            <p> Developing server-side logic, databases, and APIs using languages like Node.js</p></td>
            <td><h1>FullStack Developer:</h1>
            <p>Combining front-end and back-end development to deliver complete web applications.</p></td>
          </tr>
          <tr>
            <td><h1>Database Design:</h1>
            <p>Structuring databases to efficiently store, retrieve, and manage data</p></td>
            <td><h1>Database Administration: </h1>
            <p>Maintaining and optimizing database systems to ensure high performance and reliability.</p></td>
            <td><h1>Data Migration</h1>
            <p>Moving data between different systems or formats while ensuring data integrity and security.</p></td>
          </tr>
        </table>
        </div>
      </div>
      <div className='footer'>
      <p> &copy; {new Date().getFullYear()} Mercy Aikhionbare Osazee</p>
      </div>
      </div>
  )
}

export default Services
