import ProfileSection from "@/components/ProfileSection";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Section - Left Side */}
          <div className="lg:col-span-1">
            <ProfileSection />
          </div>
          
          {/* Main Content - Right Side */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <TechStack />
          </div>
        </div>
        
        {/* Projects Section - Full Width */}
        <div className="w-full">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Index;
