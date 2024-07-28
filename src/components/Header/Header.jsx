import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PropTypes from 'prop-types';
import ReactCountryFlag from "react-country-flag"

function Header({ language, onLanguageChange }) {
    const handleFlagClick = () => {
        const newLanguage = language === 'en' ? 'fr' : 'en';
        onLanguageChange(newLanguage);
    };
    
    return (
        <header>
            <div>
                <a
                    href="https://christopher-cornet.github.io/OC-P12/"
                    aria-label="Redirect to the portfolio"
                >
                    <p>christopher-cornet.github.io</p>
                </a>
            </div>
            <div className="social-links">
                <a
                    href="https://github.com/christopher-cornet"
                    aria-label="Redirect to the Github profile"
                    target="_blank">
                    <FontAwesomeIcon icon={faGithub} style={{color: "#0c0a09"}} />
                </a>
                <a
                    href="https://www.linkedin.com/in/christopher-cornet/"
                    aria-label="Redirect to the LinkedIn profile"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#0c0a09"}} />
                </a>

                {
                    language === 'en' ? 
                    <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            height: "30px",
                            width: "40px",
                            borderRadius: "6px",
                            cursor: "pointer"
                        }}
                        onClick={handleFlagClick}
                        alt="United States Flag"
                    />
                    :
                    <ReactCountryFlag
                        countryCode="FR"
                        svg
                        style={{
                            height: "30px",
                            width: "40px",
                            borderRadius: "6px",
                            cursor: "pointer"
                        }}
                        onClick={handleFlagClick}
                        alt="Drapeau de la France"
                    />
                }
            </div>
        </header>
    )
}

Header.propTypes = {
    language: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
};

export default Header;