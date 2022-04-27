module.exports = {
  reactStrictMode: true,
  env: {
    API_HOST: process.env.API_HOST
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
