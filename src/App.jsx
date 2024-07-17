import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import ContactCard from './components/ContactCard/ContactCard';
import projet11 from "../src/assets/projet11.jpg";
import projet10 from "../src/assets/projet10.jpg";
import projet8 from "../src/assets/projet8.jpg";
import projet6 from "../src/assets/projet6.jpg";
import projet5 from "../src/assets/projet5.jpg";
import projet4 from "../src/assets/projet4.jpg";
import profilePicture from "../src/assets/profilePicture.jpg";
import linkedin from "../src/assets/linkedinProfilePicture.png";
import github from "../src/assets/githubProfilePicture.png";
import gmail from "../src/assets/gmailProfilePicture.png";

function App() {
  return (
    <>
      <Header />
      <div className="top-part">
        <section>
          <h1 title="Christopher Cornet">Christopher Cornet</h1>
          <h2>Front-End Developer</h2>
          <p>I love creating and bringing things I have in mind to life with code.</p>
        </section>
        <section>
          <img src={profilePicture} alt="Photo de profil de Christopher Cornet" />
        </section>
      </div>
      <main>
        {/* Projects */}
        <GlowCapture>
          <Glow color='hsl(48, 96%, 53%)'>
            <div className="projects">
              <Card
                projectPath={projet11}
                title="Argent Bank"
                // description="I had to create the interface for a banking application with React.
                // I also had to implement an authentication system with an API and implement Redux to manage application state."
                repository="https://github.com/christopher-cornet/OC-P11"
                website=""
                alt="Projet 11 Argent Bank"
              />
              <Card
                projectPath={projet10}
                title="724 Events"
                repository="https://github.com/christopher-cornet/OC-P10"
                website=""
                alt="Projet 10 724 Events"
              />
              <Card
                projectPath={projet8}
                title="Kasa"
                repository="https://github.com/christopher-cornet/oc-kasa"
                website=""
                alt="Projet 8 Kasa"
              />
              <Card
                projectPath={projet6}
                title="Portfolio d'architecte"
                repository="https://github.com/christopher-cornet/oc-portfolio-architecte"
                website=""
                alt="Projet Portfolio d'architecte"
              />
              <Card
                projectPath={projet5}
                title="Print-it"
                repository="https://github.com/christopher-cornet/print-it"
                website="https://christopher-cornet.github.io/print-it/"
                alt="Projet Print It"
              />
              <Card
                projectPath={projet4}
                title="Oh My Food"
                repository="https://github.com/christopher-cornet/ohmyfood"
                website="https://christopher-cornet.github.io/ohmyfood/"
                alt="Projet Oh My Food"
              />
            </div>
          </Glow>
        </GlowCapture>
        {/* Skills */}
        <section className="skills">
          <p className="title">Skills</p>
          <h2>I love working on...</h2>
          <section className="technologies">
            <div>
              <FontAwesomeIcon className="logo" color="#facc15" icon={faReact} />
              <h3>React</h3>
              <p>I primarily leverage <span>React</span> to design dynamic and interactive user interfaces for my applications.</p>
            </div>
            <div>
              <FontAwesomeIcon className="logo" color="#facc15" icon={faPython} />
              <h3>Python</h3>
              <p>For backend development in both web and desktop environments, I harness the power of <span>Python</span>.</p>
            </div>
            <div>
              <FontAwesomeIcon className="logo" color="#facc15" icon={faPhp} />
              <h3>PHP</h3>
              <p>Additionally, I have utilized <span>PHP</span> and <span>mySQL</span> to build robust backends for my websites.</p>
            </div>
          </section>
        </section>
      </main>
      {/* Contact */}
      <footer>
          <p className="title">Contact me</p>
          <h2>I will be happy to work with you.</h2>
          <GlowCapture>
            <Glow color='hsl(48, 96%, 53%)'>
            <section className="container_contact-cards">
              <ContactCard logo={linkedin} alt="Linkedin" name="Christopher Cornet" description="+500 Connections" contactLink="https://www.linkedin.com/in/christopher-cornet/" />
              <ContactCard logo={github} alt="Github" name="@christopher-cornet" description="3 Followers" contactLink="https://github.com/christopher-cornet" />
              <ContactCard logo={gmail} alt="Gmail" name="tophercrnt@gmail.com" description="Email me for any inquiries." contactLink="mailto:tophercrnt@gmail.com" />
            </section>
            </Glow>
          </GlowCapture>
        </footer>
    </>
  )
}

export default App;