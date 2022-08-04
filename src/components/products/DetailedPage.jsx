import React from "react";
import { useParams } from "react-router-dom";
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

const DetailedPage = () => {
  const { item } = useParams();
  const { id } = useParams();

  const AllInOneArr = StampProductData.concat(
    CardsProductData,
    TypingData,
    OffSetData,
    PhotoCopyData,
    NoteBookData,
    BookBindingData,
    IdCardData
  );

  const itemDetails = AllInOneArr.filter((data) => {
    return data.url === "/products/" + item + "/" + id;
  });

  console.log(itemDetails);

  return (
    <>
      {/* <!-- component --> */}
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="product image"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={itemDetails[0].imageSrc}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Product Details
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {itemDetails[0].name}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{itemDetails[0].desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5" />

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {itemDetails[0].price}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  <a href="https://api.whatsapp.com/send?phone=919934809968&text=Hi!">
                    Button
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailedPage;
