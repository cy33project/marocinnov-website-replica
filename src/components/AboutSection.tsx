
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const AboutSection = () => {
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
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">À PROPOS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0">Qui Sommes-Nous?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
            MarocInnov est une agence numérique de premier plan au Maroc, spécialisée dans la création de solutions digitales innovantes qui propulsent les entreprises vers le succès.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0" style={{animationDelay: "0.1s"}}>
            <CardContent className="p-6">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Notre Vision</h3>
              <p className="text-gray-600">
                Être le leader de l'innovation numérique au Maroc, en créant des solutions qui façonnent l'avenir digital de nos clients et de notre société.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check size={18} className="text-primary mr-2" />
                  <span className="text-gray-600">Excellence technologique</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-primary mr-2" />
                  <span className="text-gray-600">Innovation continue</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
            <CardContent className="p-6">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Notre Mission</h3>
              <p className="text-gray-600">
                Fournir des solutions numériques exceptionnelles qui permettent à nos clients de prospérer dans l'ère numérique tout en contribuant au développement du Maroc.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check size={18} className="text-primary mr-2" />
                  <span className="text-gray-600">Solutions sur mesure</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-primary mr-2" />
                  <span className="text-gray-600">Résultats mesurables</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0" style={{animationDelay: "0.3s"}}>
            <CardContent className="p-6">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Nos Valeurs</h3>
              <p className="text-gray-600">
                Innovation, excellence, intégrité et engagement envers la satisfaction client sont au cœur de notre démarche quotidienne.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check size={18} className="text-primary mr-2" />
                  <span className="text-gray-600">Créativité</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-primary mr-2" />
                  <span className="text-gray-600">Professionnalisme</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
