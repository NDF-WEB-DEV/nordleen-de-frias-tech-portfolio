import React from 'react';
import './styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div  className="background-image">
    <ul className="nav">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#experience"
          onClick={() => handlePageChange('Experience')}
          className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}
        >
          Experience
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#education"
          onClick={() => handlePageChange('Education')}
          className={currentPage === 'Education' ? 'nav-link active' : 'nav-link'}
        >
          Education
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#technotes"
          onClick={() => handlePageChange('Technotes')}
          className={currentPage === 'Technotes' ? 'nav-link active' : 'nav-link'}
        >
          Technotes
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>

  );
}

export default Navbar;