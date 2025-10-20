# Design Guidelines: Social Media Manager Portfolio Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from Behance, Dribbble, and modern creative portfolios. This portfolio needs to demonstrate visual creativity while maintaining professional credibility for a social media expert.

## Core Design Elements

### A. Color Palette
**Primary Purple Palette:**
- Primary: 270 91% 65% (vibrant purple)
- Secondary: 270 95% 75% (lighter purple)
- Accent: 280 89% 60% (purple-pink)

**Dark Mode:**
- Background: 270 50% 7% (deep purple-black)
- Surface: 270 40% 12% (dark purple-gray)
- Text: 270 10% 95% (off-white)

**Light Mode:**
- Background: 0 0% 100% (pure white)
- Surface: 270 60% 97% (light purple tint)
- Text: 270 50% 15% (dark purple-gray)

**Supporting Colors:**
- Success: 142 76% 45% (green for metrics/growth)
- Muted text: 270 15% 60%

### B. Typography
**Font Families:**
- Headlines: 'Inter' or 'Poppins' (bold, modern)
- Body: 'Inter' (clean, readable)
- Accent/Numbers: 'Space Grotesk' for statistics

**Scale:**
- Hero Headline: text-6xl lg:text-7xl font-bold
- Section Headers: text-4xl lg:text-5xl font-bold
- Subheadings: text-xl lg:text-2xl
- Body: text-base lg:text-lg
- Small text: text-sm

### C. Layout System
**Spacing Units:** Consistently use tailwind units of 4, 6, 8, 12, 16, 20, 24 for margins and padding

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6
- Content sections: max-w-6xl
- Text content: max-w-3xl

**Vertical Rhythm:**
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: space-y-8 to space-y-12

### D. Component Library

**Hero Section:**
- Full-viewport (min-h-screen) split layout
- Left: Compelling headline, subheadline describing expertise, primary CTA button, social proof metric (e.g., "500K+ Audience Reached")
- Right: Professional portrait/workspace image with purple gradient overlay
- Floating navigation bar with logo, menu items, "Get Started" CTA

**Services Section:**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Service cards with icons, titles, brief descriptions
- Services: Content Creation, Strategy & Planning, Analytics & Reporting, Community Management, Influencer Partnerships, Paid Advertising
- Hover effect: subtle scale and purple glow

**Portfolio Gallery:**
- Masonry/Pinterest-style grid showcasing social media campaigns
- Mix of single and double-width cards
- Each card: Campaign thumbnail, client name, platform icons, key metric
- Lightbox/modal on click showing full case study with before/after metrics
- Filter buttons: All, Instagram, LinkedIn, Twitter, Facebook

**Metrics Showcase:**
- Full-width banner with gradient purple background
- 4-column grid displaying impressive numbers
- Animated counter effect: Total Followers Managed, Engagement Rate, Campaigns Launched, Client Satisfaction
- Large numbers with "+" suffix

**Testimonials:**
- 2-column layout with client quotes
- Each card: Client photo, quote, name, company, platform logo
- Purple quotation mark decoration

**About Section:**
- 2-column layout: Photo on left, bio on right
- Professional headshot with purple border accent
- Bio highlighting expertise, certifications, notable achievements
- Skills tags with purple backgrounds

**Contact Section:**
- 2-column split: Form on left, contact info on right
- Form fields: Name, Email, Service Interest (dropdown), Project Details (textarea), Budget Range
- Submit button with purple gradient
- Right side: Email, phone, social links, availability status ("Available for new projects")

**Footer:**
- Dark purple background
- 3-column layout: Quick links, Services, Social media links
- Newsletter signup with inline form
- Copyright and privacy links

### E. Visual Elements

**Icons:** Heroicons via CDN - solid style for filled states, outline for default

**Images Section:**
- Hero: Professional portrait or workspace setup showing social media management in action (laptop with dashboards, phone with content)
- Portfolio: Authentic social media campaign screenshots, content calendars, analytics dashboards, branded graphics
- About: Professional headshot with confident, approachable expression
- Background elements: Subtle purple gradient orbs/blurs for depth

**Micro-interactions:**
- Button hover: scale-105 with shadow enhancement
- Card hover: translate-y-[-4px] with shadow
- Navigation: underline animation on hover
- Smooth scroll behavior between sections

**Shadows:**
- Cards: shadow-lg with purple tint
- Elevated elements: shadow-xl
- Buttons: shadow-md increasing to shadow-lg on hover

### F. Unique Design Decisions

**Purple Integration Strategy:**
- Use purple boldly in hero gradient, CTA buttons, and accent elements
- Don't overuse - balance with white/neutral spaces
- Purple glow effects on hover states for premium feel

**Portfolio Presentation:**
- Showcase actual work with real metrics (impressions, engagement rate, follower growth)
- Platform diversity: demonstrate multi-platform expertise
- Visual hierarchy: largest cards for most impressive campaigns

**Trust Signals:**
- Client logos band below hero
- Platform certifications/badges (Meta Blueprint, Google Analytics)
- Live social proof: "Currently managing X accounts"

**Mobile-First Responsive:**
- All multi-column layouts stack to single column on mobile
- Touch-friendly button sizes (min-h-12)
- Simplified navigation: hamburger menu with slide-in drawer

This design balances creative flair with professional credibility, using purple strategically to create memorable brand identity while letting portfolio work take center stage.