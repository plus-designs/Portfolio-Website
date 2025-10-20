import { Card } from "@/components/ui/card";
import { Lightbulb, PenTool, BarChart3, Users, Megaphone, Target } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging, high-quality content tailored to your brand voice and audience preferences.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Data-driven social media strategies that align with your business goals and maximize ROI.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive performance tracking with actionable insights to optimize your campaigns.",
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Build and nurture engaged communities through authentic interactions and timely responses.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Targeted ad campaigns that drive conversions and deliver measurable business results.",
  },
  {
    icon: Megaphone,
    title: "Brand Partnerships",
    description: "Influencer collaborations and strategic partnerships to amplify your brand reach.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="text-services-title">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive social media solutions designed to elevate your brand and drive meaningful engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
