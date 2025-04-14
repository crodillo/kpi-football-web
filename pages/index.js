import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>KPI Football - Análisis de Datos para el Fútbol Moderno</title>
        <meta name="description" content="Plataforma líder en análisis de datos para el fútbol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="w-64 h-64 relative mb-8">
            <Image
              src="/images/logo.png"
              alt="KPI Football Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

{/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            EL FUTURO ESTÁ EN TUS MANOS
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-gray-400 text-center mb-12">
            Posiciónate a la vanguardia. Empieza a construir el futuro.
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-red-600">+10.000</div>
              <div className="text-gray-400">DATOS POR PARTIDO</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-red-600">+100</div>
              <div className="text-gray-400">KPI'S</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-red-600">+20</div>
              <div className="text-gray-400">PESTAÑAS DE REPORTERÍA</div>
            </div>
          </div>
        </div>
      </main>

<footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © {new Date().getFullYear()} KPI Football. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
