import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">
            Begin Your <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start training? Contact us today to schedule your free trial class 
            and discover the transformative power of karate.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-dojo border-none bg-card/90 backdrop-blur-sm">
            <h3 className="text-2xl font-bold font-display mb-6 text-foreground">Get Started Today</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-border rounded-md bg-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-border rounded-md bg-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-border rounded-md bg-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-border rounded-md bg-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Interested In</label>
                <select className="w-full p-3 border border-border rounded-md bg-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>Free Trial Class</option>
                  <option>Beginner Program</option>
                  <option>Kids Classes</option>
                  <option>Advanced Training</option>
                  <option>General Information</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea 
                  className="w-full p-3 border border-border rounded-md bg-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all h-32"
                  placeholder="Tell us about your goals and any questions you have..."
                ></textarea>
              </div>
              
              <Button variant="warrior" size="lg" className="w-full">
                Send Message & Book Trial
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 border-none bg-card/90 backdrop-blur-sm shadow-strike">
              <h4 className="text-xl font-bold font-display mb-4 text-foreground">Dojo Location</h4>
              <div className="space-y-3 text-muted-foreground">
                <p>🏢 123 Martial Arts Way<br />Dragon City, DC 12345</p>
                <p>📞 (555) KARATE-1</p>
                <p>📧 info@dragonfistdojo.com</p>
              </div>
            </Card>
            
            <Card className="p-6 border-none bg-card/90 backdrop-blur-sm shadow-strike">
              <h4 className="text-xl font-bold font-display mb-4 text-foreground">Training Hours</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>4:30 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-none bg-gradient-hero text-primary-foreground shadow-focus">
              <h4 className="text-xl font-bold font-display mb-4">Free Trial Offer</h4>
              <p className="mb-4">
                Experience a full class at no cost! See if our traditional karate training 
                is right for you before making any commitment.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Full access to class</li>
                <li>✓ Meet your instructors</li>
                <li>✓ No obligation</li>
                <li>✓ All skill levels welcome</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;