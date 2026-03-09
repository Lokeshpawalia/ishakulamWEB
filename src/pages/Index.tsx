import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Principal from "@/components/sections/Principal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <About />
        <Principal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
