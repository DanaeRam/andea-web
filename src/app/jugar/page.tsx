"use client";

import Image from "next/image";
import { useState } from "react";

type Screen =
  | "inicio"
  | "bienvenida"
  | "formularioNombre"
  | "formularioCodigo"
  | "portales"
  | "lectura"
  | "emociones"
  | "matematicas";

export default function JugarPage() {
  const [screen, setScreen] = useState<Screen>("inicio");
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");

  return (
    <div className="min-h-[85vh] w-full rounded-[28px] border border-black/10 bg-[#fff8ee] p-4 shadow-sm md:p-6">
      <div className="mx-auto flex min-h-[95vh] max-w-6xl items-center justify-center overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-lg">
        {screen === "inicio" && (
          <PantallaInicio onStart={() => setScreen("bienvenida")} />
        )}

        {screen === "bienvenida" && (
          <PantallaBienvenida onNext={() => setScreen("formularioNombre")} />
        )}

        {screen === "formularioNombre" && (
          <PantallaFormularioNombre
            nombre={nombre}
            setNombre={setNombre}
            onBack={() => setScreen("bienvenida")}
            onNext={() => setScreen("formularioCodigo")}
          />
        )}

        {screen === "formularioCodigo" && (
          <PantallaFormularioCodigo
            nombre={nombre}
            codigo={codigo}
            setCodigo={setCodigo}
            onBack={() => setScreen("formularioNombre")}
            onEnter={() => setScreen("portales")}
          />
        )}

        {screen === "portales" && (
          <PantallaPortales
            onLectura={() => setScreen("lectura")}
            onMatematicas={() => setScreen("matematicas")}
            onEmociones={() => setScreen("emociones")}
          />
        )}

        {screen === "lectura" && (
          <CarruselBiblioteca onBack={() => setScreen("portales")} />
        )}

        {screen === "matematicas" && (
          <CarruselPociones onBack={() => setScreen("portales")} />
        )}

        {screen === "emociones" && (
          <CarruselGaleria onBack={() => setScreen("portales")} />
        )}
      </div>

      <style jsx global>{`
        @keyframes pulseMagic {
          0% {
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.7),
              0 0 25px rgba(168, 85, 247, 0.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(168, 85, 247, 1),
              0 0 60px rgba(168, 85, 247, 0.8);
          }
          100% {
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.7),
              0 0 25px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes portalPulse {
          0% {
            transform: scale(1);
            opacity: 0.95;
          }
          50% {
            transform: scale(1.22);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
}

function PantallaInicio({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative h-[95vh] w-full">
      <Image
        src="/andea-inicio.png"
        alt="Portada del juego Andea"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute left-1/2 top-14 -translate-x-1/2">
        <h1
          className="text-center text-4xl font-semibold tracking-wide text-white/85 drop-shadow-md md:text-8xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Andea
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
        }}
      >
        <button
          onClick={onStart}
          style={{
            background: "linear-gradient(90deg, #d8b4fe, #7e22ce)",
            color: "white",
            padding: "18px 42px",
            borderRadius: "999px",
            fontWeight: "600",
            fontSize: "18px",
            border: "none",
            cursor: "pointer",
            boxShadow:
              "0 0 15px rgba(168,85,247,0.8), 0 0 35px rgba(168,85,247,0.5)",
            animation: "pulseMagic 2.5s infinite",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow =
              "0 0 25px rgba(168,85,247,1), 0 0 60px rgba(168,85,247,0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 0 15px rgba(168,85,247,0.8), 0 0 35px rgba(168,85,247,0.5)";
          }}
        >
          Iniciar aventura
        </button>
      </div>
    </div>
  );
}

function PantallaBienvenida({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative h-[95vh] w-full">
      <Image
        src="/inicio.png"
        alt="Pantalla de bienvenida"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#5aa0ff]/20" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            background: "rgba(255,255,255,0.16)",
            border: "1px solid rgba(255,255,255,0.22)",
            borderRadius: "28px",
            padding: "38px 30px",
            backdropFilter: "blur(3px)",
            boxShadow: "0 10px 35px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "42px",
              fontWeight: 700,
              marginBottom: "14px",
            }}
          >
            Hola, explorador
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: "20px",
              lineHeight: 1.5,
              marginBottom: "28px",
            }}
          >
            Estás a punto de entrar a una aventura llena de historias,
            emociones y desafíos.
          </p>

          <button
            onClick={onNext}
            style={{
              background: "linear-gradient(90deg, #c084fc, #6d28d9)",
              color: "white",
              padding: "16px 34px",
              borderRadius: "999px",
              border: "none",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
            }}
          >
            Ingresa tu nombre
          </button>
        </div>
      </div>
    </div>
  );
}

function PantallaFormularioNombre({
  nombre,
  setNombre,
  onBack,
  onNext,
}: {
  nombre: string;
  setNombre: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="relative h-[95vh] w-full">
      <Image
        src="/inicio.png"
        alt="Formulario de nombre"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#5aa0ff]/20" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div
          style={{
            width: "100%",
            maxWidth: "720px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "28px",
            padding: "40px",
            backdropFilter: "blur(4px)",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            ¿Cómo te llamas?
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "18px",
              marginBottom: "26px",
            }}
          >
            Escribe tu nombre para comenzar la aventura.
          </p>

          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            style={{
              width: "100%",
              padding: "18px 22px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: "18px",
              outline: "none",
              marginBottom: "28px",
            }}
          />

          <div style={{ display: "flex", gap: "18px" }}>
            <button
              onClick={onBack}
              style={{
                background: "rgba(255,255,255,0.22)",
                color: "white",
                padding: "16px 28px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.3)",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Volver
            </button>

            <button
              onClick={onNext}
              style={{
                background: "linear-gradient(90deg, #4338ca, #7c3aed)",
                color: "white",
                padding: "16px 28px",
                borderRadius: "999px",
                border: "none",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
              }}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PantallaFormularioCodigo({
  nombre,
  codigo,
  setCodigo,
  onBack,
  onEnter,
}: {
  nombre: string;
  codigo: string;
  setCodigo: (value: string) => void;
  onBack: () => void;
  onEnter: () => void;
}) {
  return (
    <div className="relative h-[95vh] w-full">
      <Image
        src="/inicio.png"
        alt="Formulario de código"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[#5aa0ff]/20" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div
          style={{
            width: "100%",
            maxWidth: "720px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "28px",
            padding: "40px",
            backdropFilter: "blur(4px)",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            ¡Hola, {nombre || "Nombre"}!
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "18px",
              marginBottom: "26px",
            }}
          >
            Ingresa tu código de juego para entrar.
          </p>

          <input
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Ingresa cualquier texto (demo)."
            style={{
              width: "100%",
              padding: "18px 22px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: "18px",
              outline: "none",
              marginBottom: "28px",
            }}
          />

          <div style={{ display: "flex", gap: "18px" }}>
            <button
              onClick={onBack}
              style={{
                background: "rgba(255,255,255,0.22)",
                color: "white",
                padding: "16px 28px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.3)",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Volver
            </button>

            <button
              onClick={onEnter}
              style={{
                background: "linear-gradient(90deg, #4338ca, #7c3aed)",
                color: "white",
                padding: "16px 28px",
                borderRadius: "999px",
                border: "none",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
              }}
            >
              Entrar al juego
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PantallaPortales({
  onLectura,
  onMatematicas,
  onEmociones,
}: {
  onLectura: () => void;
  onMatematicas: () => void;
  onEmociones: () => void;
}) {
  return (
    <div className="relative h-[95vh] w-full">
      <Image
        src="/sala-portales.png"
        alt="Sala de los portales"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/5" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid w-full max-w-4xl grid-cols-3 px-8">
          <div className="flex justify-center">
            <button
              onClick={onLectura}
              aria-label="Ir a la Biblioteca Encantada"
              title="Biblioteca Encantada"
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "999px",
                border: "2px solid rgba(255,255,255,0.85)",
                background:
                  "radial-gradient(circle, #ffffff 0%, #dbeafe 45%, #60a5fa 100%)",
                boxShadow:
                  "0 0 10px rgba(96,165,250,0.9), 0 0 22px rgba(96,165,250,0.6), 0 0 40px rgba(255,255,255,0.45)",
                animation: "portalPulse 2.2s ease-in-out infinite",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={onMatematicas}
              aria-label="Ir a la Sala de Pociones"
              title="Sala de Pociones"
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "999px",
                border: "2px solid rgba(255,255,255,0.85)",
                background:
                  "radial-gradient(circle, #ffffff 0%, #fbcfe8 45%, #ec4899 100%)",
                boxShadow:
                  "0 0 10px rgba(236,72,153,0.9), 0 0 22px rgba(236,72,153,0.6), 0 0 40px rgba(255,255,255,0.45)",
                animation: "portalPulse 2.4s ease-in-out infinite",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={onEmociones}
              aria-label="Ir a la Galería de las Emociones"
              title="Galería de las Emociones"
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "999px",
                border: "2px solid rgba(255,255,255,0.85)",
                background:
                  "radial-gradient(circle, #ffffff 0%, #fde68a 45%, #f59e0b 100%)",
                boxShadow:
                  "0 0 10px rgba(245,158,11,0.9), 0 0 22px rgba(245,158,11,0.6), 0 0 40px rgba(255,255,255,0.45)",
                animation: "portalPulse 2.6s ease-in-out infinite",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CarruselBiblioteca({ onBack }: { onBack: () => void }) {
  const imagenes = ["/biblioteca1.png", "/biblioteca2.png", "/biblioteca3.png"];
  const niveles = ["Nivel básico", "Nivel intermedio", "Nivel avanzado"];
  const [indice, setIndice] = useState(0);

  function siguiente() {
    setIndice((prev) => (prev + 1) % imagenes.length);
  }

  function anterior() {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  }

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      <Image
        src={imagenes[indice]}
        alt={`Biblioteca Encantada ${indice + 1}`}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/5" />

      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 22px",
          borderRadius: "999px",
          fontWeight: "600",
          fontSize: "18px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: 20,
          background: "rgba(255,255,255,0.75)",
        }}
      >
        {niveles[indice]}
      </div>

      <div className="absolute left-6 top-6 z-20">
        <button
          onClick={onBack}
          style={{
            background: "rgba(255,255,255,0.78)",
            padding: "10px 18px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            backdropFilter: "blur(6px)",
          }}
        >
          Volver
        </button>
      </div>

      <button
        onClick={anterior}
        aria-label="Imagen anterior"
        style={{
          position: "absolute",
          left: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "56px",
          height: "56px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(255,255,255,0.18)",
          color: "white",
          fontSize: "30px",
          fontWeight: "700",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
          zIndex: 20,
        }}
      >
        ‹
      </button>

      <button
        onClick={siguiente}
        aria-label="Imagen siguiente"
        style={{
          position: "absolute",
          right: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "56px",
          height: "56px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(255,255,255,0.18)",
          color: "white",
          fontSize: "30px",
          fontWeight: "700",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
          zIndex: 20,
        }}
      >
        ›
      </button>
    </div>
  );
}

function CarruselPociones({ onBack }: { onBack: () => void }) {
  const imagenes = ["/pociones1.png", "/pociones2.png", "/pociones3.png"];
  const niveles = ["Nivel básico", "Nivel intermedio", "Nivel avanzado"];
  const [indice, setIndice] = useState(0);

  function siguiente() {
    setIndice((prev) => (prev + 1) % imagenes.length);
  }

  function anterior() {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  }

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      <Image
        src={imagenes[indice]}
        alt={`Sala de Pociones ${indice + 1}`}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/5" />

      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 22px",
          borderRadius: "999px",
          fontWeight: "600",
          fontSize: "18px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: 20,
          background: "rgba(255,255,255,0.75)",
        }}
      >
        {niveles[indice]}
      </div>

      <div className="absolute left-6 top-6 z-20">
        <button
          onClick={onBack}
          style={{
            background: "rgba(255,255,255,0.78)",
            padding: "10px 18px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            backdropFilter: "blur(6px)",
          }}
        >
          Volver
        </button>
      </div>

      <button
        onClick={anterior}
        aria-label="Imagen anterior"
        style={{
          position: "absolute",
          left: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "56px",
          height: "56px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(255,255,255,0.18)",
          color: "white",
          fontSize: "30px",
          fontWeight: "700",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
          zIndex: 20,
        }}
      >
        ‹
      </button>

      <button
        onClick={siguiente}
        aria-label="Imagen siguiente"
        style={{
          position: "absolute",
          right: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "56px",
          height: "56px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(255,255,255,0.18)",
          color: "white",
          fontSize: "30px",
          fontWeight: "700",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
          zIndex: 20,
        }}
      >
        ›
      </button>
    </div>
  );
}

function CarruselGaleria({ onBack }: { onBack: () => void }) {
  const imagenes = ["/galeria1.png", "/galeria2.png", "/galeria3.png"];
  const niveles = ["Nivel básico", "Nivel intermedio", "Nivel avanzado"];
  const [indice, setIndice] = useState(0);

  function siguiente() {
    setIndice((prev) => (prev + 1) % imagenes.length);
  }

  function anterior() {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  }

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      <Image
        src={imagenes[indice]}
        alt={`Galería de emociones ${indice + 1}`}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/5" />

      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 22px",
          borderRadius: "999px",
          fontWeight: "600",
          fontSize: "18px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: 20,
          background: "rgba(255,255,255,0.75)",
        }}
      >
        {niveles[indice]}
      </div>

      <div className="absolute left-6 top-6 z-20">
        <button
          onClick={onBack}
          style={{
            background: "rgba(255,255,255,0.78)",
            padding: "10px 18px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            backdropFilter: "blur(6px)",
          }}
        >
          Volver
        </button>
      </div>

      <button
        onClick={anterior}
        aria-label="Imagen anterior"
        style={{
          position: "absolute",
          left: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "56px",
          height: "56px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(255,255,255,0.18)",
          color: "white",
          fontSize: "30px",
          fontWeight: "700",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
          zIndex: 20,
        }}
      >
        ‹
      </button>

      <button
        onClick={siguiente}
        aria-label="Imagen siguiente"
        style={{
          position: "absolute",
          right: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "56px",
          height: "56px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(255,255,255,0.18)",
          color: "white",
          fontSize: "30px",
          fontWeight: "700",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
          zIndex: 20,
        }}
      >
        ›
      </button>
    </div>
  );
}