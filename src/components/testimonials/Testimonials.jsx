import React from "react";
import { Zoom, Fade } from "react-awesome-reveal";

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
        <h2 className="text-4xl font-bold text-red-600">Testimonials</h2>
        <p className="text-lg text-gray-600">What others say about us</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-6">
        {testimonials.map((index, key) => {
          return (
            <>
              <Zoom>
                <Fade>
                  <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div class="p-8 border rounded-lg dark:border-gray-700">
                      <p class="leading-loose text-gray-500 dark:text-gray-400">
                        “Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore quibusdam ducimus libero ad tempora
                        doloribus expedita laborum saepe voluptas perferendis
                        delectus assumenda rerum, culpa aperiam dolorum,
                        obcaecati corrupti aspernatur a.”.
                      </p>

                      <div class="flex items-center mt-8 -mx-2">
                        <img
                          class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />

                        <div class="mx-2">
                          <h1 class="font-semibold text-gray-800 dark:text-white">
                            Robert
                          </h1>
                          <span class="text-sm text-gray-500">
                            CTO, Robert Consultency
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="p-8 border rounded-lg dark:border-gray-700">
                      <p class="leading-loose text-gray-500 dark:text-gray-400">
                        “Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore quibusdam ducimus libero ad tempora
                        doloribus expedita laborum saepe voluptas perferendis
                        delectus assumenda rerum, culpa aperiam dolorum,
                        obcaecati corrupti aspernatur a.”.
                      </p>

                      <div class="flex items-center mt-8 -mx-2">
                        <img
                          class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                          src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          alt=""
                        />

                        <div class="mx-2">
                          <h1 class="font-semibold text-gray-800 dark:text-white">
                            Jeny Doe
                          </h1>
                          <span class="text-sm text-gray-500">
                            CEO, Jeny Consultency
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="p-8 border rounded-lg dark:border-gray-700">
                      <p class="leading-loose text-gray-500 dark:text-gray-400">
                        “Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore quibusdam ducimus libero ad tempora
                        doloribus expedita laborum saepe voluptas perferendis
                        delectus assumenda rerum, culpa aperiam dolorum,
                        obcaecati corrupti aspernatur a.”.
                      </p>

                      <div class="flex items-center mt-8 -mx-2">
                        <img
                          class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                          src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          alt=""
                        />

                        <div class="mx-2">
                          <h1 class="font-semibold text-gray-800 dark:text-white">
                            Ema Watson{" "}
                          </h1>
                          <span class="text-sm text-gray-500">
                            Marketing Manager at Stech
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
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
