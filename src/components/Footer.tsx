import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="py-20 bg-gray-100 text-center justify-center text-2xl">
        <div className="flex justify-center mb-4">
          <span className="text-[#A5A5A5]">
            <svg fill="none" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M40 2.74247L37.2575 0L10 27.2575C6.42141 22.3746 6.95653 15.5184 11.2375 11.2375L11.4381 11.0368L8.69565 8.29431L8.49499 8.49498C2.64215 14.3478 2.10702 23.5451 7.22408 30L0 37.2241L2.74248 39.9665L30 12.709C33.5786 17.592 33.0435 24.4482 28.7291 28.7291L28.5284 28.9298L31.2709 31.6722L31.4716 31.4716C37.3244 25.6187 37.8595 16.4214 32.7425 9.96655L40 2.74247Z"></path>
            </svg>
          </span>
        </div>
        <h4 className="text-1xl font-bold mb-4">Be in the know</h4>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Keep up with the latest news at Photoruum, <br /> sign up for our weekly newsletter.
        </p>
        <div className="mb-5 max-w-md mx-auto">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Enter your email here"
            required
          />
        </div>
        <button className="bg-black text-white px-5 py-3 rounded-full">Subscribe</button>
      </div>
      <div className="container mx-auto px-4 bg-white border-t border-gray-200 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-18 text-lg font-normal">
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-black">PHOTORUUM</h1>
          </div>
        </div>
          <div className="flex flex-col">
            <a href="#" className="text-gray-900 mb-4">Get featured</a>
            <a href="#" className="text-gray-900 mb-4">Event</a>
            <a href="#" className="text-gray-900 mb-4">Join our community</a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-gray-900 mb-4">Chat with us</a>
            <a href="#" className="text-gray-900 mb-4">Contact</a>
            <a href="#" className="text-gray-900 mb-4">Privacy policy</a>
          </div>
          <div className="flex items-start justify-end">
            <button className="flex items-center justify-center flex-shrink gap-2 text-lg font-normal text-dark">
            <FontAwesomeIcon icon={faCircleUp} />
              Scroll Up
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-10">
        <p className="text-sm text-gray-500">PHOTORUUM FACILITY © 2024</p>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="text-gray-900 text-4xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-900 text-4xl">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" className="text-gray-900 text-4xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="text-gray-900 text-sm">
            Site by <a href="#" className="font-bold">TSC</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
