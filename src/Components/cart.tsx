'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const openCartPage = () => {
    router.push('/cart'); // Replace "/cart" with the correct path to your cart page
  };

  return (
    <>
      {/* Cart Button to Open Cart */}
      <button
        onClick={toggleCart}
        className="fixed top-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18M3 8h18M6 13h12"
          />
        </svg>
      </button>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[417px] bg-white shadow-lg z-50 flex flex-col transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
            <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
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
            <button
              onClick={openCartPage}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 focus:outline-none"
            >
              Go to Cart
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
