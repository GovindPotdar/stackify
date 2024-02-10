import PageHeading from "../../components/page_heading";
import Service from '../../components/service';
import DetailCardContainer from "../../components/detail_card_container";
import developerImg from '../../assets/images/service/developer.jpg';

function Services() {
  return (
    <>
      <PageHeading title='Services' />
      <DetailCardContainer
        bgGradientImage='radial-gradient(circle at center center, rgba(255,255,255, 0),rgb(22,22,22)),repeating-linear-gradient(290deg, rgb(22,22,22) 0px, rgb(22,22,22) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(200deg, rgb(30,30,30) 0px, rgb(30,30,30) 5px,transparent 5px, transparent 6px),linear-gradient(245deg, rgb(22,22,22),rgb(22,22,22))'
        image={developerImg}
        heading={(<h2>Experience Our <em>Exceptional</em></h2>)}
        title="IT Services"
        descriptions={[
          "Stackify provides top-notch IT solutions to businesses of all sizes. We offer a wide range of services including Web App Development, Mobile App Development, UI/UX Design, Architect DevOps and Quality Assurance. Our team of experts is dedicated to delivering innovative and customized solutions that meet your specific needs. Let us help you achieve your goals and stay ahead of the competition."
        ]}
      />
      <Service/>
    </>
  )
}

export default Services;
