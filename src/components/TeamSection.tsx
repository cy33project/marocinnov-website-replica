
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Notre Équipe</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Benali",
              role: "Directrice Générale",
              image: "/placeholder.svg"
            },
            {
              name: "Karim Alami",
              role: "Directeur Technique",
              image: "/placeholder.svg"
            },
            {
              name: "Leila Tahiri",
              role: "Directrice Marketing",
              image: "/placeholder.svg"
            }
          ].map((member) => (
            <Card key={member.name}>
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} />
                  <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
