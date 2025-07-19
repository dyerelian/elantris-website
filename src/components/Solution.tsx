import { Calendar, MessageSquare, Sprout, TrendingUp } from "lucide-react";

export function Solution() {
  const features = [
    {
      icon: MessageSquare,
      title: "Daily Cultivation Prompts",
      description: "Get a gentle reminder each day to nurture someone in your garden of relationships. One conversation, one connection, one step toward growth."
    },
    {
      icon: Calendar,
      title: "Smart Event Reminders",
      description: "Never miss a birthday, holiday, or special moment. We help you remember so your relationships feel remembered."
    },
    {
      icon: Sprout,
      title: "Seeds of Connection",
      description: "Thoughtful message templates that feel personal and genuine. Plant conversations that grow into meaningful relationships."
    },
    {
      icon: TrendingUp,
      title: "Watch Relationships Flourish",
      description: "Track your connection growth and see your social garden bloom with stronger bonds, one interaction at a time."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Growing Connection,
            <span className="block text-secondary">One Seed at a Time</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elantris is your digital gardening companion for relationships. No overwhelming features, no complex social networks—just simple, 
            natural tools that help you cultivate the connections that matter most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-nature transition-all duration-300 border border-border/50 hover:border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Rooted in Natural Growth
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Elantris grows from a proven relationship system—like learning gardening from a master cultivator. Now we're sharing these time-tested techniques with everyone.
          </p>
        </div>
      </div>
    </section>
  );
}