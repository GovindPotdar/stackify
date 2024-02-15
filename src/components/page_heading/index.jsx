import './style.css';
import { PropTypes } from 'prop-types';

function PageHeading({ title }) {
  return (
    <div className="page-heading normal-space">
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
