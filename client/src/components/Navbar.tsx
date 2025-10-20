import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent hover-elevate active-elevate-2"
            data-testid="button-logo"
          >
            SMM Pro
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="link-mobile-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="link-mobile-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="link-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
              data-testid="button-mobile-get-started"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
