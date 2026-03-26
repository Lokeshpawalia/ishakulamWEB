import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import Sports from "@/components/sections/Sports";
import Principal from "@/components/sections/Principal";
import Fees from "@/components/sections/Fees";
import Gaushala from "@/components/sections/Gaushala";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Blinking Admissions Open Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-destructive text-destructive-foreground text-center py-2 animate-blink-admission">
        <Link to="/admissions" className="text-sm md:text-base font-bold tracking-wide hover:underline">
          🎓 ADMISSIONS OPEN — Apply Now!
        </Link>
      </div>
      <main>
        <Hero />
        <About />
        <Academics />
        <Sports />
        <Principal />
        <Fees />
        <Gaushala />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
