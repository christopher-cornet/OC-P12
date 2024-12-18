import "./Card.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Card({ image, title, repository, website, alt, onImageClick }) {
	// No drag and drop of the images
	const handleDragStart = (event) => {
		event.preventDefault();
	};
	
    return (
        <section className="card">
			<img
				className="projectImg"
				src={image}
				alt={alt}
				onClick={onImageClick}
				onDragStart={handleDragStart}
			/>
			<p className="card_title">{title}</p>
			<div className="card_icons">
				<a
					href={repository}
					aria-label="Redirection to the repository of the project"
					target="_blank"
				>
					<FontAwesomeIcon
						className="card_icon github"
						icon={faGithub}
					/>
				</a>
				{website && (
					<a
						href={website}
						aria-label="Redirection to the live website of the project"
						target="_blank"
					>
						<FontAwesomeIcon
							className="card_icon arrow"
							icon={faArrowUpRightFromSquare}
						/>
					</a>
				)}
			</div>
        </section>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
	onImageClick: PropTypes.func.isRequired
};

export default Card;