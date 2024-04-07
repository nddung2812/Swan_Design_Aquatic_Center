import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aquatic Swan Design | Duckaroo | Tank Service",
  description: "Australia Wide Shipping Aquatic Rare & Rarer Plants • Live Arrival Guarantee • 100% Customer Satisfaction Guarantee. Aquatic Swan Design! Unique Brisbane aquarium online rare plants. We can help you with maintenance, custom aquariums, plants, fish and more!",
  icons: {
    icon: "/swan-favicon.png",
  },
  metaImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dmarine%2Bplants&psig=AOvVaw0L1G-1dftganWc1D8GNIN0&ust=1712558886658000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCdy4DBr4UDFQAAAAAdAAAAABAE"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager gtmId='GTM-NQQBXXPZ'/>
        <GoogleAnalytics gaId="G-DMVQ6Y0D0S" />
        {children}
      </body>
    </html>
  );
}
