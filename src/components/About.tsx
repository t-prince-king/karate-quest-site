import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Respect",
      description: "Honor yourself, your opponents, and the art of karate",
      icon: "🙏"
    },
    {
      title: "Discipline",
      description: "Develop mental and physical strength through consistent practice",
      icon: "💪"
    },
    {
      title: "Excellence",
      description: "Strive for perfection in technique and character",
      icon: "⭐"
    },
    {
      title: "Tradition",
      description: "Preserve and honor the ancient ways of martial arts",
      icon: "🥋"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">
            The Way of the <span className="text-primary">Dragon Fist</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 30 years, Dragon Fist Dojo has been a beacon of traditional karate training. 
            We believe that martial arts is not just about physical technique, but about developing 
            the complete person - mind, body, and spirit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-dojo transition-all duration-300 border-none bg-card/80 backdrop-blur-sm">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold font-display mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 shadow-strike">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold font-display mb-4 text-foreground">Our Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Karate-do is more than fighting - it's a way of life. Through dedicated training, 
                students develop not only physical prowess but also mental fortitude, emotional 
                balance, and spiritual growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our traditional approach emphasizes the fundamental principles that have been 
                passed down through generations of martial artists, ensuring authenticity in 
                every technique and philosophy we teach.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto flex items-center justify-center shadow-focus">
                <span className="text-6xl text-primary-foreground">道</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">The Way (道 - Dō)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;