import BrowseRange from "@/Components/banner2";
import Hero from "@/Components/herosection";
import OurProducts from "@/Components/ourproducts";
import Shareyoursetup from "@/Components/shareyoursetup";
import Slickroomslide from "@/Components/slickroomslide";

export default function Home() {
  return (
    <div>
      <Hero/>
      <br />
      <BrowseRange/>
      <br />
      <OurProducts/>
      <br />
      <Slickroomslide/>
      <br />
      <Shareyoursetup/>
      <br />
    </div>
  );
}
