import { Card } from "@/components/ui/card";

const Instructors = () => {
  const instructors = [
    {
      name: "Sensei Takeshi Yamamoto",
      rank: "8th Dan Black Belt",
      experience: "40+ Years",
      specialties: ["Traditional Kata", "Competition Kumite", "Self-Defense"],
      bio: "Trained directly under Grand Master Funakoshi's lineage in Okinawa. Multiple-time national champion and founder of Dragon Fist Dojo."
    },
    {
      name: "Sensei Maria Rodriguez",
      rank: "5th Dan Black Belt",
      experience: "20+ Years",
      specialties: ["Youth Training", "Women's Self-Defense", "Forms"],
      bio: "Former Olympic team member specializing in youth development and empowering students through martial arts excellence."
    },
    {
      name: "Sempai David Chen",
      rank: "3rd Dan Black Belt",
      experience: "15+ Years",
      specialties: ["Sparring", "Conditioning", "Modern Applications"],
      bio: "Former MMA fighter who brings modern training methods while respecting traditional karate principles and techniques."
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">
            Meet Your <span className="text-primary">Senseis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from masters who have dedicated their lives to the art of karate. 
            Our instructors bring decades of experience and authentic traditional training.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-dojo transition-all duration-300 border-none bg-card/90 backdrop-blur-sm">
              <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center shadow-strike">
                <span className="text-3xl text-primary-foreground">🥋</span>
              </div>
              
              <h3 className="text-xl font-bold font-display mb-2 text-foreground">{instructor.name}</h3>
              <div className="text-primary font-semibold mb-1">{instructor.rank}</div>
              <div className="text-accent text-sm mb-4">{instructor.experience}</div>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {instructor.bio}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {instructor.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 shadow-strike max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-display mb-4 text-foreground">Join Our Teaching Legacy</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every instructor at Dragon Fist Dojo has walked the path from white belt to black belt and beyond. 
              They understand the journey because they've lived it, and they're here to guide you every step of the way.
            </p>
            <div className="text-sm text-accent italic">
              "A good teacher is like a candle - it consumes itself to light the way for others." - Traditional Saying
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;