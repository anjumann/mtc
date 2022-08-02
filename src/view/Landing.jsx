import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/products/OurServices";
import Testimonials from "../components/testimonials/Testimonials";

const Landing = () => {
  return (
    <>
      <div className="bg-gray-200">
        <Hero id='hero' />
        <div className="w-[90vw] mx-auto">
          <OurServices id='services' />
          <Testimonials id='testimonials'  />
        </div>
        {/* <div className="w-[95vw] my-10 mx-auto ">
          <ContactUs />
        </div> */}
        <div className="w-[95vw] mt-10 mx-auto">
          <Footer id='contact' />
        </div>
      </div>
    </>
  );
};

export default Landing;
