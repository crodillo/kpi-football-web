import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>KPI Football</title>
        <meta name="description" content="KPI Football - Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <main className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-64 relative mb-8">
              <img
                src="/images/logo.png"
                alt="KPI Football Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">
              KPI Football
            </h1>
            <p className="text-xl text-center text-gray-300">
              Welcome to the future of football analytics
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
