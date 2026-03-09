import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Academics from "@/components/sections/Academics";

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Academics />
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsPage;
