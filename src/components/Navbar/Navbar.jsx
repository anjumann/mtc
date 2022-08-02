/* This Navbar requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const navigation = [
  {
    name: "Home",
    href: "/",
    current: true,
  },
  {
    name: "Products",
    href: "contact",
    current: false,
  },
  {
    name: "Contact Us",
    href: "#",
    current: false,
  },
  // {
  //   name: "Calendar",
  //   href: "#",
  //   current: false,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mt-4">
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
                  <NavLink 
                  to='/'
                  >

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
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="text-gray-900 text-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-semibold cursor-pointer "
                      >
                        {item.name}
                      </NavLink>
                    ))}
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
                  as="a"
                  href={item.href}
                  className="text-gray-800 text-center  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
