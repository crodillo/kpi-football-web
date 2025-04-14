export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="w-64 h-64 relative mb-8">
            <img
              src="/images/logo.png"
              alt="KPI Football Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-center">
            KPI Football
          </h1>
        </div>
      </main>
    </div>
  )
}
