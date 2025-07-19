import { Calendar, MessageSquare, Gift, TrendingUp } from "lucide-react";

export function Solution() {
  const features = [
    {
      icon: MessageSquare,
      title: "Daily Connection Prompts",
      description: "Get a gentle nudge each day to reach out to someone who matters. One text, one connection, one step closer."
    },
    {
      icon: Calendar,
      title: "Smart Event Reminders",
      description: "Never miss a birthday, holiday, or special moment. We help you remember so your relationships feel remembered."
    },
    {
      icon: Gift,
      title: "Meaningful Outreach",
      description: "Pre-filled message templates that feel personal, not robotic. Start conversations that actually matter."
    },
    {
      icon: TrendingUp,
      title: "Relationship Growth",
      description: "Track your connection streaks and watch your social circle strengthen one interaction at a time."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Rebuilding Connection,
            <span className="block text-secondary">One Text at a Time</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elantris makes staying in touch effortless. No complex social networks, no overwhelming features—just simple, 
            powerful tools that help you nurture the relationships that matter most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-warm transition-all duration-300 border border-border/50 hover:border-primary/20">
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
            Based on a Proven System
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Elantris isn't just another app—it's built on a real-world system that one person used to maintain hundreds of meaningful relationships. Now we're making it available to everyone.
          </p>
        </div>
      </div>
    </section>
  );
}