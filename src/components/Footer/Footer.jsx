import React from "react";
import {HiOutlineOfficeBuilding, HiOutlineMail} from 'react-icons/hi'
import {BsTelephoneForward, } from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'

const Footer = () => {
  const products = [
    {
      item: "Marraige Cards",
      link: "/",
    },
    {
      item: "Digital Stamp",
      link: "/",
    },
    {
      item: "Stamp (Mohar)",
      link: "/",
    },
    {
      item: "Hindi/English Typing",
      link: "/",
    },
  ];

  const contact = [
    {
      item: "Maa Tara Computer and Stationery",
      link: "https://www.google.com/maps/place/Maa+Tara+Computer+and+Stationery/@25.6926854,85.9985542,15z/data=!4m5!3m4!1s0x0:0xea6d10bd115a2f7d!8m2!3d25.6927102!4d85.9985612",
      icon: <BiMap className="inline mr-4 " />,
    },
    {
      item: "9934809968",
      link: "tel:9934809968",
      icon: <BsTelephoneForward className="inline mr-4 " />,
    },
    {
      item: "maataracomputer3@gmail.com",
      link: "mailto:maataracomputer3@gmail.com",
      icon: <HiOutlineMail className="inline mr-4 " />,
    },
    // {
    //   item: "Narhan",
    //   link: "/",
    //   icon: <HiOutlineOfficeBuilding className="inline mr-4 " />,
    // },
  ];

  return (
    <footer className="text-center rounded-lg lg:text-left bg-white text-gray-600">
      <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us </span>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <h6
              className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              Maa Tara Computers
            </h6>
            <p>
            Printing Press provides Digital Printing, Offset Printing, Stamping, Paper Binding and other similar services
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Products
            </h6>

            {products.map((index, key) => {
              return (
                <>
                  <p key={key} className="mb-4">
                    <a href={index.link} className="text-gray-600">
                      {index.item}
                    </a>
                  </p>
                </>
              );
            })}
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Pricing
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Settings
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Help
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            {contact.map((index, key) => {
              return (
                <>
                  <a href={index.link} key={key} className="flex items-center justify-center md:justify-start mb-4">
                    {index.icon}
                    {index.item}
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2022 Copyright :</span>
        <a
          className="text-gray-600 font-semibold"
          href="/"
        >
          {" "}
          Maa Tara Computers
        </a>
      </div>
    </footer>
  );
};

export default Footer;
