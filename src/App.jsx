// import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
// import ContactCard from './components/ContactCard/ContactCard';
// import reactsvg from "../src/assets/react.svg"

function App() {
  return (
    <>
      <Header />
      <div className="top-part">
        <h1 title="Christopher Cornet">Christopher Cornet</h1>
        <h2>Front-End Developer</h2>
        <p>I love creating and bringing things I have in mind to life with code.</p>
        {/* 
          Drapeau de la langue actuelle du site (pouvoir la changer) +
          Afficher la langue en fonction du navigateur de l'utilisateur
        */}
      </div>
      {/* Partie Projets */}
      <main>
        <GlowCapture>
          <Glow color='hsl(53, 100%, 71%)'>
            <div className="projects">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </Glow>
        </GlowCapture>
        {/* Partie Skills */}
        <section className="skills">
          <p className="title">Skills</p>
          <h2>I love working on...</h2>
          <section className="technologies">
            <div>
              <FontAwesomeIcon className="logo" color="#aab1d3" icon={faReact} />
              <h3>React</h3>
              <p>I primarily leverage <span>React</span> to design dynamic and interactive user interfaces for my applications.</p>
            </div>
            <div>
              <FontAwesomeIcon className="logo" color="#aab1d3" icon={faPython} />
              <h3>Python</h3>
              <p>For backend development in both web and desktop environments, I harness the power of <span>Python</span>.</p>
            </div>
            <div>
              <FontAwesomeIcon className="logo" color="#aab1d3" icon={faPhp} />
              <h3>PHP</h3>
              <p>Additionally, I have utilized <span>PHP</span> and <span>mySQL</span> to build robust backends for my websites.</p>
            </div>
          </section>
        </section>
      </main>
      {/* Partie Contact */}
      <footer>
          <p className="title">Contact me</p>
          <h2>I will be happy to work with you.</h2>
          <section className="container_contact-cards">
            {/* <ContactCard logo={reactsvg} alt="" name="" followers="" />
            <ContactCard logo={reactsvg} alt="" name="" followers="" /> */}
            {/* LinkedIn */}
            {/* Gmail */}
          </section>
        </footer>
    </>
  )
}

export default App;