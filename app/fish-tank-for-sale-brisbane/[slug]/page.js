import { notFound } from "next/navigation";
import { getTankBySlug, getAllTankSlugs } from "../data/tanks";
import { getFolderImages } from "@/lib/cloudinary";
import TankDetailContent from "./TankDetailContent";

export async function generateStaticParams() {
  return getAllTankSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tank = getTankBySlug(slug);
  if (!tank) return { title: "Listing Not Found | Duckaroo" };

  const priceLabel =
    tank.price !== null ? `$${tank.price.toLocaleString("en-AU")} AUD` : "POA";

  return {
    title: `${tank.title} | Fish Tank for Sale ${tank.locationArea} | Duckaroo`,
    description: `${tank.title} for sale in ${tank.location}. ${tank.tankSize}, ${tank.volume}L ${tank.type} tank. ${priceLabel}. Enquire via Duckaroo.`,
  };
}

export default async function TankDetailPage({ params }) {
  const { slug } = await params;
  const tank = getTankBySlug(slug);

  if (!tank) notFound();

  // Fetch images from Cloudinary at build time if a folder is specified
  let images = tank.images;
  let thumbnail = tank.thumbnail;

  if (tank.cloudinaryFolder) {
    const cloudinaryImages = await getFolderImages(tank.cloudinaryFolder);
    if (cloudinaryImages.length > 0) {
      images = cloudinaryImages;
      thumbnail = cloudinaryImages[0];
    }
  }

  return <TankDetailContent tank={{ ...tank, images, thumbnail }} />;
}
