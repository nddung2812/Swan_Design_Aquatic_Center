import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
export const openGraphImage = {
  images: [
    "https://firebasestorage.googleapis.com/v0/b/aquatic-swan-design.appspot.com/o/oceanBlue.jfif?alt=media&token=578048fa-cd06-4601-9ce5-9763001a79b9",
  ],
};

export const metadata = {
  title: "Home | Aquatic Swan Design | Duckaroo | Tank Service",
  description:
    "Discover Bucephranda's premier tank services, featuring Australia Wide Shipping for Aquatic Rare & Rarer Plants. Enjoy our Live Arrival Guarantee and 100% Customer Satisfaction Guarantee. Explore our exclusive Aquatic Swan Design selection, offering unique Brisbane aquarium online rare plants. Let us assist you with maintenance, custom aquariums, plants, fish, and more!",
  icons: {
    icon: "/swan-favicon.png",
  },
  metadataBase: new URL(
    "https://firebasestorage.googleapis.com/v0/b/aquatic-swan-design.appspot.com/o/oceanBlue.jfif?alt=media&token=578048fa-cd06-4601-9ce5-9763001a79b9"
  ),
  openGraph: {
    ...openGraphImage,
    title: "Home | Aquatic Swan Design | Duckaroo | Tank Service",
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
