import React from 'react';
import './styles/Footer.css';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';

// const styles = {
//   headerStyle: {
//     background: 'red',
//   },
//   headingStyle: {
//     fontSize: '100px',
//   },
// };

function Footer({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a href="https://github.com/NDF-WEB-DEV" target="_blank" rel="noreferrer"><FaGithub /></a>
      </li>
      <li className="nav-item">
        <a href="https://www.linkedin.com/in/nordleendefrias/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </li>
      <li className="nav-item">
        <a href="https://twitter.com/nolydefrias" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </li>
      <li className="nav-item">
        <a href="https://stackoverflow.com/users/13831272/nordleen-de-frias" target="_blank" rel="noreferrer"><FaStackOverflow /></a>
      </li>
    </ul>
  );
}

export default Footer;