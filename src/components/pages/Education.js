import React from 'react';
import './styles/Education.css';
import { FaCheckDouble, FaCode, FaGraduationCap, FaLaptop, FaPen, FaSpellCheck } from 'react-icons/fa';

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
            <p><FaGraduationCap /> /<strong> Georgia Institute of Technology</strong> / <br></br>Georgia Tech Coding Boot Camp Certificate / <br></br>August 2022 - December 2022 /  
            </p>

            <p><FaGraduationCap /> /<strong> Florida International University</strong> / <br></br>Bachelor of Science Information Technology / <br></br>May 2017 / 
            </p>

            <p><FaGraduationCap /> /<strong> Florida International University</strong> / <br></br>Minor in Project Management / <br></br>May 2017 / 
            </p>

            <p><FaGraduationCap /> /<strong> Miami Dade College</strong> / <br></br>Associate in Science, Graphic Design Technology / <br></br>May 2010 / 
            </p>

            <p><FaGraduationCap /> /<strong> Miami City College</strong> / <br></br>Associate in Science, Business Administration / <br></br>
            May 2001 / 
            </p>

          </div>
          <div className="col-5">


            <p><FaPen /> /<strong> Related Courses</strong> / <br></br>
            Applied Computer Networking - CGS 4285 <br></br>
            Business Process Analysis - ISM 3153 <br></br>
            C++ Programming - COP 1334 <br></br>
            Component Based Development - COP 4814 <br></br>
            Computer Operating Systems - CGS 3767 <br></br>
            Computer and Network Security - CNT 4403 <br></br>
            DB Admin - CTS 4408 <br></br>
            DB Survey - COP 4722 <br></br>
            Data Communications - CNT 4513 <br></br>
            Discrete Math - MAD 2104 <br></br>
            Human Computer Interaction - CEN 3721 <br></br>
            IT Automation - CIS 4431 <br></br>
            Information Storage and Retrieval - COP 4703 <br></br>
            Intermediate Java - COP 3804 <br></br>
            Introduction Accounting for Managers and Investors - ACG 3024 <br></br>
            Linux/Unix Admin - CTS 4348 <br></br>
            Managerial Accounting - ACG 3301 <br></br>
            Math Concepts for IT - MAD 1100 <br></br>
            Network Administration - CNT 4504 <br></br>
            Programming in Java - COP 2250 <br></br>
            Project Management - ISM 4314C <br></br>
            Systems Analysis and Design - ISM 4113 <br></br>
            Technical Writing ENC3213 <br></br>
            Web Application Programming - COP4813 <br></br>
            Web Site Construction and Management - CGS 4854 <br></br>
            Windows Programming for IT - COP 4005 <br></br>
 
            </p>

          </div>
        </div>
        <hr></hr>


        <div className="row">
          <div className='col-1'>
            <h1 style={{ transform: 'rotate(-90deg)' }} className='rotate'>Technology</h1>
          </div>
          <div className="col-5">
            <h3><FaCode /> ABOUT CODING </h3>
            <p><strong>/ Georgia Tech Coding Boot Camp</strong><br></br>
            html, css, JavaScript, Git, GitHub, JQuery, Node.js, Handlebars, Moment.js, JSON, Ajax, Express.js, 
            Repositories, CRUD, NPM Packages, Heroku, CLI, Bash, Terminal, Insomnia, MongoDB, MySQL, 
            API Calls, MERN Stack, Webpack, Babel, PWA, React, Google Fonts, Adobe Fonts, CDN, ADA, Chrome Dev Tools, 
            Status Codes, Unit Testing, Bootstrap, DOM Manipulation, Event Handling, FlexBox, Forms, Wireframing, 
            Third Party APIs, literals, Server-side APIs, Fetch Calls, API Routes, Modularization, Inquirer, 
            Promises, OOP, MVC, Algorithms, Express.js, seeds, RESTful Routes, Async and Await, Password Hashing, 
            Hooks, Sequelize, Cookies, Middleware, Auth, Linear Search, Binary Search, Queues, Recursion, NoSQL, 
            Mongoose, Schemas, Props, Components, Apollo Server, TypeDefs, Resolvers, Mutations, Cache, JWTs, RegEx.
            </p>

            <p><strong>/ Florida International University <FaCode /> </strong><br></br>
            C#, C++, Java, XML, PHP, ASP.net, SQL Server, html, css, JavaScript, CLI, Bash, Terminal, MySQL, Unit Testing, 
            Event Handling, Forms, Wireframing, Modularization, OOP, MVC, Algorithms, Linear Search, Binary Search, Queues, 
            Recursion, Regular Expressions.
            </p>
          
          </div>
          <div className="col-5">
          <h3><FaLaptop /> : : TECHY STUFF..</h3>
            <p> <strong>/ Software / SaaS / Tech Providers</strong><br></br>
            Systems integration, Salesforce, Zendesk, Kayako, Shopify, Visual Studio, Adobe Creative Cloud, iMovie, After Effects, MS Office Suite and Teams,
            Alibaba, PayPal, Stripe, Payment Gateways, Merchant Accounts, QR Codes (GS1), Amazon Pro Seller, Amazon Pro Brands, C-Panel, Google Web Dev Tools, 
            GS1, Zapier, KeywordTool.io, Jungle Scout, Lumen, Animaker, Trello, OnePassword, Authorized.net, Cloudflare, Microsoft, Apple, BOX, Intuit, Konica Minolta, 
            COMCAST, AT&T, GoDaddy, HostPapa, Payeezy, Dropbox, Newegg, Adobe Stock, photography equipment, professional digital camera, and commercial product photography.
            </p>

            <p> <strong>/ Diagrams</strong><br></br>
            UML, workflows, Use Case, ERD, activity, Lucidchart, and Visio.
            </p>
            <p> <strong>/ Policies</strong><br></br>
            Accessibe.com, ADA, GDPR, PCI DSS, CCPA, and tailored policy writing to business needs.
            </p>

            <p> <strong>/ Hardware </strong><br></br>
            Routers, patch panels, pc/laptops configurations, servers, and cables.
            </p>
          </div>
        </div>
        <hr></hr>

        <div className="row">
          <div className='col-1'>
            <h1 style={{ transform: 'rotate(-90deg)' }} className='rotate'>Skills</h1>
          </div>
          <div className="col-5">
            <h3><FaCheckDouble /> Soft Skills </h3>
            <p>
            Ability to work and integrate with the team, negotiation with providers and vendors, 
            problem solving, RCAs, PM, ability to make decisions under pressure or without direction, 
            time management, multitasking, critical thinking, goal oriented, attention to details, 
            technical writing, organization, and documentation.
            </p>
          
          </div>
          <div className="col-5">
          <h3><FaSpellCheck /> Languages</h3>
            <p>Speak, read and write English and Spanish.
            </p>
          </div>
        </div>
        <hr></hr>











      </div>      
      </section>
  );
}
