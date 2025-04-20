
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import Globe from "./Globe";

const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581084324492-c8076f130f86')] bg-cover bg-center opacity-10"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/95" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative mb-8 w-full h-48">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Globe />
            </Canvas>
          </div>
          
          <h1 
            ref={textRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-scroll opacity-0 transform translate-y-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
          >
            Innovation Digitale <br/>au Maroc
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-10" style={{animationDelay: "0.2s"}}>
            Nous créons des solutions numériques innovantes pour propulser votre entreprise vers l'avenir
          </p>
          
          <div className="animate-on-scroll opacity-0" style={{animationDelay: "0.4s"}}>
            <Button 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Découvrir Nos Services
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
};

export default HeroSection;
