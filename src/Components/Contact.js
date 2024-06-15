
import React,  { useState } from 'react';
import './Home.css'
import './Contact.css'
import { Link } from 'react-router-dom';
import computer from '../Assets/computerset.jpg';
import email from '../Assets/email.png'
import iphone from '../Assets/iphone.png'

function  Contact() {
  const emailAddress = 'mercychris070@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your backend or do any other necessary action
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
        <div className='contact'>
          <h1>My Contact</h1>
          <p>I am a full stack DEVELOPER who loves building user friendly website and web applications, and currently residing in Ontario, canada </p>
        </div>
        <div className='contacts'>
          <div className='contact1'>
           
            <img src={email} alt='mail' style={{ width: '100px', height: '100px'}}></img>
            <h1>Email me @</h1>
            <a href={`mailto:${emailAddress}`}>mercychris070@gmail.com</a>
            
          </div>
          <div className='contcat1'><img src={iphone} alt='phone' style={{ width: '100px', height: '100px'}}></img>
          <h1>Call me on</h1>
            <p>+1 2897753074</p>
         </div>
        </div>
      </div>
      <div className='form1'>    
          <form onSubmit={handleSubmit}>
           <div className='form2'>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Your Name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          
            <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
        </div>
       
        <div>
        
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            placeholder='Subject'
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder='Message'
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
        </div>
      </form>
      </div>
      <div className='footer'>
      <p> &copy; {new Date().getFullYear()} Mercy Aikhionbare Osazee</p>
      </div>
    </div>
 
);
}
      export default Contact