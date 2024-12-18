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

  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.startsWith('fr')) {
      setLanguage('fr');
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <Header language={language} onLanguageChange={handleLanguageChange} />

      <div className="top-part">
        <section>
          <h1>Christopher Cornet</h1>
          <h2>
            {language === 'en' ?
              "Full Stack Developer"
              :
              "Développeur Full Stack"
            }
          </h2>
          <p>
            {language === 'en' ?
              "I love creating and bringing things I have in mind to life with code."
              :
              "J'aime créer et donner vie aux choses que j'ai en tête avec du code."
            }
          </p>
          <p>
            {language === 'en' ?
              "I am the developer you need for the projects you want to carry out."
              :
              "Je suis le développeur dont vous avez besoin pour les projets que vous souhaitez réaliser."
            }
          </p>
        </section>
        <section>
          <img src={profilePicture} alt="Photo de profil de Christopher Cornet" />
        </section>
      </div>

      <main>
        {/* Projects */}
        <div className="projects">
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                image={project.projectPath}
                title={project.title}
                repository={project.repository}
                website={project.website}
                alt={project.alt}
                onImageClick={() => handleImageClick(project)}
              />
            )
            })
          }
          {isModalOpen && (
            <Modal project={modalProject} closeModal={closeModal} language={language} />
          )}
        </div>

        {/* Skills */}
        <section className="skills">
          <p className="title">
            {language === 'en' ? 
              "Skills"
              :
              "Compétences"
            }
          </p>
          <h2>
            {language === 'en' ?
              "I love working on..."
              :
              "J'adore travailler sur..."
            }
          </h2>
          <section className="technologies">
            <div>
              <a href="https://react.dev/" aria-label="React website" target="_blank">
                <FontAwesomeIcon className="logo react" icon={faReact} />
              </a>
              <h3>React</h3>
              <p>
                {language === 'en' ? (
                  <>
                    I primarily leverage <span>React</span> to design dynamic and
                    interactive user interfaces for my applications.
                  </>
                  ) : (
                  <>
                    J&apos;utilise principalement <span>React</span> pour concevoir des
                    interfaces utilisateur interactives pour mes applications.
                  </>
                )}
              </p>
            </div>
            <div>
              <a href="https://www.python.org/" aria-label="Python website" target="_blank">
                <FontAwesomeIcon className="logo python" icon={faPython} />
              </a>
              <h3>Python</h3>
              <p>
                {language === 'en' ? (
                  <>
                    For backend development in both web and desktop environments,
                    I harness the power of <span>Python</span>.
                  </>
                  ) : (
                  <>
                    Pour le développement backend dans les environnements web et de bureau,
                    je fais appel à la puissance de <span>Python</span>.
                  </>
                )}
              </p>
            </div>
            <div>
              <a href="https://www.php.net/" aria-label="PHP website" target="_blank">
                <FontAwesomeIcon className="logo php" icon={faPhp} />
              </a>
              <h3>PHP</h3>
              <p>
                {language === 'en' ? (
                  <>
                    Additionally, I have utilized <span>PHP</span> and <span>mySQL</span> to
                    build robust backends for my websites.
                  </>
                  ) : (
                  <>
                    De plus, j&apos;ai utilisé <span>PHP</span> et <span>mySQL</span> pour
                    créer des backends robustes pour mes sites web.
                  </>
                )}
              </p>
            </div>
          </section>
        </section>

        {/* Education */}
        <section className="education">
          <p className="title">
            {language === 'en' ? 
              "Education"
              :
              "Formation"
            }
          </p>
          <h2>
            {language === 'en' ? 
              "My apprenticeship"
              :
              "Mon apprentissage"
            }
          </h2>
          <section className="schools">
            <div>
              <a href="https://openclassrooms.com/" target="_blank">
                <img src={openClassrooms} alt="OpenClassrooms" />
              </a>
              <h3>OpenClassrooms</h3>
              <p>
                {language === 'en' ? (
                  <>
                    I completed a training program in <span>Front-End</span> development
                    with JavaScript, React, and Redux. During this course, I learned 
                    how to create user interfaces that communicate with the back-end and 
                    manage web projects.
                  </>
                  ) : (
                  <>
                    J&apos;ai suivi une formation en développement <span>Front-End</span> avec
                    JavaScript, React et Redux. Durant cette formation, j&apos;ai appris 
                    à créer des interfaces utilisateur qui communiquent avec le back-end et 
                    la gestion de projets web.
                  </>
                )}
              </p>
            </div>
            <div>
              <a href="https://www.theodinproject.com/" target="_blank">
                <img src={odinProject} alt="The Odin Project" />
              </a>
              <h3>The Odin Project</h3>
              <p>
                {language === 'en' ? (
                  <>
                    I also took courses from The Odin Project to deepen my knowledge
                    of JavaScript and React. I plan to learn <span>Express.js</span> to
                    develop <span>Full Stack</span> applications with JavaScript.
                  </>
                  ) : (
                  <>
                    Je me suis également formé avec The Odin Project pour approfondir
                    mes connaissances de JavaScript et React. J&apos;ai l&apos;intention
                    d&apos;apprendre <span>Express.js</span> pour développer des
                    applications <span>Full Stack</span> avec JavaScript.
                  </>
                )}
              </p>
            </div>
          </section>
        </section>
      </main>

      {/* Contact */}
      <footer>
          <p className="title">
            {language === 'en' ?
              "Contact me"
              :
              "Contactez moi"
            }
          </p>
          <h2>
            {language === 'en' ?
              "I will be happy to work with you."
              :
              "Je serai heureux de travailler avec vous."
            }
          </h2>
          <GlowCapture>
            <Glow color='hsl(48, 96%, 53%)'>
            <section className="container_contact-cards">
              <ContactCard 
                logo={linkedin}
                alt="Linkedin"
                name="Christopher Cornet"
                description={
                  language === 'en' ? "+500 connections" : "+500 relations"
                }
                contactLink="https://www.linkedin.com/in/christopher-cornet/"
              />
              <ContactCard 
                logo={github}
                alt="Github"
                name="@christopher-cornet"
                description={
                  language === 'en' ? "6 followers" : "6 abonnés"
                }
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
