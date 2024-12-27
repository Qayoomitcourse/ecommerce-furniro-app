import BrowseRange from "@/Components/banner2";
import Hero from "@/Components/herosection";
import OurProducts from "@/Components/ourproducts";
import Shareyoursetup from "@/Components/shareyoursetup";
import Slickroomslide from "@/Components/slickroomslide";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <div className="w-full">
        <Hero />
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
        <Slickroomslide />
      </div>

      {/* Share Your Setup Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <Shareyoursetup />
      </div>
    </div>
  );
}
