import React from 'react';
import './styles/Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const styles = {
  educationStyles: {
    background: 'white',
  },
};

export default function Education() {
  return (
    <section style={styles.educationStyles} className="education">
      <div className='container'>

      <div className="row">
          <div className='col-1'>
            <h1 style={{ transform: 'rotate(-90deg)' }} className='rotate'>Education</h1>
          </div>
          <div className="col-5">
            <p><FaGraduationCap /> /<strong> Georgia Institute of Technology</strong> / <br></br>Georgia Tech Coding Boot Camp Certificate / <br></br>August 2022 - December 2022 /  </p>
            <p><FaGraduationCap /> /<strong> Florida International University</strong> / <br></br>Bachelor of Science Information Technology / <br></br>May 2017 / </p>
            <p><FaGraduationCap /> /<strong> Florida International University</strong> / <br></br>Minor Project Management / <br></br>May 2017 / </p>
          </div>
          <div className="col-5">
            <p><FaGraduationCap /> /<strong> Miami Dade College</strong> / <br></br>Associate in Science, Graphic Design Technology / <br></br>May 2010 / </p>
            <p><FaGraduationCap /> /<strong> Miami City College</strong> / <br></br>Associate in Science, Business Administration / <br></br>May 2001 / </p>
          </div>
        </div>
        <hr></hr>


        <div className="row">
          <div className='col-1'>
            <h1 style={{ transform: 'rotate(-90deg)' }} className='rotate'>Technology</h1>
          </div>
          <div className="col-5">
            <p><FaGraduationCap /> /<strong> Georgia Institute of Technology</strong> / <br></br>Georgia Tech Coding Boot Camp Certificate / <br></br>August 2022 - December 2022 /  </p>
            <p><FaGraduationCap /> /<strong> Florida International University</strong> / <br></br>Bachelor of Science Information Technology / <br></br>May 2017 / </p>
            <p><FaGraduationCap /> /<strong> Florida International University</strong> / <br></br>Minor Project Management / <br></br>May 2017 / </p>
          </div>
          <div className="col-5">
            <p><FaGraduationCap /> /<strong> Miami Dade College</strong> / <br></br>Associate in Science, Graphic Design Technology / <br></br>May 2010 / </p>
            <p><FaGraduationCap /> /<strong> Miami City College</strong> / <br></br>Associate in Science, Business Administration / <br></br>May 2001 / </p>
          </div>
        </div>
        <hr></hr>

        











      </div>      
      </section>
  );
}
