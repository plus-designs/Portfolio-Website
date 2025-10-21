import { SiInstagram, SiLinkedin, SiX, SiFacebook } from "react-icons/si";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              SMM Pro
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional social media management that delivers results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-about"
              >
                About
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Content Creation</p>
              <p>Strategy Planning</p>
              <p>Analytics</p>
              <p>Community Management</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Me</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 SMM Pro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
