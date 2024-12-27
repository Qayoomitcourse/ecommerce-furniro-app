import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

// Import Poppins font
const poppins = Poppins({
  subsets: ['latin'], // Specify the language subset
  weight: ['400', '600', '700'], // Select font weights you need
});

const BrowseRange = () => {
  return (
    <section className="flex justify-center items-center py-16">
      {/* Main container with fixed width and height */}
      <div className="sm:auto md:w-[1183px] h-[685px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`${poppins.className} text-[32px] font-bold mb-2`}>Browse The Range</h2>
          <p className={`${poppins.className} text-[20px] text-[#666666] mb-2`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Dining */}
          <div className="rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="relative w-[381px] h-[480px] mx-auto">
              <Image
                src="/assets/dining.png" // Replace with the actual URL
                alt="Dining"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center py-4">
              <h3 className={`${poppins.className} text-xl font-semibold`}>Dining</h3>
            </div>
          </div>

          {/* Living */}
          <div className="rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="relative w-[381px] h-[480px] mx-auto">
              <Image
                src="/assets/living.png" // Replace with the actual URL
                alt="Living"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center py-4">
              <h3 className={`${poppins.className} text-xl font-semibold`}>Living</h3>
            </div>
          </div>

          {/* Bedroom */}
          <div className="rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="relative w-[381px] h-[480px] mx-auto">
              <Image
                src="/assets/bedroom.png" // Replace with the actual URL
                alt="Bedroom"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center py-4">
              <h3 className={`${poppins.className} text-xl font-semibold`}>Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
