import React from "react";
import ContactUs from "../components/contactus/ContactUs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/products/OurServices";
import Testimonials from "../components/testimonials/Testimonials";

const Landing = () => {
  return (
    <>
      <div className="bg-gray-200">
        <Hero />
        <div className="w-[90vw] mx-auto">
          <OurServices />
          <Testimonials />
        </div>
        {/* <div className="w-[95vw] my-10 mx-auto ">
          <ContactUs />
        </div> */}
        <div className="w-[95vw] mt-10 mx-auto" >
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landing;
