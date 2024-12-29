'use client'
import BrowseRange from "@/Components/banner2";
import OurProducts from "@/Components/ourproducts";
import Shareyoursetup from "@/Components/shareyoursetup";
import HomeHeroSection from "@/Components/hero";
import Inspiration from "@/Components/slider";


export default function Home() {
  return (
    <div className=" w-screen">
      {/* Hero Section */}
      <div className="w-full">
        
        <HomeHeroSection/>
      </div>

      {/* Browse Range Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <BrowseRange />
      </div>

      {/* Our Products Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <OurProducts />
      </div>

      {/* Slick Room Slide Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <Inspiration/>
        {/* <Slider /> */}
      </div>

      {/* Share Your Setup Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <Shareyoursetup />
      </div>
    </div>
  );
}
