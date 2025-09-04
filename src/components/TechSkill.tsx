import { useState } from "react";
import { Card } from "@/components/ui/card";

interface TechSkillProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const TechSkill = ({ name, icon, description, color }: TechSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`
        p-6 border-border bg-card hover:bg-gradient-accent
        transition-all duration-300 cursor-pointer
        hover:border-primary hover:shadow-glow-secondary
        hover:scale-105 group relative overflow-hidden
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div 
          className={`
            w-16 h-16 mb-4 flex items-center justify-center rounded-lg
            transition-all duration-300 group-hover:scale-110
            ${isHovered ? `shadow-glow-primary` : ''}
          `}
          style={{
            backgroundColor: isHovered ? color : 'hsl(var(--secondary))',
            boxShadow: isHovered ? `0 0 20px ${color}40` : 'none'
          }}
        >
          <div className={`transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm">
          {description}
        </p>
      </div>
      
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`
        }}
      />
    </Card>
  );
};

export default TechSkill;