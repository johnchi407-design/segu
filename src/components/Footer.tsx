import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src="/segu.jpg"
              alt="Segullah Projects & Designs Logo"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Segullah Projects & Designs</h3>
              <p className="text-gray-400 leading-relaxed">
                Strategic Branding, Signage & Visual Communication
              </p>
              <div className="pt-4">
                <p className="text-orange-500 font-medium mb-2">Greenhills, Randfontein, South Africa</p>
                <p className="text-gray-400">info@segullah.co.za</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-gray-500 text-sm mb-2">
                © 2024 Segullah Projects & Designs. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm">
                Strategic Branding, Signage & Visual Communication
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                About
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Services
              </Link>
              <Link to="/process" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Process
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
