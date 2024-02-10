import CustomSection from '../../layouts/custom_section';
import Card from './Card';
import { loadFeed } from './feed/data';

function AboutUsCards() {
  return (
    <CustomSection
      heading={(<h2>the strategic direction of our <em>organization</em></h2>)}
      bgGradientImage='linear-gradient(413deg, rgba(107, 107, 107,0.06) 0%, rgba(107, 107, 107,0.06) 50%,rgba(202, 202, 202,0.06) 50%, rgba(202, 202, 202,0.06) 100%),linear-gradient(368deg, rgb(20,20,20),rgb(20,20,20))'
    >
      <div className="row justify-content-center">
        {
          loadFeed.map((feed) => {
            return(
              <div key={feed.title} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4 d-flex justify-content-center">
                <Card title={feed.title} description={feed.description} image={feed.image}/>
              </div>
            )
          })
        }
      </div>
      
    </CustomSection>
  )
}

export default AboutUsCards;
