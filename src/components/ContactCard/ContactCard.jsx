import "./ContactCard.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ContactCard({ logo, alt, name, description, contactLink }) {
    return (
        <div className="contact-card">
            <img src={logo} alt={alt} />
            <section>
                <p className="contactName">{name}</p>
                <p className="contactDescription">{description}</p>
            </section>
            <a href={contactLink} aria-label="Redirection to social network profile" target="_blank">
                <FontAwesomeIcon className="card_icon" icon={faArrowUpRightFromSquare} style={{ color: "#c5c8d0" }} />
            </a>
        </div>
    )
}

ContactCard.propTypes = {
    logo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contactLink: PropTypes.string.isRequired
};

export default ContactCard;