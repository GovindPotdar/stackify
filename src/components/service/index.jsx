import './style.css';
import { loadFeed } from './feed/data';
import CustomSection from '../../layouts/custom_section';

function Service() {
  return (
    <CustomSection 
      heading={(<h2><em>Services</em> That We Provide.</h2>)}
      bgGradientImage='radial-gradient(circle at center center, rgba(255,255,255, 0),rgb(22,22,22)),repeating-linear-gradient(135deg, rgb(22,22,22) 0px, rgb(22,22,22) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(30,30,30) 0px, rgb(30,30,30) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(22,22,22),rgb(22,22,22))'
    >
      <div className="row d-flex justify-content-center service-items">
        {
          loadFeed.map((feed) => {
            return(
              <div key={feed.title} className="col-lg-4 col-md-6 currently-market-item">
                <div className="item">
                  <div className="right-content">
                    <h4>{feed.title}</h4>
                    <div className='service-img'>
                      <img src={feed.image} alt=""/>
                    </div>
                    <div className="line-dec"></div>
                    <div>
                      <span>
                        {feed.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </CustomSection>
  )
}

export default Service;
