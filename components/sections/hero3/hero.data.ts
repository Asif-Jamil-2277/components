export interface HeroPerson {
  image: string;
  alt: string;
}

export interface HeroFeature {
  number: string;
  title: string;
  description: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;

  primaryCta: {
    label: string;
    href: string;
  };

  secondaryCta: {
    label: string;
    href: string;
  };

  people: HeroPerson[];

  community: {
    label: string;
    value: string;
  };

  rating: {
    value: string;
    label: string;
  };

  features: HeroFeature[];
}

export const heroContent: HeroContent = {
  eyebrow: "Digital Products × Design × Technology",

  title: "Build digital",

  highlightedTitle: "experiences",

  description:
    "We design and build meaningful digital products that help businesses grow, connect with people and move forward.",

  primaryCta: {
    label: "Get Started",
    href: "#contact",
  },

  secondaryCta: {
    label: "Explore Our Work",
    href: "#work",
  },

  people: [
    {
      image: "/images/hero3-person-1.jpg",
      alt: "Creative professional",
    },
    {
      image: "/images/hero3-person-2.jpg",
      alt: "Business professional",
    },
    {
      image: "/images/hero3-person-3.jpg",
      alt: "Creative woman",
    },
    {
      image: "/images/hero3-person-4.jpg",
      alt: "Young professional",
    },
    {
      image: "/images/hero3-person-5.jpg",
      alt: "Digital professional",
    },
  ],

  community: {
    label: "Active Community",
    value: "50K+ Members",
  },

  rating: {
    value: "4.8/5",
    label: "Client satisfaction",
  },

  features: [
    {
      number: "01",
      title: "Strategy",
      description: "Clear direction",
    },
    {
      number: "02",
      title: "Design",
      description: "Thoughtful experiences",
    },
    {
      number: "03",
      title: "Technology",
      description: "Built to scale",
    },
  ],
};