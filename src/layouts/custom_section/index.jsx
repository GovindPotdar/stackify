import './style.css';
import PropTypes from 'prop-types';

function CustomSection({ heading, bgGradientImage, children }) {
  return (
    <div className="custom-section-container" style={{ backgroundImage: bgGradientImage }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              { heading }
            </div>
          </div>
          <div className="col-12">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}

CustomSection.propTypes = {
  heading: PropTypes.object.isRequired,
  bgGradientImage: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default CustomSection;
