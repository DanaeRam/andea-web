"use client";

import { useState } from "react";

function fakeCode(prefix: string) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const part = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `${prefix}-${part}`;
}

export default function AdminGestionPage() {
  const [gameCode, setGameCode] = useState<string>(fakeCode("GAME"));
  const [famCode, setFamCode] = useState<string>(fakeCode("FAM"));

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <p className="text-xs uppercase tracking-widest text-white/70">Gestión</p>
        <h1 className="mt-2 text-3xl font-semibold text-hero-title">
          Administración de estudiantes
        </h1>
        <p className="mt-3 text-white/75">
          Da de alta estudiantes y genera códigos (demo).
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        

        {/* Estudiantes */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Estudiantes</h2>
          <p className="mt-2 text-white/75">
            Alta y desactivación (demo).
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-white/80">Nombre</label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
              />
            </div>

            <div>
              <label className="text-sm text-white/80">Edad</label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button className="btn-pill btn-primary w-full">
                Crear estudiante (demo)
              </button>
              <button className="btn-pill btn-glass w-full">
                Desactivar estudiante (demo)
              </button>
            </div>
          </div>
        </div>

                <div className="card p-6">
          <h2 className="text-xl font-semibold">Generar códigos</h2>
          <p className="mt-2 text-white/75">
            Estos códigos se usarán para iniciar sesión y vincular padres (demo).
          </p>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <div className="text-sm text-white/70">Código de juego (niño)</div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="font-mono text-lg">{gameCode}</span>
                <button
                  className="btn-pill btn-glass"
                  
                >
                  Generar
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <div className="text-sm text-white/70">Código familiar (padres)</div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="font-mono text-lg">{famCode}</span>
                <button
                  className="btn-pill btn-glass"
                >
                  Generar
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}