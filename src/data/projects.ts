export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "SaaS" | "E-commerce" | "Landing Page";
  logo: string;
  banner: string;
  year: string;
  tech: string[];
  color: string;
  overview: string;
  objective: string;
  challenge: {
    title: string;
    description: string;
    points: { title: string; description: string }[];
  };
  outcome: {
    title: string;
    description: string;
    metrics?: { label: string; value: string; description: string }[];
  };
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "claro-de-luna",
    title: "Claro de Luna",
    subtitle: "Jewelry E-commerce Experience",
    category: "E-commerce",
    logo: "/assets/claro-de-luna-logo.png",
    banner: "/assets/claro/01-banner.webp",
    year: "2025",
    tech: ["Laravel Blade", "Tailwind", "Nubir Engine"],
    color: "#0891b2",
    overview: "Claro de Luna is a boutique jewelry brand running on our proprietary Nubir Engine. The legacy platform suffered from a critical 'Trust Gap'—an outdated aesthetic that led to high cart abandonment. We redesigned the experience to be premium yet accessible, proving that a small brand can deliver high-end credibility.",
    objective: "Create a UI that balances elegance with familiarity. We aimed to replace technical jargon (like '10k Gold') with user-centric categories ('Gifts for Mom', 'Anniversary'), while using strategic layout tricks to make a limited catalog feel like an exclusive, curated collection.",
    challenge: {
      title: "Overcoming 'The Scam Aesthetic'",
      description: "In high-ticket e-commerce, low-resolution imagery and outdated layouts are perceived as insecure. We identified three major friction points:",
      points: [
        { title: "Perception of Value", description: "Standard small-grid cards made expensive jewelry look cheap. We significantly increased card size and whitespace to showcase detail." },
        { title: "Technical Friction", description: "Users were forced to understand karats and weights before benefits. We shifted focus to lifestyle-based discovery." },
        { title: "Limited Catalog", description: "A small inventory can look 'empty.' We used high-density layout strategies to turn a small collection into a 'Boutique Curation.'" }
      ]
    },
    outcome: {
      title: "Impact & Strategy",
      description: "The UX phase is complete. The project is currently queued for development within the Nubir Engine ecosystem, with a focus on 'Browsing over Searching' logic.",
      metrics: [
        { label: "Status", value: "Ready", description: "Design handover complete for implementation." },
        { label: "Logic", value: "Boutique", description: "Focused on persona-driven curation." },
        { label: "Validation", value: "Clarity", description: "MS Clarity integration planned for post-launch tracking." }
      ]
    },
    images: [
      "/assets/claro/01-banner.webp",
      "/assets/claro/02.webp",
      "/assets/claro/03.webp",
      "/assets/claro/04.webp",
      "/assets/claro/05.webp",
      "/assets/claro/06.webp"
    ]
  },
  {
    slug: "lta-tax",
    title: "LTA Tax",
    subtitle: "LMS System Migration",
    category: "SaaS",
    logo: "/assets/logo-lta.png",
    banner: "/assets/lta/01-banner.webp",
    year: "2024",
    tech: ["Next.js", "TypeScript", "SCSS", "Supabase"],
    color: "#249480",
    overview: "LTA Academy provides professional certification for accountants. They faced scaling issues with a WordPress site where reliance on plugins created performance bottlenecks and a confusing split between the marketing store and the student classroom.",
    objective: "Migrate the ecosystem to a custom Vue.js 'Command Center' architecture, separating the marketing journey from the student learning platform to reduce cognitive load and improve performance.",
    challenge: {
      title: "Restructuring the Student Journey",
      description: "The original platform felt messy because it attempted to sell and teach in the same interface. Key friction points included:",
      points: [
        { title: "Navigation Confusion", description: "Students couldn't distinguish between courses they owned ('My Library') and those in the 'Catalog'." },
        { title: "High Friction", description: "There was no clear 'Resume Course' path, requiring multiple clicks to continue learning." },
        { title: "Scaling Blocks", description: "Theme-based CMS limitations prevented the implementation of dynamic live event features." }
      ]
    },
    outcome: {
      title: "Platform Outcome",
      description: "The migration transformed LTA from a simple website into a true EdTech platform, significantly improving student engagement.",
      metrics: [
        { label: "Onboarding", value: "SPAs", description: "Instant transitions between lessons with zero reloads." },
        { label: "Engagement", value: "Visual", description: "Progress tracking bars implemented across 'My Library'." },
        { label: "Structure", value: "Scalable", description: "Complete separation of Sales and Study environments." }
      ]
    },
    images: [
      "/assets/lta/01-banner.webp",
      "/assets/lta/02-dashboard.jpg",
      "/assets/lta/03-latintax.png",
      "/assets/lta/04-cursos.jpg",
      "/assets/lta/05-mis-cursos.jpg",
      "/assets/lta/06-navbar.png"
    ]
  },
  {
    slug: "neumaprotect",
    title: "Neuma",
    subtitle: "Health & Wellness Platform",
    category: "E-commerce",
    logo: "/assets/logo-lta.png",
    banner: "/assets/neuma/hero.jpg",
    year: "2024",
    tech: ["React", "Motion", "Tailwind"],
    color: "#0891b2",
    overview: "Neumaprotect is a specialized wellness platform for medical-grade supplements. In the health industry, users require extreme levels of validation. I redesigned the interface to feel 'Scientific yet Approachable,' bridging the gap between sterile medical apps and friendly wellness brands.",
    objective: "Design an 'Architecture of Trust' that simplifies complex product information. The goal was to build a high-conversion flow by making 'Product Benefits' the hero of the user experience.",
    challenge: {
      title: "Balancing Ethics with E-commerce",
      description: "Standard templates feel too commercial for health products. We had to solve for scientific credibility without looking technical:",
      points: [
        { title: "The Trust Gap", description: "Used a clinical-cyan palette and precise typography to evoke safety and legitimacy." },
        { title: "Info Overload", description: "Health instructions are dense. I prioritized IA to answer 'Benefits' and 'Ingredients' upfront." },
        { title: "Mobile Wellness", description: "Optimized for 'on-the-go' research with a mobile-first, high-trust checkout flow." }
      ]
    },
    outcome: {
      title: "Project Impact",
      description: "The redesign provided Neuma with a robust digital storefront. User testing confirmed that the clinical aesthetic increased perceived product legitimacy by +40%.",
      metrics: [
        { label: "Legitimacy", value: "+40%", description: "Increase in perceived brand trust during UX testing." },
        { label: "Scalability", value: "UI Kit", description: "Custom kit built for rapid catalog expansion." },
        { label: "Experience", value: "PDP", description: "Redesigned product pages to answer all medical FAQs upfront." }
      ]
    },
    images: [
      "/assets/neuma/hero.jpg",
      "/assets/neuma/01-Inicio.jpg",
      "/assets/neuma/02-nosotros.jpg",
      "/assets/neuma/03-Catalogo.jpg",
      "/assets/neuma/04-Carrito.jpg",
      "/assets/neuma/05-Checkout.jpg",
      "/assets/neuma/06-Detalle.jpg"
    ]
  },
  {
    slug: "terravento",
    title: "Terravento",
    subtitle: "The 'Airbnb' for Event Venues",
    category: "SaaS",
    logo: "/assets/terravento/terravento-logo.webp",
    banner: "/assets/terravento/banner-terravento.webp",
    year: "2024",
    tech: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
    color: "#EF5949",
    overview: "Terravento is a centralized platform for searching and reserving event venues in Guadalajara. Before Terravento, the market was fragmented and unorganized, requiring users to search through social media one-by-one.",
    objective: "Design a 'Chill' and approachable brand identity and build an MVP capable of handling complex booking logic. The goal was to give owners a management center, not just a list.",
    challenge: {
      title: "Decentralized Data Strategy",
      description: "The major hurdle was the lack of standardization in how venue owners managed their businesses:",
      points: [
        { title: "Incentivized Digitization", description: "We built a 'Management Center' with calendars to convince owners to move their offline logs into our platform." },
        { title: "Abstracting Logic", description: "Different venues have different rules. We abstracted these into a flexible system using Laravel/Vue." },
        { title: "Chill Vibes", description: "Crafted a friendly, safe UI to encourage booking through a completely new platform." }
      ]
    },
    outcome: {
      title: "Market Traction",
      description: "Successfully validated the business model as the primary method for finding terraces in the region.",
      metrics: [
        { label: "Active Users", value: "4,000+", description: "Validated user base within the first market phase." },
        { label: "Inventory", value: "Catalog", description: "Created the region's first centralized venue database." },
        { label: "Status", value: "MVP", description: "Validated complex booking logic across diverse business models." }
      ]
    },
    images: [
      "/assets/terravento/banner-terravento.webp",
      "/assets/terravento/terravento-logo.webp"
    ]
  }
];
