import "./ContactCard.css";
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactCard({ logo, alt, name, followers }) {
    return (
        <div className="contact-card">
            <img src={logo} alt={alt} />
            <p>{name}</p>
            <p>{followers}</p>
        </div>
    )
}

ContactCard.propTypes = {
    logo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
};

export default ContactCard;