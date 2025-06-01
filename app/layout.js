import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Duckaroo - Brisbane's Premier Aquatic Service | Fish Tank & Pond Cleaning",
  description:
    "Professional aquarium and pond cleaning services in Brisbane. Expert fish tank maintenance, pond setup, and aquatic consultations. Trusted by 1000+ Brisbane families.",
  keywords:
    "fish tank cleaning Brisbane, pond cleaning Brisbane, aquarium maintenance, aquatic services Brisbane, fish tank setup, pond maintenance",
  openGraph: {
    title: "Duckaroo - Brisbane's Premier Aquatic Service",
    description:
      "Professional aquarium and pond cleaning services in Brisbane. Expert maintenance and setup services.",
    url: "https://duckaroo.com.au",
    siteName: "Duckaroo",
    images: [
      {
        url: "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duckaroo - Brisbane Aquatic Services",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duckaroo - Brisbane's Premier Aquatic Service",
    description:
      "Professional aquarium and pond cleaning services in Brisbane.",
    images: [
      "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1739712678/duckaroo-og-image.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-NQQBXXPZ" />
        <GoogleAnalytics gaId="G-DMVQ6Y0D0S" />
        {children}
      </body>
    </html>
  );
}
