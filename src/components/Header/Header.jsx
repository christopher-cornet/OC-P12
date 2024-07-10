import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
    return (
        <header>
            <div>
                <a href="https://christopher-cornet.github.io/OC-P12/">
                    <p>christopher-cornet.github.io</p>
                </a>
            </div>
            <div className="social-links">
                <a href="https://github.com/christopher-cornet" target="_blank">
                    <FontAwesomeIcon icon={faGithub} style={{color: "#c5c8d0"}} />
                </a>
                <a href="https://www.linkedin.com/in/christopher-cornet/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#c5c8d0"}} />
                </a>
            </div>
        </header>
    )
}

export default Header;