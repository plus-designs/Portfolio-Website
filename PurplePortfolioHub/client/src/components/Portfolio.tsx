import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { useState } from "react";
import portfolio1 from "@assets/stock_images/engaging_social_medi_3d726167.jpg";
import portfolio2 from "@assets/stock_images/social_media_analyti_b00ef6cb.jpg";
import portfolio3 from "@assets/stock_images/creative_brand_conte_74e76f60.jpg";
import portfolio4 from "@assets/stock_images/social_media_content_ffba3eec.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Fashion Brand Campaign",
    platform: "instagram",
    metric: "+250% Engagement",
    description: "Created viral content series that boosted brand awareness",
  },
  {
    image: portfolio2,
    title: "Tech Startup Growth",
    platform: "linkedin",
    metric: "+180K Followers",
    description: "Built thought leadership through strategic content",
  },
  {
    image: portfolio3,
    title: "E-commerce Launch",
    platform: "instagram",
    metric: "+320% ROI",
    description: "End-to-end campaign driving sales and conversions",
  },
  {
    image: portfolio4,
    title: "Content Strategy",
    platform: "twitter",
    metric: "2M+ Impressions",
    description: "Viral campaign with high engagement rates",
  },
];

const filters = ["All", "Instagram", "LinkedIn", "Twitter"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === "All" || item.platform.toLowerCase() === activeFilter.toLowerCase()
  );

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <SiInstagram className="h-4 w-4" />;
      case "linkedin":
        return <SiLinkedin className="h-4 w-4" />;
      case "twitter":
        return <SiX className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="text-portfolio-title">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-description">
            Real campaigns, real results. See how I've helped brands grow their social media presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "default" : "secondary"}
              className="cursor-pointer px-6 py-2 text-sm"
              onClick={() => setActiveFilter(filter)}
              data-testid={`button-filter-${filter.toLowerCase()}`}
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 group"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-portfolio-${index}`}
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 backdrop-blur-sm">
                    {getPlatformIcon(item.platform)}
                    <span className="ml-2 capitalize">{item.platform}</span>
                  </Badge>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold" data-testid={`text-portfolio-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-portfolio-description-${index}`}>
                  {item.description}
                </p>
                <div className="pt-2">
                  <span className="text-2xl font-bold text-primary" data-testid={`text-portfolio-metric-${index}`}>
                    {item.metric}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
