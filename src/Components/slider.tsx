import React from "react";
import Image from "next/image";


const Inspiration = () => {
  return (
    <section className="bg-mylightpink w-full py-12">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center lg:text-left lg:col-span-1 space-y-6">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl text-mylightblack text-center lg:text-left mt-8 lg:mt-20">
                50+ Beautiful rooms inspiration
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl text-center lg:text-left">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
            </div>
            <button className="bg-mymusturd mt-6">Explore More</button>
            
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/slide1.png"
              alt="Wall Image"
              height={450}
              width={350}
              className="h-auto object-cover"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-8">
              <Image src="/assets/Rectangle 25.png" alt="Chair" height={380} width={320} />
            </div>
            <div className="mt-6">
              <Image src="/assets/slide2.png"
              alt="Move"
              height={50}
              width={100}
              className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;