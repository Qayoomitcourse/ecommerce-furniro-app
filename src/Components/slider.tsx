import React, { useState } from 'react';

interface Slide {
  name: string;
  image: string;
}

const data2: Slide[] = [
  { name: 'Syltherine', image: '/assets/slide1.png' },
  { name: 'Leviosa', image: '//assets/slide1.png' },
  { name: 'Lolito', image: '//assets/slide1.png' },
  { name: 'Respira', image: '/assets/slide1.png' },
  { name: 'Grifo', image: '//assets/slide1.png' },
  { name: 'Muggo', image: '//assets/slide1.png' },
  { name: 'Pingky', image: '/assets/slide1.png' },
  { name: 'Potty', image: '/assets/slide1.png' },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full h-[670px] py-16 bg-[#fcf8fc] flex items-center justify-center gap-8">
      <div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Our designer already made a lot of beautiful <br /> prototype of rooms that inspire you
        </p>
        <button className="px-8 py-4 bg-[#faf1dd] text-white font-medium rounded-md">
          Explore More
        </button>
      </div>
      <div className="w-[404px] h-[582px] relative">
        {data2.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-12 left-12 bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">0{index + 1}</p>
              <h2 className="text-2xl font-bold mt-2">{slide.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
