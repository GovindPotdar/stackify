import bannerBg from '../../assets/images/banner-bg.jpg';
import './style.css';
import BannerCarousel from './BannerCarousel';
import CustomLink from '../custom_link';

function Banner() {

  return (
    <div className="main-banner" style={{backgroundImage: `url(${bannerBg})`}}>
      <div className="container">
        <div className="row banner-content-direction">
          <div className="col-lg-6 col-md-6 align-self-center">
            <div className="header-text">
              
              <h6>Liberty NFT Market</h6>
              
              <h2>Create, Sell &amp; Collect Top NFT’s.</h2>
              
              <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMos free css templates.</p>

              <div className="buttons">
                <CustomLink
                  text="About Us"
                  to='about-us'
                />
                <CustomLink
                  text="Contact Us"
                  to='contact-us'
                  classes="mx-2"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-1">
            <BannerCarousel/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
