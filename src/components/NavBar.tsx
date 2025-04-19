
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary">MarocInnov</a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">À Propos</a>
            <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Notre Équipe</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Contactez-nous</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
