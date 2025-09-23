import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Play } from "lucide-react";

// Import gallery images
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import featured1 from "@/assets/gallery-featured-1.jpeg";
import featured2 from "@/assets/gallery-featured-2.jpeg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    { 
      src: featured1, 
      alt: "Premium ceramic coating finish", 
      category: "ceramic", 
      featured: true,
      title: "Ceramic Coating Excellence"
    },
    { 
      src: featured2, 
      alt: "Premium full detail service", 
      category: "Premium full detailing service", 
      featured: true,
      title: "Lamborghini Urus"
    },
    { 
      src: gallery1, 
      alt: "Complete vehicle detailing", 
      category: "detailing",
      title: "Full Detail Transformation"
    },
    { 
      src: gallery2, 
      alt: "Interior detailing perfection", 
      category: "interior",
      title: "Interior Excellence"
    },
    { 
      src: gallery3, 
      alt: "Exterior wash and protection", 
      category: "ceramic",
      title: "Ferrari 458 Speciale Revived Its Maintenance Ceramic coating Detail."
    },
    { 
      src: gallery4, 
      alt: "Premium detailing", 
      category: "Premium detailing",
      title: "Harley-Davidson"
    },
    { 
      src: gallery5, 
      alt: "Professional detailing results", 
      category: "detailing",
      title: "Professional Results"
    },
    { 
      src: gallery6, 
      alt: "Paint protection application", 
      category: "ceramic",
      title: "1000HP GTR Nismo just received a ceramic coating booster"
    },
    { 
      src: gallery7, 
      alt: "Before and after transformation", 
      category: "correction",
      title: "Dramatic Transformation"
    }
  ];

  const filterCategories = [
    { id: "all", label: "All Work" },
    { id: "ceramic", label: "Ceramic Coating" },
    { id: "correction", label: "Paint Correction" },
    { id: "detailing", label: "Full Details" },
    { id: "luxury", label: "Luxury Vehicles" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reveal-on-scroll animation for gallery cards
  useEffect(() => {
    const container = document.querySelector('#gallery');
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
  }, [activeFilter]);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
            Our <span className="text-primary">Work Speaks</span> for Itself
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-inter">
            See the incredible transformations we've achieved for Miami's most discerning vehicle owners. 
            From everyday cars to exotic supercars, every detail matters.
          </p>
          
        </div>


        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className={`card-automotive hover-lift cursor-pointer overflow-hidden group reveal-on-scroll opacity-0 translate-y-6 will-change-transform ${
                  item.featured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}>
                  <CardContent className="p-0 relative">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-foreground font-semibold mb-2">{item.title}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground capitalize">
                            {item.category}
                          </span>
                          <ZoomIn className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.alt}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;