import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";
import aboutImage from "@assets/stock_images/professional_female__8330bb2d.jpg";

const skills = [
  "Social Media Strategy",
  "Content Creation",
  "Analytics & Insights",
  "Community Management",
  "Paid Advertising",
  "Influencer Marketing",
  "Brand Development",
  "SEO & Copywriting",
];

const certifications = [
  "Meta Blueprint Certified",
  "Google Analytics Certified",
  "HubSpot Social Media Certified",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-chart-2/30 rounded-2xl blur-2xl" />
              <Card className="relative overflow-hidden p-1">
                <img
                  src={aboutImage}
                  alt="Social Media Manager"
                  className="w-full h-auto rounded-lg object-cover"
                  data-testid="img-about"
                />
              </Card>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="text-about-title">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-about-p1">
                With over 7 years of experience in social media management, I've helped brands across various industries build meaningful connections with their audiences and achieve remarkable growth.
              </p>
              <p data-testid="text-about-p2">
                My approach combines creative storytelling with data-driven strategies to deliver campaigns that not only look great but also drive real business results. From startups to established brands, I specialize in creating authentic, engaging content that resonates.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm"
                    data-testid={`badge-skill-${index}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                    data-testid={`cert-${index}`}
                  >
                    <CheckCircle className="h-4 w-4 text-chart-4" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
