import React from "react";
import SimpleProductList from "./SimpleProductList";
import { StampProductData, CardsProductData } from "./ProductConst";
import Footer from '../Footer/Footer'

const Product = () => {
  return (
    <div className="text-center mx-auto  bg-gray-200 ">
      {/* Stamp */}
      <div className="pt-6">
        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
          STAMP
        </h2>
        <span className="font-semibold text-lg text-primary mb-2 block">
          All type of Stamp
        </span>
        <SimpleProductList products={StampProductData} />
        <div className="w-[80vw] h-1 bg-white rounded-full mx-auto" />
      </div>
      {/* Card  */}
      <div className="pt-6">
        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
          Cards
        </h2>
        <span className="font-semibold text-lg text-primary mb-2 block">
          All type of Stamp
        </span>
        <SimpleProductList products={StampProductData} />
        <div className="w-[80vw] h-1 bg-white rounded-full mx-auto" />
      </div>
      {/* Other */}
      <div className="pt-6">
        <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
          STAMP
        </h2>
        <span className="font-semibold text-lg text-primary mb-2 block">
          All type of Stamp
        </span>
        <SimpleProductList products={CardsProductData} />
        <div className="w-[80vw] h-1 bg-white rounded-full mx-auto" />
      </div>
      <div className="w-[95vw] mt-10 mx-auto">
        <Footer id="contact" />
      </div>
    </div>
  );
};

export default Product;
