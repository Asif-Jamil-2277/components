export interface ShowcaseItem {
  id: string
  number: string
  label: string
  title: string
  description: string
  image: string
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "showcase-01",
    number: "01",
    label: "AI PLATFORM",
    title: "Google AI Studio",
    description:
      "Build, test and prototype powerful AI experiences with modern generative AI tools.",
    image: "/images/ai-studio.jpg",
  },
  {
    id: "showcase-02",
    number: "02",
    label: "DEVELOPMENT",
    title: "Codex",
    description:
      "Accelerate software development with AI-assisted coding, reasoning and automation.",
    image: "/images/codex.jpg",
  },
  {
    id: "showcase-03",
    number: "03",
    label: "RESEARCH",
    title: "NotebookLM",
    description:
      "Research, analyze and understand your documents with an AI-powered workspace.",
    image: "/images/notebooklm.jpg",
  },
  {
    id: "showcase-04",
    number: "04",
    label: "AUTOMATION",
    title: "n8n",
    description:
      "Create powerful automated workflows by connecting your favorite tools and services.",
    image: "/images/n8n.jpg",
  },
  {
    id: "showcase-05",
    number: "05",
    label: "WORKFLOW",
    title: "Zapier",
    description:
      "Connect apps, automate repetitive tasks and build efficient business workflows.",
    image: "/images/zapier.jpg",
  },
]