module.exports = {
    async rewrites() {
      return [
        {
            source: '/auth/:path*',
            destination: process.env.NEXT_PUBLIC_API_URL + '/:path*',
        }
      ]
    },
  }