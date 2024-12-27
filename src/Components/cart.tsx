'use client'
import React, { useState } from 'react';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Cart Button to Open Cart */}
      <button
        onClick={toggleCart}
        className="fixed top-4 right-4 p-2 w-25 h-20  text-white rounded-full shadow-lg"
      >
      </button>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[417px] bg-white shadow-lg z-50 flex flex-col transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Example Item */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-md"></div>
              <div>
                <h3 className="text-sm font-medium">Asgaard Sofa</h3>
                <p className="text-xs text-gray-500">1 x Rs. 250,000.00</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Another Example Item */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-md"></div>
              <div>
                <h3 className="text-sm font-medium">Casalliving Wood</h3>
                <p className="text-xs text-gray-500">1 x Rs. 270,000.00</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">Subtotal</span>
            <span className="text-sm font-medium text-gray-800">Rs. 520,000.00</span>
          </div>
          <div className="flex space-x-4">
            <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
              Cart
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
              Checkout
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
              Comparison
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
