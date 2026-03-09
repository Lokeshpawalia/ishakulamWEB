import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sports from "@/components/sections/Sports";

const SportsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Sports />
      </main>
      <Footer />
    </div>
  );
};

export default SportsPage;
