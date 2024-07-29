import React from 'react';

const AgricultureComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#334B35] p-8">
      <div className="lg:w-1/2 flex justify-center items-center">
        <img src="" alt="Agriculture" className="rounded-lg shadow-lg w-full h-full object-cover" />
      </div>
      <div className="lg:w-1/2 p-8 bg-[#6D8C54] rounded-lg shadow-lg flex flex-col justify-center">
        <div className="text-white font-bold text-xl mb-4">
          MODERN AGRICULTURE
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-6">
          Providing High Quality Products
        </h2>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="p-4 bg-[#6D8C54] rounded-full mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3zm0 0V5m0 11v2m-4-6H5m11 0h2M7.636 7.636L5.707 5.707m12.95 12.95l-1.93-1.93M7.636 16.364L5.707 18.293m12.95-12.95l-1.93 1.93"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Our Agriculture Growth</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-4 bg-green-300 rounded-full mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3zm0 0V5m0 11v2m-4-6H5m11 0h2M7.636 7.636L5.707 5.707m12.95 12.95l-1.93-1.93M7.636 16.364L5.707 18.293m12.95-12.95l-1.93 1.93"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Making Healthy Foods</h3>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor interdum scelerisque</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgricultureComponent;
