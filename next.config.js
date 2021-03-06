module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.traction.one"],
  },
  async redirects() {
    return [
      {
        source: "/pokemon/0",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pokemon",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
