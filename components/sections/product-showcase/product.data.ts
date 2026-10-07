export interface ProductItem {
  id: string
  title: string
  description: string
  image: string
  category?: string
  accent?: string
}

export const products: ProductItem[] = [
  {
    id: "ai-studio",
    title: "Google AI Studio",
    description:
      "Build, test and prototype intelligent applications with powerful generative AI tools.",
    image: "/images/ai-studio.jpg",
    category: "AI PLATFORM",
    accent: "#2563EB",
  },

  {
    id: "codex",
    title: "Codex",
    description:
      "Accelerate software development with AI-assisted coding, reasoning and automation.",
    image: "/images/codex.jpg",
    category: "DEVELOPMENT",
    accent: "#4F46E5",
  },

  {
    id: "notebooklm",
    title: "NotebookLM",
    description:
      "Research, analyze and understand your documents with an AI-powered workspace.",
    image: "/images/notebooklm.jpg",
    category: "RESEARCH",
    accent: "#0891B2",
  },

  {
    id: "n8n",
    title: "n8n",
    description:
      "Create powerful automated workflows by connecting your favorite tools and services.",
    image: "/images/n8n.jpg",
    category: "AUTOMATION",
    accent: "#0F172A",
  },

  {
    id: "zapier",
    title: "Zapier",
    description:
      "Connect apps, automate repetitive tasks and build efficient business workflows.",
    image: "/images/zapier.jpg",
    category: "WORKFLOW",
    accent: "#2563EB",
  },
]