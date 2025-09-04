import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer transition-all duration-300 hover:shadow-glow-primary hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground group-hover:text-blue-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-blue-primary/20 text-blue-primary border border-blue-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl bg-card border-border/50 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-foreground text-2xl">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            {project.longDescription}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Tecnologias utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-blue-primary/20 text-blue-primary border border-blue-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button asChild className="bg-gradient-primary hover:bg-gradient-primary/90">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Ver Repositório
              </a>
            </Button>
            
            {project.liveUrl && (
              <Button variant="outline" asChild className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Projeto
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;