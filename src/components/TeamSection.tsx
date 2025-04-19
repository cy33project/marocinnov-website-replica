
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TeamSection = () => {
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

  const team = [
    {
      name: "Sarah Benali",
      role: "Directrice Générale",
      image: "/placeholder.svg",
      description: "Experte en stratégie digitale avec plus de 10 ans d'expérience dans le secteur technologique."
    },
    {
      name: "Karim Alami",
      role: "Directeur Technique",
      image: "/placeholder.svg",
      description: "Ingénieur logiciel passionné par le développement de solutions innovantes et performantes."
    },
    {
      name: "Leila Tahiri",
      role: "Directrice Marketing",
      image: "/placeholder.svg",
      description: "Spécialiste en marketing digital avec une forte expérience dans la croissance des entreprises."
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">NOTRE ÉQUIPE</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0">Les Experts Derrière MarocInnov</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
            Notre équipe de professionnels talentueux et passionnés travaille ensemble pour créer des solutions digitales exceptionnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={member.name} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-on-scroll opacity-0"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-8 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20 group-hover:border-primary transition-all duration-300">
                  <AvatarImage src={member.image} />
                  <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
                
                <div className="flex justify-center space-x-4 mt-6">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
