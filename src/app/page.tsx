import Image from "next/image";
import Link from "next/link";

const problems = [
  {
    title: "Lecto-escritura",
    desc: "Practica lecto-escritura con ejercicios cortos, guiados y visuales.",
  },
  {
    title: "Matemáticas",
    desc: "Practica matemáticas con ejercicios cortos, guiados y visuales.",
  },
  {
    title: "Salud Mental",
    desc: "Incluye actividades simples para reconocer emociones, fortalecer confianza y bienestar.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">

      {/* HERO con fondo completo */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/andea-inicio.png" // cambia a /hero.jpg si tu archivo es .jpg
          alt="Fondo del videojuego ANDEA"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay (cinemático) */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Navbar */}
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          {/* Logo izquierda */}
          <Link href="/" className="flex items-center gap-2">
            <div className="glass h-10 w-10 rounded-full grid place-items-center">
              <span className="text-sm font-semibold">A</span>
            </div>
            <span className="font-semibold tracking-wide">ANDEA</span>
          </Link>

          {/* Menú derecha */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link className="nav-link" href="#inicio">
              Inicio
            </Link>
            <Link className="nav-link" href="/portal-familiar">
              Portal Familiar
            </Link>
            <Link className="nav-link" href="/fundacion">
              Fundación
            </Link>
            <Link href="/jugar" className="btn-pill btn-glass">
              Jugar
            </Link>
          </nav>

          {/* Botón móvil */}
          <Link href="/jugar" className="md:hidden btn-pill btn-glass">
            Jugar
          </Link>
        </header>

        {/* Contenido principal (pegado a la izquierda) */}
        <div
          id="inicio"
          className="relative z-10 mx-auto flex max-w-6xl px-6 pb-20 pt-16 md:pt-24"
        >
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-hero-title">
              ANDEA
            </h1>

            <div className="mt-5 hero-divider" />

            <p className="mt-5 leading-relaxed text-hero-paragraph">
              Imagina un mundo donde aprender es tan emocionante como pasar de nivel en tu juego favorito.
              <span className="font-semibold text-white"> ANDEA </span>
              convierte la lecto-escritura, las matemáticas básicas y el cuidado de la salud mental en retos
              con aventuras, mini-misiones y recompensas.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <Link href="/jugar" className="btn-pill btn-primary">
                Jugar
              </Link>

              <a href="#problematica" className="text-sm text-white/85 hover:text-white">
                Ver cómo ayuda ↓
              </a>
            </div>
          </div>
        </div>

        {/* Indicador scroll */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs text-white/70">
          Desliza para ver más
        </div>
      </section>

      {/* SECCIÓN MORADA al hacer scroll */}
      <section id="problematica" className="section-purple px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-white/70">
              ¿Qué problema resuelve?
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              3 problemáticas que atacamos con el videojuego
            </h2>
            <p className="mt-4 text-white/80">
              ANDEA está pensado para niños y familias: simple, visual y con retos cortos para mantener
              atención, motivación y aprendizaje constante.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="card p-6">
                <div className="mb-3 h-10 w-10 rounded-xl glass" />
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Secciones ancla (para menú) */}
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div id="portal" className="card p-6">
              <h3 className="text-xl font-semibold">Portal Familiar</h3>
              <p className="mt-2 text-white/75">
                Un espacio para que la familia vea avances, misiones completadas y recomendaciones de práctica.
              </p>
            </div>

            <div id="fundacion" className="card p-6">
              <h3 className="text-xl font-semibold">Fundación</h3>
              <p className="mt-2 text-white/75">
                Portal exclusivo para miembros de la fundación. Aquí se gestionan estudiantes, códigos y reportes.
              </p>
            </div>
          </div>

          <footer className="mt-16 text-sm text-white/50">
            © {new Date().getFullYear()} ANDEA
          </footer>
        </div>
      </section>
    </main>
  );
}