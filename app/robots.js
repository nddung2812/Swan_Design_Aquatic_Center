export default function robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: ["/"],
      },
      {
        userAgent: "Nutch",
        disallow: ["/"],
      },
      {
        userAgent: "AhrefsSiteAudit",
        crawlDelay: 10,
      },
      {
        userAgent: "AhrefsBot",
        crawlDelay: 10,
      },
      {
        userAgent: "MJ12bot",
        crawlDelay: 10,
      },
      {
        userAgent: "Pinterest",
        crawlDelay: 1,
      },
    ],
    sitemap: "https://aquaticswandesign.com.au/sitemap.xml",
  };
}
