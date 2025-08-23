import Link from "next/link";
import NotFoundClient from "./NotFoundClient";

export const metadata = {
  title: "Page Not Found (404) | Duckaroo Brisbane - Aquatic Specialists",
  description:
    "The page you're looking for couldn't be found. Explore our aquarium services, rare aquatic plants, and fish tank maintenance solutions across Brisbane and Queensland.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
