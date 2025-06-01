export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/private/",
          "/api/",
          "/_next/",
          "/static/",
          "*.json",
          "/search?",
          "/thank-you",
          "/404",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/"],
      },
    ],
    sitemap: [
      "https://duckaroo.com.au/sitemap.xml",
      "https://duckaroo.com.au/sitemap-0.xml",
    ],
    host: "https://duckaroo.com.au",
  };
}
