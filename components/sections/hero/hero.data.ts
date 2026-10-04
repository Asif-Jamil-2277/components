export interface HeroMeta {
  value: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;

  primaryCta: {
    label: string;
    href: string;
  };

  secondaryCta: {
    label: string;
    href: string;
  };

  meta: HeroMeta[];
}

export const heroContent: HeroContent = {
  eyebrow: "Digital experiences, thoughtfully built",

  title: "Design that moves your product forward.",

  description:
    "A refined digital experience built around clarity, performance and meaningful interactions — designed to feel as good as it works.",

  primaryCta: {
    label: "Start a project",
    href: "#contact",
  },

  secondaryCta: {
    label: "Explore our work",
    href: "#work",
  },

  meta: [
    {
      value: "12+",
      label: "Years experience",
    },
    {
      value: "48",
      label: "Products shipped",
    },
    {
      value: "18",
      label: "Global markets",
    },
  ],
};