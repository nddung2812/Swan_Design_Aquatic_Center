/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upcdn.io",
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
    ],
  },
  experimental: {
    optimizeCss: false,
  },
  webpack: (config, { dev, isServer }) => {
    // Completely disable CSS optimization to avoid SCSS parsing issues
    if (!dev) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) =>
          plugin.constructor.name !== "CssMinimizerPlugin" &&
          plugin.constructor.name !== "OptimizeCssAssetsWebpackPlugin"
      );

      // Disable CSS optimization entirely
      config.optimization.minimize = false;
    }

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
