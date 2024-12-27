import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import dining from '../../public/assets/dining.png'
import living from '../../public/assets/living.png'
import bedroom from '../../public/assets/Bedroom.png'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const BrowseRange = () => {
  return (
    <section className="flex justify-center items-center py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-[1183px]">
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
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={dining}
                alt="Dining"
                fill
                className="object-cover"
                priority
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
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={living}
                alt="Living"
                fill
                className="object-cover"
                priority
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
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={bedroom}
                alt="Bedroom"
                fill
                className="object-cover"
                priority
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