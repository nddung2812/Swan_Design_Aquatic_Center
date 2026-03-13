import { getTankBySlug, getAllTankSlugs } from "../data/tanks";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://aquaticswandesign.com.au";

export async function generateStaticParams() {
  return getAllTankSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tank = getTankBySlug(slug);

  if (!tank) {
    return { title: "Listing Not Found | Duckaroo" };
  }

  const priceLabel =
    tank.price !== null ? `$${tank.price.toLocaleString("en-AU")} AUD` : "POA";

  return {
    title: `${tank.title} | Fish Tank for Sale ${tank.locationArea} | Duckaroo`,
    description: `${tank.title} for sale in ${tank.location}. ${tank.tankSize}, ${tank.volume}L ${tank.type} tank. ${priceLabel}. Enquire via Duckaroo.`,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/fish-tank-for-sale-brisbane/${tank.slug}`,
    },
    openGraph: {
      title: `${tank.title} | Fish Tank for Sale ${tank.locationArea}`,
      description: `${tank.tankSize}, ${tank.volume}L ${tank.type} tank in ${tank.location}. ${priceLabel}.`,
      url: `${baseUrl}/fish-tank-for-sale-brisbane/${tank.slug}`,
      siteName: "Duckaroo",
      images: [
        {
          url: tank.thumbnail,
          width: 1200,
          height: 630,
          alt: tank.title,
        },
      ],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tank.title} | Duckaroo`,
      description: `${tank.tankSize} ${tank.type} tank in ${tank.location}. ${priceLabel}.`,
      images: [{ url: tank.thumbnail, alt: tank.title }],
    },
    robots: {
      index: tank.status === "available",
      follow: true,
    },
    other: {
      "geo.region": "AU-QLD",
      "geo.placename": tank.location,
      ...(tank.price !== null && {
        "product:price:amount": String(tank.price),
        "product:price:currency": "AUD",
      }),
      "product:condition": tank.condition === "new" ? "new" : "used",
    },
  };
}

export default function TankDetailLayout({ children }) {
  return <>{children}</>;
}
