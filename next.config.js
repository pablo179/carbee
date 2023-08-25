module.exports = {
  async rewrites() {
    const basePath = process.env.NEXT_PUBLIC_API_URL
    return [
      {
        source: "/auth",
        destination: `${basePath}/api/auth`,
      },
      {
        source: "/appointments",
        destination: `${basePath}/api/appointments`,
      },
      {
        source: "/availability/:path*",
        destination: `${basePath}/api/availability/:path*`,
      }
    ];  
  },
};