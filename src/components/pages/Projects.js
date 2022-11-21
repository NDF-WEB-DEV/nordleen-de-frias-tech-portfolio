import React from 'react';
import './styles/Projects.css';
import { FaCalendarWeek, FaCloudSunRain, FaCode, FaGithub, FaLock, FaUser } from 'react-icons/fa';

const styles = {
  experienceStyles: {
    background: 'white',
  },
};

export default function Projects() {
  return (
    <section style={styles.projectsStyles} className="projects">
    <container>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <div className="p-3 bg-warning">
              <a href="https://ndf-web-dev.github.io/server-side-API-weather-dashboard/" target="_blank" rel="noreferrer"><FaCloudSunRain /> </a><br></br>
              <a href="https://github.com/NDF-WEB-DEV/server-side-API-weather-dashboard" target="_blank" rel="noreferrer"><FaGithub /> Weather Dasboard Repo</a><br></br>
              <img src="https://imagedelivery.net/pKy5JEEHGEGr-GbjbHpdmw/eb6f6277-b4e9-402c-13cd-7ff54e84b300/public" alt="Weather Dasboard Repo" />
            </div>
          </div>
          <div className="col">
            <div className="p-3 bg-light">
              <a href="https://ndf-web-dev.github.io/server-side-API-weather-dashboard/" target="_blank" rel="noreferrer"><FaCalendarWeek /> </a><br></br>
              <a href="https://github.com/NDF-WEB-DEV/server-side-API-weather-dashboard" target="_blank" rel="noreferrer"><FaGithub />Work Day Scheduler Repo</a><br></br>
              <img src="https://imagedelivery.net/pKy5JEEHGEGr-GbjbHpdmw/af6c75f3-2d87-4e8c-441a-b489811fab00/public" alt="Work Day Scheduler Repo" />
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-white">
              <a href="https://ndf-web-dev.github.io/server-side-API-weather-dashboard/" target="_blank" rel="noreferrer"><FaUser /> </a><br></br>
              <a href="https://github.com/NDF-WEB-DEV/server-side-API-weather-dashboard" target="_blank" rel="noreferrer"><FaGithub />Team Profile Generator Repo</a><br></br>
              <img src="https://imagedelivery.net/pKy5JEEHGEGr-GbjbHpdmw/55195c5b-4d03-412c-ae3c-20dbf0a72d00/public" alt="Team Profile Generator Repo" />
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-info">
              <a href="https://ndf-web-dev.github.io/password-generator/" target="_blank" rel="noreferrer"><FaLock /> </a><br></br>
              <a href="https://github.com/NDF-WEB-DEV/password-generator" target="_blank" rel="noreferrer"><FaGithub />Password Generator Repo</a><br></br>
              <img src="https://imagedelivery.net/pKy5JEEHGEGr-GbjbHpdmw/55195c5b-4d03-412c-ae3c-20dbf0a72d00/public" alt="Password Generator Repo" />
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-warning">
              <a href="https://ndf-web-dev.github.io/professional-portfolio/" target="_blank" rel="noreferrer"><FaCode /> </a><br></br>
              <a href="https://github.com/NDF-WEB-DEV/professional-portfolio" target="_blank" rel="noreferrer"><FaGithub />Portfolio Template Repo</a><br></br>
              <img src="https://imagedelivery.net/pKy5JEEHGEGr-GbjbHpdmw/48748c70-3b09-4ef8-0660-4472576bf500/public" alt="Portfolio Template Repo" />
            </div>
          </div>
        </div>
      </div>
    </container>
    </section>
    
  );
}
