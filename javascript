// next.config.js
module.exports = {
  reactStrictMode: true,
}

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

    // pages/_app.js
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

  // pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center">
          KPI Football
        </h1>
      </main>
    </div>
  )
}

    /* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
