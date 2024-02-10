import { lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const Home = lazy(()=>(import("../pages/home")))
const AboutUs = lazy(()=>(import("../pages/about_us")))
const Services = lazy(()=>(import("../pages/services")))
const ContactUs = lazy(()=>(import("../pages/contact_us")))

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Routes>
  )
}

export default AppRoutes;
