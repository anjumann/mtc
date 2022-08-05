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
  OnlineForm,
} from "./ProductConst";
import Footer from "../Footer/Footer";

export const ProductList = [
  {
    title: "stamp",
    subtitle: "all type of stamps",
    icons: (
      <img src="./images/icons/rubber-stamp.png" className="h-full" alt="" />
    ),
    data: [StampProductData],
  },
  {
    title: "offset Printing",
    subtitle: "student/employee id cards",
    icons: <img src="./images/icons/offset.png" className="h-full" alt="" />,
    data: [OffSetData],
  },
  {
    title: "cards",
    subtitle: "all types of cards",
    icons: (
      <img
        src="./images/icons/wedding-invitation.png"
        className="h-full"
        alt=""
      />
    ),
    data: [CardsProductData],
  },
  {
    title: "paper binding",
    subtitle: "binding",
    icons: <img src="./images/icons/binding.png" className="h-full" alt="" />,
    data: [BookBindingData],
  },
  {
    title: "notebook",
    subtitle: "all range of notebooks",
    icons: <img src="./images/icons/notebook.png" className="h-full" alt="" />,
    data: [NoteBookData],
  },
  {
    title: "id cards",
    subtitle: "student/employee id cards",
    icons: <img src="./images/icons/idcard.png" className="h-full" alt="" />,
    data: [IdCardData],
  },
  {
    title: "online form fillup",
    subtitle: "online form fillup",
    icons: <img src="./images/icons/notebook.png" className="h-full" alt="" />,
    data: [OnlineForm],
  },
  {
    title: "Typing ",
    subtitle: "hindi/english typing",
    icons: <img src="./images/icons/typing.png" className="h-full" alt="" />,
    data: [TypingData],
  },
  {
    title: "Photo copy",
    subtitle: "A3/A4 paper",
    icons: <img src="./images/icons/xerox.png" className="h-full" alt="" />,
    data: [PhotoCopyData],
  },

];

const Product = () => {
  return (
    <div className="text-center mx-auto  bg-gray-200 ">
      {/* product */}
      {ProductList.map((index, key) => {
        return (
          <>
            <div key={key} className="pt-6">
              <h2 className=" text-red-700 font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 uppercase ">
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
