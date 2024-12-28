import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] py-10 px-6 w-[1440px]">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Funiro.</h1>
          <p className="text-gray-500 text-sm leading-6">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-gray-500 text-sm font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-black text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#shop" className="text-black text-sm hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#about" className="text-black text-sm hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black text-sm hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-gray-500 text-sm font-semibold mb-4">Help</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#payment-options"
                className="text-black text-sm hover:underline"
              >
                Payment Options
              </a>
            </li>
            <li>
              <a href="#returns" className="text-black text-sm hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a
                href="#privacy-policies"
                className="text-black text-sm hover:underline"
              >
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-gray-500 text-sm font-semibold mb-4">
            Newsletter
          </h2>
          <form className="flex flex-col md:flex-row items-start md:items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 border-b border-gray-300 text-sm py-2 mb-4 md:mb-0 outline-none focus:border-black"
            />
            <button
              type="submit"
              className="text-sm font-semibold text-black hover:underline md:ml-2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-8"></div>

      {/* Bottom Section */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          2023 funiro. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
