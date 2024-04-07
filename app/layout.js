import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aquatic Swan Design | Duckaroo | Tank Service",
  description: "Australia Wide Shipping Aquatic Rare & Rarer Plants • Live Arrival Guarantee • 100% Customer Satisfaction Guarantee. Aquatic Swan Design! Unique Brisbane aquarium online rare plants. We can help you with maintenance, custom aquariums, plants, fish and more!",
  icons: {
    icon: "/swan-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager gtmId='GTM-NQQBXXPZ'/>
        {children}
      </body>
    </html>
  );
}
