import { Heart, MessageCircle, Users } from "lucide-react";

export function Problem() {
  const statistics = [
    {
      icon: Heart,
      stat: "61%",
      description: "of young adults report serious loneliness"
    },
    {
      icon: MessageCircle,
      stat: "3.2x",
      description: "increase in loneliness since social media adoption"
    },
    {
      icon: Users,
      stat: "90%",
      description: "of people want to strengthen personal relationships"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We're More Connected,
            <span className="block text-primary">Yet More Alone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Despite having hundreds of social media "friends," meaningful relationships are fading. 
            The pace of modern life makes it hard to maintain the personal connections that truly matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {statistics.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-warm border border-border/50">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              The Real Problem Isn't Technology
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It's that we've lost the simple habits that keep relationships alive. We don't lack the desire to connect—we lack the structure to make it happen consistently. Elantris brings back the human touch in a digital world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}