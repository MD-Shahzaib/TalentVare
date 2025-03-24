import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalentVare | Find Your Dream Job & Advance Your Career",
  description:
    "Discover top job opportunities, connect with leading companies, and take your career to the next level with TalentVare's personalized job matching platform.",
  keywords: [
    "job search",
    "career opportunities",
    "find jobs",
    "remote work",
    "UI/UX designer jobs",
    "tech jobs",
    "job matching",
    "professional networking",
    "resume builder",
    "job tracker",
  ],
  authors: [{ name: "TalentVare" }],
  creator: "TalentVare",
  publisher: "TalentVare Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talentvare.com",
    siteName: "TalentVare",
    title: "TalentVare | Find Your Dream Job & Advance Your Career",
    description:
      "Discover top job opportunities, connect with leading companies, and take your career to the next level with TalentVare's personalized job matching platform.",
    images: [
      {
        url: "https://talentvare.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TalentVare - Your Career Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentVare | Find Your Dream Job & Advance Your Career",
    description:
      "Discover top job opportunities, connect with leading companies, and take your career to the next level with TalentVare's personalized job matching platform.",
    creator: "@talentvare",
    images: ["https://talentvare.com/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://talentvare.com",
    languages: {
      "en-US": "https://talentvare.com",
    },
  },
  category: "Career & Jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
