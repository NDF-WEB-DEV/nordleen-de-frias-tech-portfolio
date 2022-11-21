import React from 'react';
import './styles/About.css';

const styles = {
  aboutStyles: {
    background: 'white',
  },
};

export default function About() {
  return (
    <section style={styles.aboutStyles} className="about">
    <div className="row">
        <div className="col-md-4">
          {/* <div style={{ margin: '50px' }}></div> */}
          <img src="https://imagedelivery.net/pKy5JEEHGEGr-GbjbHpdmw/61bfe398-7cb9-46b9-a00e-86c7d8172700/public" alt="nordleen de frias" />
        </div>

        <div className="col-md-6">
        <h1>In the Beginning</h1>
        <hr></hr>
          <p>Hi! my name is Nordleen and I am a Full-Stack Developer, a Graphic Designer, and a Product Photographer.
            I slowly transitioned from the advertising world into <strong>TECH-UNIVERSE</strong> as I observed the rapid evolution of both merge into one.</p>
          <h1>Then..</h1>
          <hr></hr>
            <p> 
              In 2011 I decided to take the plunge into technology where I received a bachelor in Information Technology from Florida International University in 2017. 
              I concentrated on the software track where I got my hands on C++, Java, C#, and .NET</p>
            <h1>And Now..</h1>
            <hr></hr>
            <p>I build websites, connect SaaS technology, and provide business solutions.</p>
        </div>
    </div>
    </section>
  );
}
