import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";
import { SiInstagram, SiLinkedin, SiX, SiFacebook } from "react-icons/si";
import heroImage from "@assets/stock_images/professional_social__002ef0fb.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge className="w-fit" data-testid="badge-hero-status">
              <TrendingUp className="w-3 h-3 mr-2" />
              Available for New Projects
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                  Social Presence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-hero-description">
                Expert social media management that drives engagement, builds communities, and delivers measurable results for your brand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                data-testid="button-hero-cta"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                data-testid="button-hero-portfolio"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="space-y-1" data-testid="stat-followers">
                <div className="text-3xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Followers Managed</div>
              </div>
              <div className="space-y-1" data-testid="stat-engagement">
                <div className="text-3xl font-bold text-chart-2">85%</div>
                <div className="text-sm text-muted-foreground">Avg. Engagement</div>
              </div>
              <div className="space-y-1" data-testid="stat-campaigns">
                <div className="text-3xl font-bold text-chart-3">150+</div>
                <div className="text-sm text-muted-foreground">Campaigns</div>
              </div>
              <div className="space-y-1" data-testid="stat-satisfaction">
                <div className="text-3xl font-bold text-chart-4">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* Social Platforms */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Platforms:</span>
              <div className="flex gap-3">
                <SiInstagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" data-testid="icon-instagram" />
                <SiLinkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" data-testid="icon-linkedin" />
                <SiX className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" data-testid="icon-twitter" />
                <SiFacebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" data-testid="icon-facebook" />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Social Media Manager at work"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
