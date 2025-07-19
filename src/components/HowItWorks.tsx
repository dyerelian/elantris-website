import { Smartphone, Users, Calendar, Heart } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Users,
      step: "01",
      title: "Add Your People",
      description: "Import contacts from your phone or add them manually. Include birthdays, special dates, and notes about what matters to them."
    },
    {
      icon: Calendar,
      step: "02", 
      title: "Get Daily Nudges",
      description: "Each day, Elantris picks someone from your circle you haven't connected with recently and sends you a gentle reminder."
    },
    {
      icon: Smartphone,
      step: "03",
      title: "Send That Text",
      description: "Tap the notification and we'll open your messaging app with a thoughtful, pre-written message you can personalize and send."
    },
    {
      icon: Heart,
      step: "04",
      title: "Build the Habit",
      description: "Mark it complete, build your streak, and watch meaningful relationships flourish through consistent, caring outreach."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple Steps to
            <span className="block text-primary">Stronger Relationships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No complicated setup, no social networks to navigate. Just four simple steps to transform your relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-warm">
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
              <span className="font-semibold text-primary">Average user</span> reconnects with{" "}
              <span className="font-semibold text-secondary">12+ people per month</span> using Elantris
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}