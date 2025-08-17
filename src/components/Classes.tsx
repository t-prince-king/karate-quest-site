import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Classes = () => {
  const classes = [
    {
      name: "Beginner Fundamentals",
      age: "Ages 16+",
      duration: "1 hour",
      description: "Learn basic stances, blocks, punches, and kicks. Perfect for those new to martial arts.",
      schedule: "Mon, Wed, Fri - 6:00 PM",
      belt: "White to Yellow Belt",
      color: "border-accent"
    },
    {
      name: "Intermediate Training",
      age: "Ages 16+",
      duration: "1.5 hours",
      description: "Advanced techniques, kumite (sparring), and kata (forms) practice.",
      schedule: "Tue, Thu - 7:00 PM",
      belt: "Orange to Green Belt",
      color: "border-primary"
    },
    {
      name: "Advanced Mastery",
      age: "Ages 18+",
      duration: "2 hours",
      description: "Expert-level training focusing on competition preparation and teaching skills.",
      schedule: "Sat - 10:00 AM",
      belt: "Brown to Black Belt",
      color: "border-secondary"
    },
    {
      name: "Kids Karate",
      age: "Ages 6-15",
      duration: "45 minutes",
      description: "Fun, engaging karate training that builds confidence, discipline, and fitness.",
      schedule: "Mon, Wed, Fri - 4:30 PM",
      belt: "All Levels",
      color: "border-accent-glow"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">
            Training <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From beginner to black belt, we offer comprehensive training programs 
            designed to meet you wherever you are in your martial arts journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem, index) => (
            <Card key={index} className={`p-6 hover:shadow-dojo transition-all duration-300 border-2 ${classItem.color} bg-card/90 backdrop-blur-sm`}>
              <div className="mb-4">
                <h3 className="text-xl font-bold font-display mb-2 text-foreground">{classItem.name}</h3>
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{classItem.age}</span>
                  <span>{classItem.duration}</span>
                </div>
                <div className="text-sm text-accent font-semibold mb-3">{classItem.belt}</div>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {classItem.description}
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-foreground mb-1">Schedule:</div>
                <div className="text-sm text-primary">{classItem.schedule}</div>
              </div>
              
              <Button variant="strike" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="warrior" size="lg" className="px-12">
            Book a Free Trial Class
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Classes;