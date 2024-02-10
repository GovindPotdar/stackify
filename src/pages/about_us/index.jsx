import PageHeading from "../../components/page_heading";
import DetailCardContainer from "../../components/detail_card_container";
import aboutUsImg from '../../assets/images/about-us.jpg';
import AboutUsCards from "./AboutUsCards";

function AboutUs() {
  return (
    <>
      <PageHeading title='About Us' />
      <DetailCardContainer
        bgGradientImage='repeating-linear-gradient(0deg, rgb(6, 6, 6) 0px, rgb(6, 6, 6) 1px,transparent 1px, transparent 21px),repeating-linear-gradient(90deg, rgb(6, 6, 6) 0px, rgb(6, 6, 6) 1px,transparent 1px, transparent 21px),linear-gradient(90deg, hsl(144,0%,9%),hsl(144,0%,9%))'
        image={aboutUsImg}
        heading={(<h2>It&apos;s <em>Stackify</em>.org</h2>)}
        title="Elevating IT solutions with innovation, reliability, and excellence"
        descriptions={[
          "Welcome to Stackify, a leading provider of IT solutions for businesses of all sizes. Our team of experienced professionals is dedicated to helping our clients achieve their goals through technology, innovation, and exceptional service.",
          "Stackify is a dynamic IT company that specializes in delivering innovative solutions to transform your business. With a team of highly skilled and experienced professionals, we combine technical expertise with a passion for creativity to offer customized solutions that exceed your expectations. Our services include web development, mobile app development, product design, architect devOps and quality assurance. We strive to build long-term relationships with our clients by delivering reliable, high-quality services that enable them to achieve their goals. At Stackify, we're committed to helping your business grow and thrive in the digital age."
        ]}
        links={[
          {
            text: "Services",
            to: "/services",
          },
          {
            text: "Contact Us",
            to: "/contact-us",
          }
        ]}
      />
      <AboutUsCards/>
    </>
  )
}

export default AboutUs;
