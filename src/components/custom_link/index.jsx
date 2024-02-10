import { Link } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

function CustomLink({ text, to, classes }) {
  return (
    <div className={`custom-link ${classes}`}>
      <Link to={to}>
        {text}
      </Link>
    </div>
  )
}

CustomLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

export default CustomLink;
