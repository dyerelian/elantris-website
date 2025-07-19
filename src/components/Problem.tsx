import { Leaf, MessageCircle, TreePine } from "lucide-react";

export function Problem() {
  const statistics = [
    {
      icon: Leaf,
      stat: "61%",
      description: "of young adults report serious loneliness"
    },
    {
      icon: MessageCircle,
      stat: "3.2x",
      description: "increase in loneliness since social media adoption"
    },
    {
      icon: TreePine,
      stat: "90%",
      description: "of people want to strengthen personal relationships"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Relationships Wither
            <span className="block text-primary">Without Tending</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Like plants in an untended garden, meaningful relationships fade without consistent care. 
            The pace of modern life makes it hard to nurture the connections that truly flourish.
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

        <div className="bg-card rounded-2xl p-8 shadow-nature border border-border/50">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              The Garden of Connection Needs Daily Care
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't lack the desire to connect—we lack the daily habits that keep relationships flourishing. Like a gardener tends their plants, Elantris helps you cultivate lasting bonds through consistent, thoughtful care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}