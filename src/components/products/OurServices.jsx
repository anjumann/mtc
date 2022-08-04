import React from "react";
import { NavLink } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import {ProductList} from './Product'

const OurServices = () => {
  


  return (
    <>
      {/* <!-- ====== Services Section Start --> */}
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Services
                </span>
                <h2
                  className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-red-600 mb-4">
                  What We Offer
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {ProductList.map((index, key) => {
              return (
                <>
                  <NavLink
                    to="/products"
                    className="w-full md:w-1/2 lg:w-1/4 px-4  "
                    key={key}
                  >
                    <Zoom>
                      <div
                        className=" p-10 md:px-7 xl:px-10 rounded-[20px]  bg-white hover:scale-105 hover:shadow-2xl transition ease-in-out delay-150 shadow-lg mb-8"
                      >
                        <div
                          className=" w-[90px] h-[90px] flex items-center justify-center rounded-2xl mb-8 bg-none border-2 border-red-600 p-3 text-gray-100">
                          {index.icons}
                        </div>
                        <h4 className="text-xl text-black font-bold mb-3 uppercase ">
                          {index.title}
                        </h4>
                        <p className="text-slate-700 font-semibold capitalize ">
                          {index.subtitle}
                        </p>
                      </div>
                    </Zoom>
                  </NavLink>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Services Section End --> */}
    </>
  );
};

export default OurServices;
