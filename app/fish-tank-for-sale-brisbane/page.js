import { tanksData } from "./data/tanks";
import { getFolderImages } from "@/lib/cloudinary";
import ListingsClient from "./components/ListingsClient";

export default async function FishTankListingsPage() {
  // Fetch the first image from each tank's Cloudinary folder to use as thumbnail
  const tanks = await Promise.all(
    tanksData.map(async (tank) => {
      if (!tank.cloudinaryFolder) return tank;
      const images = await getFolderImages(tank.cloudinaryFolder);
      if (images.length === 0) return tank;
      return { ...tank, thumbnail: images[0], images };
    })
  );

  return <ListingsClient tanks={tanks} />;
}
