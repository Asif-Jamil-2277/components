import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

/* =========================================================
   FONT
========================================================= */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F6F8FB",
  colorScheme: "light",
};

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://yourbrand.com"),

  title: {
    default: "YourBrand — AI Powered Digital Platform",
    template: "%s | YourBrand",
  },

  description:
    "YourBrand is an AI-powered digital platform for modern workflows, productivity, automation and digital experiences.",

  applicationName: "YourBrand",

  generator: "Next.js",

  keywords: [
    "AI platform",
    "AI tools",
    "digital platform",
    "AI automation",
    "productivity",
    "digital solutions",
  ],

  authors: [
    {
      name: "YourBrand",
      url: "https://yourbrand.com",
    },
  ],

  creator: "YourBrand",
  publisher: "YourBrand",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourbrand.com",
    siteName: "YourBrand",
    title: "YourBrand — AI Powered Digital Platform",
    description:
      "Explore AI-powered tools, automation, productivity and modern digital solutions with YourBrand.",
  },

  twitter: {
    card: "summary_large_image",
    title: "YourBrand — AI Powered Digital Platform",
    description:
      "AI-powered tools, automation and modern digital solutions for better workflows.",
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen
          bg-[#F6F8FB]
          font-[Poppins]
          text-slate-950
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}