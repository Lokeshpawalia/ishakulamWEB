import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gaushala from "@/components/sections/Gaushala";

const GaushalaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Gaushala />
      </main>
      <Footer />
    </div>
  );
};

export default GaushalaPage;
