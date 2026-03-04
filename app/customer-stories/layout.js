import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Customer Success Stories | Real Aquarium Projects Brisbane & Gold Coast | Duckaroo",
  description:
    "Browse Duckaroo's portfolio of fish tank cleaning, aquarium setup, and pond maintenance projects across Brisbane and Gold Coast. Real before and after results from satisfied customers.",
  keywords:
    "aquarium projects Brisbane, fish tank cleaning results, aquarium before after, customer reviews Brisbane, pond maintenance Gold Coast",
  alternates: {
    canonical: "https://aquaticswandesign.com.au/customer-stories",
  },
  openGraph: {
    title: "Customer Success Stories | Real Aquarium Projects | Duckaroo",
    description:
      "Real aquarium projects and customer success stories from Duckaroo's fish tank cleaning and aquarium maintenance services across Brisbane and Gold Coast.",
    url: "https://aquaticswandesign.com.au/customer-stories",
    siteName: "Duckaroo",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RealAquariumProjectLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
