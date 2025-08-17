const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-power rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">道</span>
              </div>
              <h3 className="text-xl font-bold font-display">Dragon Fist Dojo</h3>
            </div>
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Empowering students through traditional karate training for over 30 years. 
              Join our family and discover the way of the warrior.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-glow transition-colors">
                <span className="text-xs text-primary-foreground">f</span>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-glow transition-colors">
                <span className="text-xs text-primary-foreground">t</span>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-glow transition-colors">
                <span className="text-xs text-primary-foreground">i</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#classes" className="hover:text-accent transition-colors">Classes</a></li>
              <li><a href="#instructors" className="hover:text-accent transition-colors">Instructors</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold font-display mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground/80 text-sm">
              <li>123 Martial Arts Way</li>
              <li>Dragon City, DC 12345</li>
              <li>(555) KARATE-1</li>
              <li>info@dragonfistdojo.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 Dragon Fist Dojo. All rights reserved. | 
            <span className="ml-2">The Way of the Warrior Lives On</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;