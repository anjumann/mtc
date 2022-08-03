import React from "react";
import SimpleProductList from "./SimpleProductList";
import {
  StampProductData,
  CardsProductData,
  TypingData,
  OffSetData,
  PhotoCopyData,
  NoteBookData,
  BookBindingData,
  IdCardData,
} from "./ProductConst";
import Footer from "../Footer/Footer";

const Product = () => {
  const ProductList = [
    {
      title: "stamp",
      subtitle: "all type of stamps",
      data: [StampProductData],
    },
    {
      title: "offset Printing",
      subtitle: "student/employee id cards",
      data: [OffSetData],
    },
    {
      title: "cards",
      subtitle: "all types of cards",
      data: [CardsProductData],
    },
    {
      title: "id cards",
      subtitle: "student/employee id cards",
      data: [IdCardData],
    },
    {
      title: "Typing ",
      subtitle: "hindi/english typing",
      data: [TypingData],
    },
    {
      title: "Photo copy",
      subtitle: "A3/A4 paper",
      data: [PhotoCopyData],
    },
    {
      title: "paper binding",
      subtitle: "binding",
      data: [BookBindingData],
    },
    {
      title: "notebook",
      subtitle: "all range of notebooks",
      data: [NoteBookData],
    },

  ];

 

  return (
    <div className="text-center mx-auto  bg-gray-200 ">
      {/* product */}
      {ProductList.map((index, key) => {
        return (
          <>
            <div key={key} className="pt-6">
              <h2 className=" text-indigo-700 font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 uppercase ">
                {index.title}
              </h2>
              <span className="font-semibold text-lg text-primary mb-2 block capitalize ">
                {index.subtitle}
              </span>
              <SimpleProductList products={index.data[0]} />
              <div className="w-[80vw] h-1 bg-white rounded-full mx-auto" />
            </div>
          </>
        );
      })}

      <div className="w-[95vw] mt-10 mx-auto">
        <Footer id="contact" />
      </div>
    </div>
  );
};

export default Product;
