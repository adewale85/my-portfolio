import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-drab-nine-13.vercel.app"),

  title: "Adewale | Software Engineer",

  description:
    "Welcome to my portfolio, showcasing my projects, technical skills, and experience as a Software Engineer.",

  openGraph: {
    title: "Adewale | Software Engineer",
    description:
      "Explore my projects, skills, and experience as a Software Engineer.",
    url: "https://my-portfolio-drab-nine-13.vercel.app",
    siteName: "Adewale's Portfolio",
    images: [
      {
        url: "/my_image.jpg",
        width: 1200,
        height: 630,
        alt: "Adewale - Software Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adewale | Software Engineer",
    description:
      "Explore my projects, skills, and experience as a Software Engineer.",
    images: ["/my_image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}





