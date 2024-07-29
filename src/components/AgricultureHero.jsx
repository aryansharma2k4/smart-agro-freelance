
export default function AgricultureHero() {
    return (
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img src="/placeholder.svg" alt="Family farming" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-center p-8 bg-[#6ba36b] w-full md:w-1/2">
          <div className="flex items-center mb-6">
            <img src="/placeholder.svg" alt="Logo" className="w-12 h-12 mr-4" />
            <span className="text-white text-sm">MODERN AGRICULTURE</span>
          </div>
          <h1 className="text-white text-4xl font-bold mb-8">Providing High Quality Products</h1>
          <div className="flex items-start mb-6">
            <CropIcon className="w-12 h-12 text-white mr-4" />
            <div>
              <h2 className="text-white text-xl font-semibold mb-2">Our Agriculture Growth</h2>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <SaladIcon className="w-12 h-12 text-white mr-4" />
            <div>
              <h2 className="text-white text-xl font-semibold mb-2">Making Healthy Foods</h2>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor interdum
                scelerisque
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function CropIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2v14a2 2 0 0 0 2 2h14" />
        <path d="M18 22V8a2 2 0 0 0-2-2H2" />
      </svg>
    )
  }
  
  
  function SaladIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 21h10" />
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
        <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
        <path d="m13 12 4-4" />
        <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
      </svg>
    )
  }
  
  
  function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }