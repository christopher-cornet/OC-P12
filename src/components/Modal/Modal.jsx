import "./Modal.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from 'react';

function Modal({ project, closeModal }) {
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

    return (
        <section className="modal" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </span>
                <h2>{project.title}</h2>
                <p className="modal-description">{project.description}</p>
                <div className="modal-icons">
                    <a href={project.repository} target="_blank">
                        <FontAwesomeIcon
                            className="modal_icon github"
                            icon={faGithub}
                            style={{ color: "#0c0a09" }}
                        />
                    </a>
                    {project.website && (
                        <a href={project.website} target="_blank">
                            <FontAwesomeIcon
                                className="modal_icon arrow"
                                icon={faArrowUpRightFromSquare}
                                style={{ color: "#0c0a09" }}
                            />
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}

Modal.propTypes = {
    project: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default Modal;