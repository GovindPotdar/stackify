import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import Carousel from 'react-bootstrap/Carousel';

function BannerCarousel() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item interval={1500}>
        <img src={banner1} alt=""/>
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img src={banner2} alt=""/>
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;