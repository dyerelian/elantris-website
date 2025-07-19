import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-2xl font-bold">Elantris</span>
          </div>
          
          <p className="text-background/70 mb-6 max-w-md mx-auto">
            Reconnecting the world one meaningful conversation at a time.
          </p>
          
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/50 text-sm">
              © 2024 Elantris. Made with ❤️ for human connection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}