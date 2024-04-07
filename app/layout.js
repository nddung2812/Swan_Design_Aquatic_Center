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
  metaImage: "https://firebasestorage.googleapis.com/v0/b/aquatic-swan-design.appspot.com/o/oceanBlue.jfif?alt=media&token=578048fa-cd06-4601-9ce5-9763001a79b9"
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
