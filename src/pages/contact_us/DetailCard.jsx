import './css/detail_card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

function DetailCard({ icon, title, text }) {
  return (
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div className="flip-card-back">
              <span className='text-contaner'>
                <h2>{title}</h2> 
                <p>{text}</p> 
              </span>
            </div>
        </div>
    </div>
  )
}

DetailCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default DetailCard