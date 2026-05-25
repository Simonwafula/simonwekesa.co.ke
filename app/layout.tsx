import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simon Wekesa — Data, Public Systems & Decision-Making",
  description:
    "Personal website of Simon Wekesa, an economist, statistician, data analyst, public sector professional, and systems thinker working across data, planning, public finance, monitoring and evaluation, and digital systems.",
  keywords: [
    "Simon Wekesa",
    "economist",
    "statistician",
    "data analyst",
    "data scientist",
    "public finance",
    "economic planning",
    "monitoring and evaluation",
    "county statistics",
    "data systems",
    "Kenya",
    "Mstatili",
  ],
  metadataBase: new URL("https://simonwekesa.co.ke"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Simon Wekesa — Quiet work on complex problems",
    description: "Economics, statistics, data science, public systems, planning, and decision support.",
    url: "https://simonwekesa.co.ke",
    siteName: "Simon Wekesa",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Abstract rectangles and lines for Simon Wekesa",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Wekesa — Quiet work on complex problems",
    description: "Economics, statistics, data science, public systems, planning, and decision support.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
