import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import aboutCar from "@/assets/about-car.jpeg";

const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              About <span className="text-primary">High Performance Detail</span>
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground text-center">
                High Performance Detail is Miami's premier mobile automotive detailing service. 
                With years of experience and unwavering dedication to excellence, we specialize 
                in interior/exterior detailing, paint correction, and ceramic coating.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground text-center">
                Using premium products and cutting-edge techniques, our expert team ensures 
                your vehicle achieves showroom perfection.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-black text-lg px-8 py-6 text-center flex items-center justify-center"
              onClick={scrollToContact}
            >
              Contact Us
            </Button>
          </div>

          {/* Car Image */}
          <div className="animate-fade-in">
            <img 
              src={'http://localhost:8080/src/assets/gallery-1.jpeg'} 
              alt="High Performance Detail luxury car detailing results" 
              className="w-full h-auto rounded-lg shadow-elegant "
            />

            {/* Maintenance Plans CTA */}
            {/* 
            <Card className="card-automotive mt-8">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-playfair text-foreground mb-3">Maintenance Plans Available</h3>
                <p className="text-muted-foreground mb-4 font-inter">
                  Consistent care is key to vehicle protection and pristine appearance. 
                  Our weekly, bi-weekly, and monthly maintenance plans ensure your vehicle 
                  stays protected and immaculate year-round.
                </p>
                <Button 
                  variant="outline" 
                  className="btn-outline"
                  onClick={scrollToContact}
                >
                  Learn About Plans
                </Button>
              </CardContent>
            </Card>
            */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;