import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import ContactCard from './components/ContactCard/ContactCard';
import profilePicture from "../src/assets/profilePicture.jpg";
import linkedin from "../src/assets/linkedinProfilePicture.png";
import github from "../src/assets/githubProfilePicture.png";
import openClassrooms from "./assets/openClassrooms.png";
import odinProject from "./assets/odinProject.png";
import { useEffect, useState } from 'react';
import Modal from "./components/Modal/Modal";

function App() {
  const [projects, setProjects] = useState([]);

  // Get the projects and stock the data in "projects" useState
  useEffect(() => {
    fetch('/OC-P12/projects.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState({});

  // Disable page scrolling for user if modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleImageClick = (project) => {
    setModalProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProject({});
  };

  return (
    <>
      <Header />

      <div className="top-part">
        <section>
          <h1>Christopher Cornet</h1>
          <h2>Full Stack Developer</h2>
          <p>I love creating and bringing things I have in mind to life with code.</p>
        </section>
        <section>
          <img src={profilePicture} alt="Photo de profil de Christopher Cornet" />
        </section>
      </div>

      <main>
        {/* Projects */}
        <div className="projects">
          {projects.map((project) => {
            return <Card
                key={project.id}
                image={project.projectPath}
                title={project.title}
                repository={project.repository}
                website={project.website}
                alt={project.alt}
                onImageClick={() => handleImageClick(project)}
              />
            })}
            {isModalOpen && (
              <Modal project={modalProject} closeModal={closeModal} />
            )}
        </div>

        {/* Skills */}
        <section className="skills">
          <p className="title">Skills</p>
          <h2>I love working on...</h2>
          <section className="technologies">
            <div>
              <a href="https://react.dev/" aria-label="React website" target="_blank">
                <FontAwesomeIcon className="logo" color="#9fd9fa" icon={faReact} />
              </a>
              <h3>React</h3>
              <p>
                I primarily leverage <span>React</span> to design dynamic and
                interactive user interfaces for my applications.
              </p>
            </div>
            <div>
              <a href="https://www.python.org/" aria-label="Python website" target="_blank">
                <FontAwesomeIcon className="logo" color="#facc15" icon={faPython} />
              </a>
              <h3>Python</h3>
              <p>
                For backend development in both web and desktop environments,
                I harness the power of <span>Python</span>.
              </p>
            </div>
            <div>
              <a href="https://www.php.net/" aria-label="PHP website" target="_blank">
                <FontAwesomeIcon className="logo" color="#8473c4" icon={faPhp} />
              </a>
              <h3>PHP</h3>
              <p>
                Additionally, I have utilized <span>PHP</span> and <span>mySQL</span> to
                build robust backends for my websites.
              </p>
            </div>
          </section>
        </section>

        {/* Education */}
        <section className="education">
          <p className="title">Education</p>
          <h2>My apprenticeship</h2>
          <section className="schools">
            <div>
              <a href="https://openclassrooms.com/" target="_blank">
                <img src={openClassrooms} alt="OpenClassrooms" />
              </a>
              <h3>OpenClassrooms</h3>
              <p>
                I completed a training program in <span>Front-End</span> development
                with JavaScript, React, and Redux. During this course, I learned 
                how to create user interfaces that communicate with the back-end and 
                manage web projects.
              </p>
            </div>
            <div>
              <a href="https://www.theodinproject.com/" target="_blank">
                <img src={odinProject} alt="The Odin Project" />
              </a>
              <h3>The Odin Project</h3>
              <p>
                I also took courses from The Odin Project to deepen my knowledge
                of JavaScript and React. I plan to learn <span>Express.js</span> to
                develop <span>Full Stack</span> applications with JavaScript.
              </p>
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
              <ContactCard 
                logo={linkedin}
                alt="Linkedin"
                name="Christopher Cornet"
                description="+500 Connections"
                contactLink="https://www.linkedin.com/in/christopher-cornet/"
              />
              <ContactCard 
                logo={github}
                alt="Github"
                name="@christopher-cornet"
                description="3 Followers"
                contactLink="https://github.com/christopher-cornet"
              />
            </section>
            </Glow>
          </GlowCapture>
        </footer>
    </>
  )
}

export default App;