"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function PortalFamiliarPage() {
  const router = useRouter();

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/portal-familiar/registro-exitoso");
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/portal-familiar/acceso-padres");
  }

  return (
    <main className="min-h-screen section-purple text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="glass h-10 w-10 rounded-full grid place-items-center">
              <span className="text-sm font-semibold">A</span>
            </div>
            <span className="font-semibold tracking-wide">ANDEA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link className="nav-link" href="/">
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

          <Link href="/jugar" className="md:hidden btn-pill btn-glass">
            Jugar
          </Link>
        </div>
        <div className="h-px w-full bg-white/10" />
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        {/* Title */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-white/70">
            Portal Familiar
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-hero-title">
            Acompaña el progreso de tu hijo en ANDEA
          </h1>
          <p className="mt-4 text-white/80">
            Este espacio ayuda a madres, padres y tutores a entender qué aprende
            el niño, cómo se siente durante el juego y cómo apoyar su avance.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Sección informativa */}
          <section className="card p-6">
            <h2 className="text-xl font-semibold">Sección informativa</h2>

            <div className="mt-5">
              <h3 className="text-lg font-semibold">Objetivo del juego</h3>
              <p className="mt-2 text-white/75 leading-relaxed">
                <span className="font-semibold text-white">Educativo:</span>{" "}
                reforzar lecto-escritura y matemáticas básicas con retos cortos.
                <br />
                <span className="font-semibold text-white">Emocional:</span>{" "}
                apoyar habilidades como reconocer emociones, manejar frustración
                y fortalecer la confianza con actividades sencillas.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Qué temas cubre por edades
              </h3>

              <div className="mt-3 overflow-hidden rounded-xl ring-1 ring-white/10">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">
                        Edad
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Lecto-escritura
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Matemáticas
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Socioemocional
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3">6–7</td>
                      <td className="px-4 py-3 text-white/75">
                        Sílabas, palabras, comprensión básica
                      </td>
                      <td className="px-4 py-3 text-white/75">
                        Conteo, sumas simples
                      </td>
                      <td className="px-4 py-3 text-white/75">
                        Identificar emociones
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">8–9</td>
                      <td className="px-4 py-3 text-white/75">
                        Lectura fluida, escritura guiada
                      </td>
                      <td className="px-4 py-3 text-white/75">
                        Restas, problemas cortos
                      </td>
                      <td className="px-4 py-3 text-white/75">
                        Tolerancia a la frustración
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">10–12</td>
                      <td className="px-4 py-3 text-white/75">
                        Comprensión, redacción simple
                      </td>
                      <td className="px-4 py-3 text-white/75">
                        Multiplicación/división básicas
                      </td>
                      <td className="px-4 py-3 text-white/75">
                        Autoconfianza y hábitos
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-white/55">
                *Los niveles pueden ajustarse según el avance del niño.
              </p>
            </div>

          </section>

          {/* Registro + Login */}
          <section className="space-y-8">
            {/* Vincula a tu hijo */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold">Vincula a tu hijo</h2>
              <p className="mt-2 text-white/75">
                La fundación crea el perfil del niño y genera un{" "}
                <span className="font-semibold text-white">Código Familiar</span>{" "}
                (ej. <span className="font-mono">FAM-48K2</span>). Con ese código,
                podrás crear tu cuenta y conectar el progreso del niño.
              </p>

              <form onSubmit={handleRegister} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm text-white/80">Email</label>
                  <input
                    type="text"
                    placeholder="tutor@email.com"
                    className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">Contraseña</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">
                    Código Familiar <span className="text-white/60">(obligatorio)</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="FAM-48K2"
                    className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
                  />
                </div>

                <button type="submit" className="btn-pill btn-primary w-full">
                  Crear cuenta y vincular
                </button>

                <p className="text-xs text-white/55">
                  Por ahora este registro es de prueba: acepta cualquier texto.
                </p>
              </form>
            </div>

            {/* Iniciar sesión */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold">Iniciar sesión para padres</h2>
              <p className="mt-2 text-white/75">
                Si ya vinculaste tu cuenta, inicia sesión para ver el avance,
                misiones completadas y recomendaciones.
              </p>

              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm text-white/80">Email</label>
                  <input
                    type="text"
                    placeholder="tutor@email.com"
                    className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">Contraseña</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
                  />
                </div>

                <button type="submit" className="btn-pill btn-glass w-full">
                  Iniciar sesión
                </button>

                <p className="text-xs text-white/55">
                  Por ahora este registro es de prueba: acepta cualquier texto.
                </p>
              </form>
            </div>
          </section>
        </div>

        <footer className="mt-16 text-sm text-white/50">
          © {new Date().getFullYear()} ANDEA
        </footer>
      </div>
    </main>
  );
}