module.exports = {
  async rewrites() {
    const basePath = process.env.NEXT_PUBLIC_API_URL
    return [
      {
        source: "/auth",
        destination: `${basePath}/api/auth`,
      },
    ];  
  },
};