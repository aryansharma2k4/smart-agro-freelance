
export default function Footer() {
    return (
      <footer className="bg-[#334B35] text-gray-300 p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Smart Agro.</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta, quam ut finibus
              ultrices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-500">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-yellow-500">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-yellow-500">
                <YoutubeIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-yellow-500">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  New Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our weekly Newsletter and receive updates via email.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email here..."
                className="flex-grow p-2 rounded-l-md bg-gray-800 text-gray-300 placeholder-gray-500"
              />
              <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-md">GO</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between text-sm">
            <p className="mb-2 md:mb-0">Copyright ©Smart Agro. All Right Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-yellow-500">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  function FacebookIcon(props) {
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function InstagramIcon(props) {
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function TwitterIcon(props) {
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
  
  
  function YoutubeIcon(props) {
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
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }