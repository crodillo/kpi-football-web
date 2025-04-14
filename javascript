// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Añade esta línea
  images: {
    unoptimized: true  // Añade esta línea
  }
}

module.exports = nextConfig
