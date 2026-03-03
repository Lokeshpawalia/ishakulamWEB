import { Quote } from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import cofounderImg from "@/assets/cofounder.jpg";

const Principal = () => {
  return (
    <section className="py-24 bg-background pattern-dots">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Quote Section */}
          <div className="bg-card rounded-3xl shadow-elevated overflow-hidden mb-12 p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary/30 mb-4" />
            <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              "At Ishakulam, we believe that true education is not merely the acquisition of knowledge, 
              but the transformation of character. Our mission is to nurture students who will not 
              only succeed in their careers but also contribute meaningfully to society."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Every child who enters our gates becomes a part of our family. We guide them with 
              patience, inspire them with wisdom, and empower them with skills. Our residential 
              setting allows us to provide round-the-clock care and attention, ensuring each 
              student flourishes in a nurturing environment.
            </p>
          </div>

          {/* Founders Grid - Manish bigger */}
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Founder - larger */}
            <div className="md:col-span-3 bg-card rounded-3xl shadow-elevated overflow-hidden">
              <div className="relative">
                <img
                  src={founderImg}
                  alt="Dr. Manish Solanki - Founder"
                  className="w-full h-80 md:h-96 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground">Dr. Manish Solanki</h3>
                <p className="text-primary font-medium mt-1 text-lg">Founder</p>
                <p className="text-sm text-muted-foreground mt-2">PhD in Yogic Science at Gurukul Kangri University</p>
              </div>
            </div>

            {/* Co-Founder - smaller */}
            <div className="md:col-span-2 bg-card rounded-3xl shadow-elevated overflow-hidden">
              <div className="relative">
                <img
                  src={cofounderImg}
                  alt="Acharya Shubham - Co-Founder"
                  className="w-full h-72 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">Acharya Shubham</h3>
                <p className="text-primary font-medium mt-1">Co-Founder</p>
                <p className="text-sm text-muted-foreground mt-2">Master's in Yogic Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
