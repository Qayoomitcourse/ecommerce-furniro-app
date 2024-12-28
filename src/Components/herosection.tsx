import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'], // Specify the language subset
  weight: ['400', '600', '700'], // Select font weights you need
});

const Hero = () => {
  return (
    <section
    className="relative bg-cover bg-center w-full h-[716px] sm:h-[600px] md:h-[716px] lg:h-[800px] flex flex-col items-center justify-center text-center"
    style={{
      backgroundImage: `url('/assets/benner.png')`,
    }}    >
      <div className="relative bg-[#fff3e3] sm:mt-10 md:mt-[150px] sm:w-[90%] md:w-[643px] h-[443] px-6 py-8 sm:rounded-xl md:ml-[850px]">
        <div className="w-full sm:px-6 sm:py-8 md:w-[561px] sm:text-center md:text-start">
          <p className={`font-bold ${poppins.className} text-[#B88E2F] sm:text-[12px] md:text-[16px]`}>
            New Arrival
          </p>
          <h1 className={`font-bold ${poppins.className} text-[#B88E2F] sm:text-[24px] md:text-[48px] lg:text-[63px]`}>
            Discover Our New Collection
          </h1>
          <p className={`font-normal ${poppins.className} text-gray-700 sm:text-[14px] md:text-[20px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] text-white mt-6 sm:w-[180px] sm:h-[50px] sm:text-[14px] md:w-[222px] md:h-[74px] md:text-[16px]">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
