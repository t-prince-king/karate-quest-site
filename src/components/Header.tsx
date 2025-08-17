import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">道</span>
          </div>
          <h1 className="text-xl font-bold font-display">Dragon Fist Dojo</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#classes" className="text-foreground hover:text-primary transition-colors">Classes</a>
          <a href="#instructors" className="text-foreground hover:text-primary transition-colors">Instructors</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <Button variant="dojo" size="lg">
          Join Now
        </Button>
      </div>
    </header>
  );
};

export default Header;