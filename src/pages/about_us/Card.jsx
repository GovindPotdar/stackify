import './css/card.css';
import PropTypes from 'prop-types';

function Card({title, description, image}) {
  return (
    <div className="about-us_card">
      <a aria-labelledby="person3"></a>
      <img src={image} alt=''/>
      <div className="about-us_card__overlay">
        <h4 id="person3" aria-hidden="true">{title}</h4>
        <div className="about-us_card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card;
