import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Fees from "@/components/sections/Fees";

const FeesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Fees />
      </main>
      <Footer />
    </div>
  );
};

export default FeesPage;
