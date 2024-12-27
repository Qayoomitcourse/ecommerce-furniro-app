import { Poppins } from 'next/font/google';
import React from 'react';


const poppins = Poppins({
  subsets: ['latin'], // Specify the language subset
  weight: ['400', '600', '700'], // Select font weights you need
});

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full h-[716px] flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url('/assets/benner.png')`, // Replace with your image path
      }}
    >
      <div className="relative sm:mt-10 md:mt-[150px] md:ml-[850px] bg-[#fff3e3] justify-between sm:w-[90%] md:w-[643px] h-auto sm:h-auto sm:rounded-xl">
        <div className="sm:w-full sm:px-6 sm:py-8 md:w-[561px] h-auto sm:justify-center sm:text-center sm:mx-auto md:ml-10">
          <p className={`text-start ${poppins.className} font-bold sm:text-[12px] md:text-[16px] text-[#B88E2F]`}>
            New Arrival
          </p>
          <h1 className={`text-start ${poppins.className} font-bold text-[#B88E2F] sm:text-[24px] md:text-[48px] lg:text-[63px]`}>
            Discover Our New Collection
          </h1>
          <p className={`text-start ${poppins.className} font-normal sm:text-[14px] md:text-[20px] text-gray-700`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] w-[200px] h-[60px] text-white mt-6 sm:w-[180px] sm:h-[50px] sm:text-[14px] md:w-[222px] md:h-[74px] md:text-[16px]">
            Book Now
          </button>
        </div>
        
      </div>
      
      
    </section>
  );
};

export default Hero;
