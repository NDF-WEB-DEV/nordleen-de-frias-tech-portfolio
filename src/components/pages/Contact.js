import React from 'react';
import './styles/Contact.css';
import { FaEnvelope, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const styles = {
  contactStyles: {
    background: '#2D4F75',
  },
};

export default function Contact() {
  return (
    <section style={styles.contactStyles} className="contact">
      <div className='container'>

      <div className="row">
          <div className='col-1'>
            <h1 style={{ transform: 'rotate(-90deg)' }} className='rotate'>Contact</h1>
          </div>
          <div className="col-3">
            <p><a href='mailto:nordleenDeFrias@gmail.com' target="_blank" rel="noreferrer"><FaEnvelope /></a></p>
          </div>

          <div className="col-3">
            <p><a href='https://www.linkedin.com/in/nordleendefrias/' target="_blank" rel="noreferrer"><FaLinkedin /></a></p>
          </div>

          <div className="col-3">
            <p><a href='https://twitter.com/nolydefrias' target="_blank" rel="noreferrer"><FaTwitterSquare /></a></p>
          </div>
        </div>
      </div>      
      </section>
  );
}
