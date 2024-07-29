export default function Introduction() {
    return (
      <div className="flex flex-col md:flex-row items-center bg-[#334B35] p-8 md:p-16">
        <div className="relative md:w-1/2">
          <img src="/placeholder.svg" alt="Agriculture field" className="rounded-lg shadow-lg" />
          <div className="absolute bottom-4 left-4 bg-[#A3C293] p-4 rounded-lg shadow-lg flex items-center">
            <CheckIcon className="text-white w-6 h-6 mr-2" />
            <div>
              <div className="text-2xl font-bold text-white">86,700</div>
              <div className="text-white">Successfully Project Completed</div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16 text-white">
          <div className="text-sm uppercase text-[#A3C293]">Our Introduction</div>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Pure Agriculture and Organic Form</h1>
          <h2 className="text-xl text-[#F7B500] mt-4">We're Leader in Agriculture Market</h2>
          <p className="text-sm mt-4">
            There are many variations of passages of available but the majority have suffered alteration in some form, by
            injected humour or randomised words even slightly believable.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <CircleCheckIcon className="text-[#F7B500] w-6 h-6 mr-2" />
              Organic food contains more vitamins
            </li>
            <li className="flex items-center">
              <CircleCheckIcon className="text-[#F7B500] w-6 h-6 mr-2" />
              Eat organic because supply meets demand
            </li>
            <li className="flex items-center">
              <CircleCheckIcon className="text-[#F7B500] w-6 h-6 mr-2" />
              Organic food is never irradiated
            </li>
          </ul>
        </div>
      </div>
    )
  }
  
  function CheckIcon(props) {
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
  
  
  function CircleCheckIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
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