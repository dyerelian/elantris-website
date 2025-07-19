import { useState } from "react";
import { HeroButton } from "@/components/ui/hero-button";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to add you to the waitlist.",
      });
      return;
    }
    
    // Store email in localStorage for now (in real app, send to backend)
    const waitlistEmails = JSON.parse(localStorage.getItem('elantrisWaitlist') || '[]');
    if (!waitlistEmails.includes(email)) {
      waitlistEmails.push(email);
      localStorage.setItem('elantrisWaitlist', JSON.stringify(waitlistEmails));
    }
    
    toast({
      title: "Welcome to the Elantris family! 🌟",
      description: "You're on the waitlist. We'll let you know when we launch!",
    });
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Reconnect with the
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              people who matter
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            In a world that's become digitally disconnected, Elantris helps you rebuild meaningful relationships through simple daily reminders and heartfelt outreach.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-4 rounded-xl text-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent min-w-[300px]"
              />
              <HeroButton type="submit" variant="hero">
                Join the Waitlist
              </HeroButton>
            </form>
          </div>
          
          <div className="text-white/70 text-sm">
            🌟 Be among the first to fight digital loneliness
          </div>
        </div>
      </div>
    </section>
  );
}