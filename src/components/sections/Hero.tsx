import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Ishakulam Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="inline-block px-6 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20 overflow-hidden max-w-md w-full relative">
            <div className="animate-mantra-sideways whitespace-nowrap">
              <span className="inline-block mx-4">ॐ भूर्भुवः स्वः</span>
              <span className="inline-block mx-4">तत्स॑वि॒तुर्वरे॑ण्यं॒</span>
              <span className="inline-block mx-4">भर्गो॑ दे॒वस्य॑ धीमहि।</span>
              <span className="inline-block mx-4">धियो॒ यो नः॑ प्रचो॒दया॑त्॥</span>
              <span className="inline-block mx-4">ॐ भूर्भुवः स्वः</span>
              <span className="inline-block mx-4">तत्स॑वि॒तुर्वरे॑ण्यं॒</span>
              <span className="inline-block mx-4">भर्गो॑ दे॒वस्य॑ धीमहि।</span>
              <span className="inline-block mx-4">धियो॒ यो नः॑ प्रचो॒दया॑त्॥</span>
            </div>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-accent">Ishakulam</span>
            <br />
            Gurukul of Excellence
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Where ancient wisdom meets modern education. We nurture minds, build character, 
            and shape future leaders through a holistic approach to learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/admissions" className="flex items-center gap-2">
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="flex items-center gap-2" onClick={() => setShowVideo(true)}>
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "1000+", label: "Students" },
              { number: "50+", label: "Dedicated Teachers" },
              { number: "100%", label: "Holistic Development" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
                <div className="font-heading text-3xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/80 animate-float" />
        </div>
      </div>
    </section>

    {/* Video Modal */}
    {showVideo && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm" onClick={() => setShowVideo(false)}>
        <div className="relative w-full max-w-4xl mx-4 aspect-video bg-foreground rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
          <button
            onClick={() => setShowVideo(false)}
            className="absolute -top-10 right-0 text-primary-foreground hover:text-accent transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full h-full flex items-center justify-center text-primary-foreground">
            <div className="text-center p-8">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl font-heading font-bold mb-2">Coming Soon</p>
              <p className="text-primary-foreground/70">Our story video will be available shortly.</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Hero;
