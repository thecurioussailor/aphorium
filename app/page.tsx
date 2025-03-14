import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Recent from "@/components/Recent";
import Subscribe from "@/components/Subscribe";
export default function Home() {
  return (
    <div className="bg-[#0d0d0d] relative">
      <Navbar/>
      <Hero/>
      <Recent/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
