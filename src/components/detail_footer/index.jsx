import './style.css';
import infoImg from '../../assets/images/detail_footer/info.png';
import locationImg from '../../assets/images/detail_footer/location.png';
import contactImg from '../../assets/images/detail_footer/contact.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebookImg from '../../assets/images/facebook.png';
import instagramImg from '../../assets/images/instagram.png';
import linkdinImg from '../../assets/images/linkedin.png';
import twitterImg from '../../assets/images/twitter.png';
import { contactUsLoadFeed } from '../../assets/feed/contact/data';

function DetailFooter() {
  return (
    <div className="detail-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2>Stackify Technology Pvt. Ltd.</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="item first-item">
              <div className="icon">
                <img src={infoImg} alt="info"/>
              </div>
              <p className='info-text'>We turn your tech dreams into reality and brilliant solutions for your digital world.</p>
              <h5>Follow Us</h5>
              <div className='contact-img-container'>
                <a href="#" target='_blank'><img className="contact-img" src={facebookImg} alt="facebook"/></a>
                <a href="#" target='_blank'><img className="contact-img" src={instagramImg} alt="instagram"/></a>
                <a href="#" target='_blank'><img className="contact-img" src={linkdinImg} alt="linkdin"/></a>
                <a href="#" target='_blank'><img className="contact-img" src={twitterImg} alt="twitter"/></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="item second-item">
              <div className="icon">
                <img src={locationImg} alt="location"/>
              </div>
              <iframe className="rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?loading=async&pb=!1m18!1m12!1m3!1d3669.4464122086767!2d76.0582323154823!3d22.96706578499774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397588d7ff086cc1%3A0x1cc06f0c8f173f5a!2sDewas%2C%20Madhya%20Pradesh%20455001%2C%20India!5e0!3m2!1sen!2sbd!4v1643944878426!5m2!1sen!2sbd
                            " allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="item">
              <div className="icon">
                <img src={contactImg} alt="contact"/>
              </div>
              <div className='contact-info mt-3'>
                <div className="row">                   
                   {
                    contactUsLoadFeed.map((feed)=>{
                      return(
                        <div className="col-12" key={feed.title}>
                          <div className='d-flex flex-row'>
                            <div className='contact-svg mx-2'><FontAwesomeIcon icon={feed.icon} style={{color: "#FFD43B", width: '15px', height: '20px'}} /></div>
                            <a href="Tel:+91 999999-99999"><p>{feed.text}</p></a>
                          </div>
                        </div>
                      )
                    })
                   }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailFooter;
