/* This Navbar requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const navigation = [
  {
    name: "Home",
    href: "/",
    imgUrl: "/images/icons/home.png",
  },
  {
    name: "Products",
    href: "products",
    imgUrl: "/images/icons/product.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-200 drop-shadow-lg sticky top-0 z-50 "
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mt-4">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-center "
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-center "
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className=" ">
                  <NavLink to="/">
                    <img
                      className="block h-10  w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </NavLink>
                </div>
                <div className="hidden  sm:block sm:ml-6">
                  <div className="flex  align-middle  space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="text-gray-900 text-center hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-base font-semibold cursor-pointer "
                      >
                        <img
                          src={item.imgUrl}
                          className="h-5 mr-2 inline"
                          alt=""
                        />
                        {item.name}
                      </NavLink>
                    ))}
                    <NavLink
                      to="https://api.whatsapp.com/send?phone=919934809968&text=Hi!"
                      className="text-gray-900 text-center hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-base font-semibold cursor-pointer "
                    >
                      <img
                        src="/images/icons/whatsapp.png"
                        className="h-5 mr-2 inline"
                        alt=""
                      />
                      Whatsapp
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3  space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="NavLink"
                  to={item.href}
                  className="text-gray-800 text-center  hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <img src={item.imgUrl} className="h-5 mr-2 inline" alt="" />
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                as="NavLink"
                to="https://api.whatsapp.com/send?phone=919934809968&text=Hi!"
                className="text-gray-800 text-center  hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                <img
                  src="/images/icons/whatsapp.png"
                  className="h-5 mr-2 inline"
                  alt=""
                />
                Whatapp
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
