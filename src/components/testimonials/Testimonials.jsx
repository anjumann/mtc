import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-black">Testimonials</h2>
                <p className="text-lg text-gray-600">What others say about us</p>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-6">
                <div className="p-4 text-gray-800 bg-white rounded-lg shadow-md">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            
                            <h5 className="font-bold text-indigo-600">John Doe</h5>
                            <p className="text-sm text-gray-600">CEO / Founder</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-gray-800 bg-white rounded-lg shadow-md">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            
                            <h5 className="font-bold text-indigo-600">michael james</h5>
                            <p className="text-sm text-gray-600">web developer</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-gray-800 bg-white rounded-lg shadow-md">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            
                            <h5 className="font-bold text-indigo-600">michael james</h5>
                            <p className="text-sm text-gray-600">web developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials