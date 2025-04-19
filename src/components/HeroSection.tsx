
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Innovation Digitale au Maroc
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Nous créons des solutions numériques innovantes pour propulser votre entreprise vers l'avenir
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Découvrir Nos Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
