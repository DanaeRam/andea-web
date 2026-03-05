import Link from "next/link";

const childName = "Mateo García"; // <- cambia el nombre aquí

// Datos inventados
const summary = {
  level: 7,
  totalMinutes: 410,
  sections: [
    { key: "mate", name: "Matemáticas", completed: 18, total: 30 },
    { key: "lecto", name: "Lecto-escritura", completed: 22, total: 30 },
    { key: "salud", name: "Salud mental", completed: 10, total: 20 },
  ],
};

const progressBars = [
  { label: "Matemáticas", value: 60 },
  { label: "Lecto-escritura", value: 73 },
  { label: "Salud mental", value: 50 },
];

const weeklyActivity = [
  { day: "Lun", value: 20 },
  { day: "Mar", value: 35 },
  { day: "Mié", value: 25 },
  { day: "Jue", value: 45 },
  { day: "Vie", value: 30 },
  { day: "Sáb", value: 55 },
  { day: "Dom", value: 40 },
];

const strengths = [
  { topic: "Comprensión lectora", note: "Lee más rápido y entiende ideas principales." },
  { topic: "Sumas y restas", note: "Resuelve ejercicios con menos errores." },
  { topic: "Persistencia", note: "No abandona retos cuando se complican." },
];

const reinforce = [
  { topic: "Problemas con texto", note: "Le cuesta identificar datos clave." },
  { topic: "Multiplicación básica", note: "Necesita más práctica con tablas." },
  { topic: "Manejo de frustración", note: "Se enoja cuando falla 2–3 veces seguidas." },
];

function pct(completed: number, total: number) {
  return Math.round((completed / total) * 100);
}

export default function AccesoPadresPage() {
  const totalPlayed = `${Math.floor(summary.totalMinutes / 60)}h ${summary.totalMinutes % 60}m`;

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
            <Link className="nav-link" href="/#fundacion">
              Fundación
            </Link>
            <Link href="/jugar" className="btn-pill btn-glass">
              Jugar
            </Link>
          </nav>

          <Link href="/portal-familiar" className="md:hidden btn-pill btn-glass">
            Portal
          </Link>
        </div>
        <div className="h-px w-full bg-white/10" />
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        {/* Title */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/70">
              Portal de padres
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-hero-title">
              Panel de progreso — {childName}
            </h1>
            <p className="mt-3 text-white/80">
              Datos de ejemplo (inventados) para mostrar cómo se vería el dashboard.
            </p>
          </div>

          <Link href="/portal-familiar" className="btn-pill btn-glass text-center">
            ← Volver al Portal Familiar
          </Link>
        </div>

        {/* Summary cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <p className="text-xs uppercase tracking-widest text-white/70">
              Nivel general
            </p>
            <div className="mt-3 flex items-end gap-3">
              <span className="text-4xl font-semibold">{summary.level}</span>
              <span className="text-white/70 pb-1">/ 10</span>
            </div>
            <p className="mt-3 text-white/75 text-sm">
              Estimación global según lecciones, precisión y constancia.
            </p>
          </div>

          <div className="card p-6">
            <p className="text-xs uppercase tracking-widest text-white/70">
              Tiempo total jugado
            </p>
            <div className="mt-3 text-4xl font-semibold">{totalPlayed}</div>
            <p className="mt-3 text-white/75 text-sm">
              Incluye prácticas y mini-misiones.
            </p>
          </div>

          <div className="card p-6">
            <p className="text-xs uppercase tracking-widest text-white/70">
              Lecciones completadas
            </p>
            <div className="mt-4 space-y-3">
              {summary.sections.map((s) => (
                <div key={s.key}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/85">{s.name}</span>
                    <span className="text-white/70">
                      {s.completed}/{s.total} ({pct(s.completed, s.total)}%)
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${pct(s.completed, s.total)}%`,
                        background:
                          "linear-gradient(90deg, rgba(110,199,255,.9), rgba(155,108,255,.9))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Charts */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Bar chart */}
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Progreso por sección</h2>
              <span className="text-xs text-white/60">Bar chart (ejemplo)</span>
            </div>

            <div className="mt-6 space-y-4">
              {progressBars.map((b) => (
                <div key={b.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/85">{b.label}</span>
                    <span className="text-white/70">{b.value}%</span>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${b.value}%`,
                        background:
                          "linear-gradient(90deg, rgba(110,199,255,.95), rgba(155,108,255,.95))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-white/70">
              Ideal para identificar rápido qué área va más avanzada.
            </p>
          </div>

          {/* Line chart */}
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Actividad por semana</h2>
              <span className="text-xs text-white/60">Line chart (ejemplo)</span>
            </div>

            {/* “Línea” simple con puntos */}
            <div className="mt-6">
              <div className="flex items-end justify-between gap-3 h-40">
                {weeklyActivity.map((p) => (
                  <div key={p.day} className="flex flex-col items-center gap-2 w-full">
                    <div className="relative w-full flex items-end justify-center">
                      <div
                        className="w-2 rounded-full"
                        style={{
                          height: `${p.value * 2}px`,
                          background:
                            "linear-gradient(180deg, rgba(155,108,255,.95), rgba(110,199,255,.95))",
                          boxShadow: "0 12px 35px rgba(0,0,0,.25)",
                        }}
                      />
                      <div
                        className="absolute -top-2 h-3 w-3 rounded-full"
                        style={{
                          background: "white",
                          opacity: 0.85,
                        }}
                      />
                    </div>
                    <div className="text-xs text-white/70">{p.day}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-white/55">
                Minutos jugados por día (inventado). Útil para detectar hábitos.
              </div>
            </div>
          </div>
        </section>

        {/* Strength vs Reinforce */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">Temas fuertes</h2>
            <p className="mt-2 text-white/75">
              Áreas donde {childName.split(" ")[0]} muestra buen desempeño.
            </p>

            <ul className="mt-5 space-y-3">
              {strengths.map((s) => (
                <li key={s.topic} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="font-semibold">{s.topic}</div>
                  <div className="mt-1 text-sm text-white/70">{s.note}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold">Temas a reforzar</h2>
            <p className="mt-2 text-white/75">
              Recomendaciones simples para la siguiente semana.
            </p>

            <ul className="mt-5 space-y-3">
              {reinforce.map((r) => (
                <li key={r.topic} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="font-semibold">{r.topic}</div>
                  <div className="mt-1 text-sm text-white/70">{r.note}</div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <p className="text-sm text-white/80">
                Sugerencia rápida:{" "}
                <span className="font-semibold text-white">
                  10–15 min diarios
                </span>{" "}
                con una sola sección por día, y una recompensa pequeña al terminar.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-sm text-white/50">
          © {new Date().getFullYear()} ANDEA
        </footer>
      </div>
    </main>
  );
}