
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="/" 
            className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}
          >
            MarocInnov
          </a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? "text-primary" : "text-white"}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className={`transition-colors hover:text-primary ${scrolled ? "text-gray-600" : "text-white"}`}>À Propos</a>
            <a href="#services" className={`transition-colors hover:text-primary ${scrolled ? "text-gray-600" : "text-white"}`}>Services</a>
            <a href="#team" className={`transition-colors hover:text-primary ${scrolled ? "text-gray-600" : "text-white"}`}>Notre Équipe</a>
            <a href="#contact" className={`transition-colors hover:text-primary ${scrolled ? "text-gray-600" : "text-white"}`}>Contact</a>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 px-6">
              Contactez-nous
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#about" className="text-gray-600 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>À Propos</a>
              <a href="#services" className="text-gray-600 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#team" className="text-gray-600 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Notre Équipe</a>
              <a href="#contact" className="text-gray-600 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button className="bg-primary hover:bg-primary/90 w-full mt-2">
                Contactez-nous
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
