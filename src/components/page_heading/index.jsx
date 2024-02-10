import headingBg from '../../assets/images/heading-bg.jpg';
import './style.css';
import { PropTypes } from 'prop-types';

function PageHeading({ title }) {
  return (
    <div className="page-heading normal-space" style={{backgroundImage: `url(${headingBg})`}}>
      <div className="container mx-auto title">
        <h2>{ title }</h2>
      </div>
    </div>
  )
}

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeading;
