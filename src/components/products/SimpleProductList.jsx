import { Fade, Zoom } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

export default function SimpleProductList({ products }) {
  return (
    <div className="bg-gray-200">
      <div className="sm:w-full md:w-10/12  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-screen lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="flex flex-wrap gap-6  w-full ">
          {products.map((index, key) => (
            <Zoom>
              <Fade>
                <NavLink to={index.url} key={index.id} className="">
                  {/* <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={index.imageSrc}
                      alt={index.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{index.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {index.price}
                  </p> */}

                  <div class="flex flex-col w-64 sm:w-[90vw] md:w-80 items-center justify-center  max-w-sm mx-auto">
                    <div
                      class="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                      style={{"backgroundImage": `url(${index.imageSrc})`}}
                    ></div>

                    <div class="w-10/12 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 ">
                      <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase ">
                      {index.name}
                      </h3>

                      <div class="flex items-center justify-center px-3 py-2 bg-gray-200 ">
                        <span class="font-bold text-gray-800  text-center">
                        {index.price}
                        </span>
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
              </Fade>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
}
