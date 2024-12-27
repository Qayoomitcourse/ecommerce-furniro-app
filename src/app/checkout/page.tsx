'use client'
import React, { useState } from 'react';
import arrow from '../../../public/assets/arrow.png'
import Image from 'next/image';
import logo from '../../../public/assets/logo.png'
import Pagebotumsection from '@/Components/pagebotumsection';
import Link from 'next/link';


interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CheckoutFormProps {
  cartItems?: CartItem[];
}

const CheckoutForm = ({ cartItems = [] }: CheckoutFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    townCity: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
    paymentMethod: 'directBank'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}.00`;
  };

  // Use default items if none provided
  const defaultItems: CartItem[] = cartItems.length ? cartItems : [
    {
      name: "Asgaard sofa",
      quantity: 1,
      price: 250000
    }
  ];

  const subtotal = defaultItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
          <section
          className="w- h-[316px] pb-10 item-centre justify-between bg-top bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("/assets/Rectangle 1.png")', }}
        >
          <div className="w-auto h-[316] flex items-center mt-10 py-20 ">
            <div className="mx-auto w-fit fliex text-center item-center font-medium capitalize">
            <Image  src={logo} alt="FurniroLogo" width={80} height={32} className='ml-5' />
              <h1 className="text-5xl mb-2">Checkout</h1>
              <p className="flex items-center justify-center gap-1">
                <span>Home</span>
                <Image src={arrow} alt='arrow' width={20} height={20} />
                <span className="font-light">Checkout</span>
              </p>
            </div>
          </div>
        </section>


        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Billing details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Company Name (Optional)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-2">Country / Region</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md bg-white"
            >
              <option value="Sri Lanka">Sri Lanka</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Street address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Town / City</label>
            <input
              type="text"
              name="townCity"
              value={formData.townCity}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md bg-white"
            >
              <option value="Western Province">Western Province</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">ZIP code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Additional Information"
              className="w-full p-3 border rounded-md h-32 resize-none"
            />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <div className="bg-[#f9f1f1] p-6 rounded-lg">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Product</h3>
            {defaultItems.map((item, index) => (
              <div key={index} className="flex justify-between mb-2 text-gray-600">
                <span>{item.name} × {item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-[#B88E2F]">{formatPrice(subtotal)}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="directBank"
                name="paymentMethod"
                value="directBank"
                checked={formData.paymentMethod === 'directBank'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="directBank">Direct Bank Transfer</label>
            </div>
            {formData.paymentMethod === 'directBank' && (
              <p className="text-sm text-gray-600 ml-6">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            )}
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
            <Link href="/privacy-policy" className="underline">privacy policy</Link>.
          </p>

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded mt-6 hover:bg-gray-800 transition"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
    {/* Botum section */}
<Pagebotumsection/>
    </div>
    
  );
};

export default CheckoutForm;