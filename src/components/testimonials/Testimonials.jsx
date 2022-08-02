import React from "react";
import {Zoom, Fade} from 'react-awesome-reveal'

const testimonials = [
  {
    name: "Name",
    position: "Position",
    message:
      '" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "',
  },
  {
    name: "Name",
    position: "Position",
    message:
      '" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "',
  },
  {
    name: "Name",
    position: "Position",
    message:
      '" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "',
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-indigo-600">Testimonials</h2>
        <p className="text-lg text-gray-600">What others say about us</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-6">
        {testimonials.map((index, key) => {
          return (
            <>
              <Zoom>
                <Fade>
                  <div
                    key={key}
                    className="p-4 text-gray-800 bg-white rounded-lg shadow-md"
                  >
                    <div className="mb-2">
                      <p className="mb-2 text-center text-gray-600 ">
                        {index.message}
                      </p>
                      <div className="flex flex-col items-center justify-center">
                        <h5 className="font-bold text-indigo-600">
                          {index.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {index.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </Fade>
              </Zoom>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Testimonials;
