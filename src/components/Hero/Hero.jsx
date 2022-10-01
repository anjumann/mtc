/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { BsArrowRightCircle } from "react-icons/bs";
import hero from "../../assets/images/hero.jpg";
import { Link, NavLink } from "react-router-dom";
import { Slide, Fade, AttentionSeeker } from "react-awesome-reveal";

export default function Hero() {
  return (
    <>
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-[80vw] mx-auto">
          <h1 className="text-3xl font-bold text-gray-800  lg:text-4xl">
            Building Your Next App with our Awesome components
          </h1>
          <p className="mt-6 text-gray-500 text-2xl">
            We are a printing house that has been in the business of offering a
            host of offset printing, stamp, paper book binding, Stationary and
            other similar services. Our company being located in Narhan; we have
            over 21 years of experience in this sector.
          </p>
          <Link to="/products" className="" >
            <div className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-red-600 rounded-lg hover:bg-red-500 lg:mx-0 lg:w-auto focus:outline-none  ">
              Explore Our products
            </div>
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src={hero}
          />
        </div>
      </div>
    </>
  );
}
