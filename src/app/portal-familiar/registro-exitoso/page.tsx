import Link from "next/link";

export default function RegistroExitosoPage() {
  return (
    <main className="min-h-screen section-purple text-white px-6 py-16">
      <div className="mx-auto max-w-3xl pt-10">
        <div className="card p-8">
          <p className="text-xs uppercase tracking-widest text-white/70">
            Registro exitoso
          </p>

          <h1 className="mt-2 text-3xl font-semibold text-hero-title">
            ¡Tu cuenta fue creada y el niño quedó vinculado!
          </h1>

          <p className="mt-4 text-white/80 leading-relaxed">
            Ahora ingresa en la sección{" "}
            <span className="font-semibold text-white">Iniciar sesión para padres</span>{" "}
            usando tu email y contraseña para acceder al portal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/portal-familiar" className="btn-pill btn-primary text-center">
              Ir a iniciar sesión
            </Link>
            <Link href="/" className="btn-pill btn-glass text-center">
              Volver al inicio
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/55">
            *Esta es una pantalla temporal para pruebas. Más adelante validaremos el Código Familiar.
          </p>
        </div>
      </div>
    </main>
  );
}