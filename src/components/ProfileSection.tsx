import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpeg";

const ProfileSection = () => {
  return (
    <Card className="p-8 border-border bg-gradient-secondary h-full">
      <div className="flex flex-col items-center text-center h-full">
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-glow-primary">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Iuri Lima
        </h1>
        
        <h2 className="text-xl text-primary mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Desenvolvedor Full Stack
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
          Desenvolvedor apaixonado por criar soluções inovadoras com tecnologias modernas. 
          Especializado em desenvolvimento web e mobile.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mb-8 w-full max-w-xs">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300"
          >
            <a href="https://mail.google.com/mail/?view=cm&to=iurilime@email.com">
              <Mail className="w-4 h-4 mr-2" />
              Entre em Contato
            </a>
          </Button>
          
          <Button 
          asChild
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <a href="/Iuri_lima_CV_PT.pdf" download>
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </a>
        </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-auto">
          {/* GitHub */}
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
          >
            <a 
              href="https://github.com/iurilin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>

          {/* LinkedIn */}
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
          >
            <a 
              href="https://www.linkedin.com/in/iuri-lima-0176072b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSection;
