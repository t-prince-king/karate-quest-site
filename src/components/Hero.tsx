import { Button } from "@/components/ui/button";
import heroImage from "@/assets/karate-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-primary-foreground">
            Master the Way of
            <span className="block bg-gradient-power bg-clip-text text-transparent">
              Karate
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Discover the ancient art of karate through traditional training, 
            discipline, and respect. Join our dojo and embark on a journey of 
            self-improvement and martial excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="warrior" size="lg" className="text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button variant="sensei" size="lg" className="text-lg px-8 py-6">
              Watch Classes
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-floating"></div>
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-primary/20 rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;