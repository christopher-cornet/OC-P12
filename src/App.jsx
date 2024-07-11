// import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
// import ContactCard from './components/ContactCard/ContactCard';
// import reactsvg from "../src/assets/react.svg"
import projet11 from "../src/assets/projet11.png";
import projet10 from "../src/assets/projet10.png";
import projet8 from "../src/assets/projet8.png";
import projet6 from "../src/assets/projet6.png";
import projet5 from "../src/assets/projet5.png";
import projet4 from "../src/assets/projet4.png";

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
          <Glow color='hsl(225, 71%, 73%)'>
            <div className="projects">
              <Card projectPath={projet11} title="Argent Bank" repository="https://github.com/christopher-cornet/OC-P11" website="" />
              <Card projectPath={projet10} title="724 Events" repository="https://github.com/christopher-cornet/OC-P10" website="" />
              <Card projectPath={projet8} title="Kasa" repository="https://github.com/christopher-cornet/oc-kasa" website="" />
              <Card projectPath={projet6} title="Portfolio d'architecte" repository="https://github.com/christopher-cornet/oc-portfolio-architecte" website="" />
              <Card projectPath={projet5} title="Print-it" repository="https://github.com/christopher-cornet/print-it" website="https://christopher-cornet.github.io/print-it/" />
              <Card projectPath={projet4} title="Oh My Food" repository="https://github.com/christopher-cornet/ohmyfood" website="https://christopher-cornet.github.io/ohmyfood/" />
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