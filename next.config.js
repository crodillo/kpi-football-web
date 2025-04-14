/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Añadimos esta línea
  images: {
    unoptimized: true, // Y esta línea
    domains: ['localhost'],
  },
}

module.exports = nextConfig
