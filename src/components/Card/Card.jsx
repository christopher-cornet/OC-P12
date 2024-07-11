import "./Card.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Params : title, image, repository, website
function Card({ projectPath, title, repository, website }) {
    return (
        <section className="card">
			<img className="projectImg" src={projectPath} alt="" />
			<p className="card_title">{title}</p>
			<div className="card_icons">
				<a href={repository} target="_blank">
					<FontAwesomeIcon className="card_icon github" icon={faGithub} style={{color: "#c5c8d0"}} />
				</a>
				{website ? (
					<a href={website} target="_blank">
						<FontAwesomeIcon className="card_icon" icon={faArrowUpRightFromSquare} style={{ color: "#c5c8d0" }} />
					</a>
				) : null}
			</div>
			{/* Titre du projet */}
			{/* Image du projet */}
			{/* Icone avec un lien vers le repo du projet */}
			{/* Icone avec un lien vers le site en ligne si déployé */}
        </section>
    )
}

Card.propTypes = {
    projectPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
};

export default Card;