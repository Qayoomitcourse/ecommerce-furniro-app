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
    <section className="flex justify-center items-center py-16 bg-[#F9F9F9]">
      {/* Main container with fixed width and height */}
      <div className="md:w-[1183px] h-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`${poppins.className} text-[32px] font-bold mb-2 leading-[1.2]`}>
            Browse The Range
          </h2>
          <p className={`${poppins.className} text-[20px] text-[#666666]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dining */}
          <div className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative w-[381px] h-[480px] mx-auto">
              <Image
                src="/assets/dining.png"
                alt="Dining"
                width={500}
                height={700}
                layout='responsive'
                style={{ objectFit: "cover" }}

              />
            </div>
            <div className="text-center py-4">
              <h3 className={`${poppins.className} text-xl font-semibold leading-tight`}>
                Dining
              </h3>
            </div>
          </div>

          {/* Living */}
          <div className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative w-[381px] h-[480px] mx-auto">
              <Image
                src="/assets/living.png"
                alt="Living"
                width={500}
                height={700}
                layout='responsive'
                style={{ objectFit: "cover" }}

              />
            </div>
            <div className="text-center py-4">
              <h3 className={`${poppins.className} text-xl font-semibold leading-tight`}>
                Living
              </h3>
            </div>
          </div>

          {/* Bedroom */}
          <div className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative w-[381px] h-[480px] mx-auto">
              <Image
                src="/assets/Bedroom.png"
                alt="Bedroom"
                width={500}
                height={700}
                layout='responsive'
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="text-center py-4">
              <h3 className={`${poppins.className} text-xl font-semibold leading-tight`}>
                Bedroom
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
