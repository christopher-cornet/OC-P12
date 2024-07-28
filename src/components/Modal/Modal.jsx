import "./Modal.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from 'react';

function Modal({ project, closeModal, language }) {
    // Click outside the modal (background) close the modal
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
    };
    
    // Press escape key to close the modal
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            closeModal();
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

    const [colors, setColors] = useState({});

    // Get the colors of the technologies and stock the data in "colors" useState
    useEffect(() => {
        fetch('/OC-P12/technologyColors.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => setColors(data))
        .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
        <section className="modal" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} style={{color: "#fafaf9"}} />
                </span>
                <h2>{project.title}</h2>
                <p className="modal-description">
                    {language === 'en' ? 
                        project.descriptionEN
                        :
                        project.descriptionFR
                    }
                </p>
                <section className="modal-sub-part">
                    <div className="modal-icons">
                        <a href={project.repository} target="_blank">
                            <FontAwesomeIcon
                                className="modal_icon github"
                                icon={faGithub}
                                style={{ color: "#c5c8d0" }}
                            />
                        </a>
                        {project.website && (
                            <a href={project.website} target="_blank">
                                <FontAwesomeIcon
                                    className="modal_icon arrow"
                                    icon={faArrowUpRightFromSquare}
                                    style={{ color: "#c5c8d0" }}
                                />
                            </a>
                        )}
                    </div>
                    <div className="modal-technologies">
                        {project.technologies.map((technology) => {
                            {console.log(colors[technology.technology])}
                            return (
                                <p
                                    key={technology}
                                    style={{
                                        display: "inline",
                                        paddingLeft: "15px",
                                        color: colors[technology]
                                    }}
                                >
                                    {technology}
                                </p>
                            )
                        })}
                    </div>
                </section>
            </div>
        </section>
    )
}

Modal.propTypes = {
    project: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
};

export default Modal;