import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Shield, 
  Sparkles, 
  Eye, 
  Palette, 
  Droplets, 
  Sofa, 
  Settings 
} from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Mobile Detailing",
      description: "Complete interior and exterior detailing at your location."
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description: "Advanced protection with long-lasting shine and hydrophobic properties."
    },
    {
      icon: Sparkles,
      title: "Paint Correction",
      description: "Remove swirl marks and scratches for showroom condition."
    },
    {
      icon: Eye,
      title: "Paint Protection Film",
      description: "Invisible protection with self-healing technology."
    },
    {
      icon: Palette,
      title: "Headlight Restoration",
      description: "Restore clarity and brightness to cloudy headlights."
    },
    {
      icon: Droplets,
      title: "Leather Coating",
      description: "Protect and condition leather surfaces from cracking."
    },
    {
      icon: Sofa,
      title: "Upholstery Extraction",
      description: "Deep cleaning for fabric and leather seats."
    },
    {
      icon: Settings,
      title: "Specialized Services",
      description: "Custom detailing solutions for your specific needs."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reveal-on-scroll animation for service cards and CTA
  useEffect(() => {
    const container = document.querySelector('#services');
    if (!container) return;

    const elements = container.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('animate-fade-in', 'opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-poppins">
            Premium <span className="text-black">Detailing Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
            From basic maintenance to complete vehicle transformation, we offer comprehensive 
            detailing services using premium products and cutting-edge techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-automotive hover-lift group cursor-pointer h-full reveal-on-scroll opacity-0 translate-y-6 will-change-transform"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300 mx-auto border-2 border-red-500">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center reveal-on-scroll opacity-0 translate-y-6 will-change-transform">
          <Button 
            size="lg" 
            className="btn-secondary bg-black text-white text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Get Custom Quote
          </Button>
          <p className="text-muted-foreground mt-4">
            Free consultation and personalized service recommendations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;