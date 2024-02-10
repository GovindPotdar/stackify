import CustomSection from '../../layouts/custom_section';
import CustomLink from '../custom_link';
import './style.css';
import PropTypes from 'prop-types';

function DetailCardContainer({
  bgGradientImage,
  image,
  heading,
  title,
  descriptions,
  links,
}) {

  return (
    <CustomSection
      heading={heading}
      bgGradientImage={bgGradientImage}
    >
      <div className='row detail-card-container'>
        <div className="col-lg-6">
          <div className="left-image ">
            <img src={image} alt="" style={{borderRadius: '20px'}}/>
            <div className='d-flex justify-content-center my-3'>
              {
                [...links].map((link) => {
                  return(<CustomLink key={link.text} text={link.text} to={link.to} classes='mx-1'/>)
                })
              }
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center dialog-box-info mt-1">
          <h2>{title}</h2>
          {
            [...descriptions].map((description) => {
              return(
                <p key={Math.random()}>{description}</p>
              )
            })
          }
        </div>
      </div>
    </CustomSection>
  )
}

DetailCardContainer.defaultProps = {
  links: []
}

DetailCardContainer.propTypes = {
  bgGradientImage: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(Object)
};

export default DetailCardContainer;
