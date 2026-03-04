/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upcdn.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80],
  },
  // Security headers for trust signals and SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Add redirects configuration
  async redirects() {
    return [
      {
        source: "/pages/about-us",
        destination: "/about-us",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/pages/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/real-aquarium-project",
        destination: "/customer-stories",
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
  experimental: {
    optimizeCss: false,
  },
  turbopack: {},
  webpack: (config, { dev, isServer }) => {
    // Force CSS files to be processed as standard CSS, not SCSS
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes("css")) {
        if (rule.use) {
          rule.use.forEach((use) => {
            if (use.loader && use.loader.includes("postcss-loader")) {
              use.options = use.options || {};
              use.options.postcssOptions = use.options.postcssOptions || {};
              use.options.postcssOptions.parser = "postcss";
              use.options.postcssOptions.syntax = "postcss";
            }
          });
        }
      }
    });

    return config;
  },
};

export default nextConfig;
