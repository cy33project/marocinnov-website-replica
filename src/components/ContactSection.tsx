
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contactez-Nous</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <Input placeholder="Votre nom" />
            </div>
            <div>
              <Input type="email" placeholder="Votre email" />
            </div>
            <div>
              <Textarea placeholder="Votre message" className="min-h-[150px]" />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Envoyer le Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
