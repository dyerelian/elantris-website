import { Smartphone, Sprout, Calendar, TreePine } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Sprout,
      step: "01",
      title: "Plant Your Garden",
      description: "Add your important people like planting seeds in rich soil. Include birthdays, special dates, and notes about what makes each relationship unique."
    },
    {
      icon: Calendar,
      step: "02", 
      title: "Daily Tending",
      description: "Like a gardener's morning routine, Elantris gently reminds you to water a relationship that needs care—someone you haven't connected with recently."
    },
    {
      icon: Smartphone,
      step: "03",
      title: "Nurture Connection",
      description: "Tap the reminder and we'll open your messaging app with a thoughtful, personalized message—like giving water to help your relationship grow."
    },
    {
      icon: TreePine,
      step: "04",
      title: "Watch It Flourish",
      description: "Mark it complete, build your growth streak, and see your relationship garden bloom into a thriving forest of meaningful connections."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple Steps to
            <span className="block text-primary">Cultivate Connection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No complicated setup, no social networks to navigate. Just four natural steps to grow your relationship garden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-nature">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-xl p-6 shadow-sm border border-border/50">
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-primary">Average gardener</span> cultivates{" "}
              <span className="font-semibold text-secondary">12+ growing relationships per month</span> using Elantris
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}