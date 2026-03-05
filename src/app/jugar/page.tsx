import Link from "next/link";

export default function JugarPage() {
  return (
    <main className="min-h-screen bg-[#0b0615] text-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white/80 hover:text-white">
            ← Volver
          </Link>
          <h1 className="text-2xl font-semibold">Jugar</h1>
          <div />
        </div>

        <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
          {/* Aquí insertas el juego */}
          <div className="aspect-video w-full bg-black/40 grid place-items-center">
            <p className="text-white/70 text-sm">
              Próximamente...
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}