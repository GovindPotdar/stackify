import CustomSection from '../../layouts/custom_section'
import DetailCard from './DetailCard'
import { contactUsLoadFeed } from '../../assets/feed/contact/data';

function ContactUsContainer() {
  return (
    <CustomSection
        bgGradientImage='radial-gradient(circle at center center, rgba(255,255,255, 0),rgb(22,22,22)),repeating-linear-gradient(290deg, rgb(22,22,22) 0px, rgb(22,22,22) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(200deg, rgb(30,30,30) 0px, rgb(30,30,30) 5px,transparent 5px, transparent 6px),linear-gradient(245deg, rgb(22,22,22),rgb(22,22,22))'
        heading={(<h2>Contact With <em>Us</em></h2>)}
    >   
    <div className="row">
        <div className="col-12">
            <p>
                At Stackify, customer satisfaction is our top priority. We believe in fostering open communication and building strong relationships with our customers. Your feedback fuels our continuous improvement efforts, and we welcome any suggestions or comments you may have. Our dedicated team is readily available to assist you with any inquiries or concerns you may have. Feel free to contact us via phone or email, and we&apos;ll be happy to provide prompt and personalized assistance. Thank you for choosing Stackify, and we eagerly anticipate the opportunity to serve you.
            </p>
        </div>
        <div className="col-12 mt-5">
          <div className="row justify-content-center">
            {
              contactUsLoadFeed.map((feed) => {
                return(
                  <div key={feed.title} className='d-flex justify-content-center col-xs-12 col-sm-6 col-md-4 col-lg-4 my-2'>
                    <DetailCard icon={feed.icon} title={feed.title} text={feed.text}/>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>        
    </CustomSection>
  )
}

export default ContactUsContainer