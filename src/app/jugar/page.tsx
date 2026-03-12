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
  const [nivel, setNivel] = useState("Básico");
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [puntos, setPuntos] = useState(120);
  const [leccionesCompletadas, setLeccionesCompletadas] = useState(3);
  const [mundosExplorados, setMundosExplorados] = useState(2);

  return (
    <div className="min-h-[85vh] w-full rounded-[28px] border border-black/10 bg-[#fff8ee] p-4 shadow-sm md:p-6">
      <div className="relative mx-auto flex min-h-[95vh] max-w-6xl items-center justify-center overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-lg">

                    {screen !== "inicio" &&
          screen !== "bienvenida" &&
          screen !== "formularioNombre" &&
          screen !== "formularioCodigo" && (
            <>
              <button
                onClick={() => setMostrarPerfil(true)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  zIndex: 60,
                  background: "rgba(255,255,255,0.78)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "999px",
                  padding: "12px 18px",
                  cursor: "pointer",
                  fontWeight: 700,
                  color: "#2b2b2b",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.15)",
                }}
              >
                Perfil
              </button>

              {mostrarPerfil && (
                <TarjetaPerfil
                  nombre={nombre}
                  nivel={nivel}
                  codigo={codigo}
                  puntos={puntos}
                  leccionesCompletadas={leccionesCompletadas}
                  mundosExplorados={mundosExplorados}
                  onClose={() => setMostrarPerfil(false)}
                />
              )
              }
              
              
            </>
          )}
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
  const [leccionActiva, setLeccionActiva] = useState<number | null>(null);

  const lecciones = [
    {
      id: 1,
      nombre: "Ordena las letras",
      descripcion:
        "Forma palabras sencillas colocando las letras en el orden correcto.",
      imagen: "/leccion1.png",
      puntos: 50,
    },
    {
      id: 2,
      nombre: "Palabras que riman",
      descripcion:
        "Encuentra las palabras que suenan parecido y completa el reto.",
      imagen: "/leccion2.png",
      puntos: 60,
    },
    {
      id: 3,
      nombre: "Completa la oración",
      descripcion:
        "Elige la palabra correcta para terminar cada oración.",
      imagen: "/leccion3.png",
      puntos: 70,
    },
    {
      id: 4,
      nombre: "Detective de historias",
      descripcion:
        "Descubre qué ocurrió primero, después y al final de la historia.",
      imagen: "/leccion4.png",
      puntos: 80,
    },
    {
      id: 5,
      nombre: "Encuentra el personaje",
      descripcion:
        "Lee con atención y relaciona cada personaje con su descripción.",
      imagen: "/leccion5.png",
      puntos: 90,
    },
    {
      id: 6,
      nombre: "Idea principal",
      descripcion:
        "Lee un texto corto y selecciona la idea más importante.",
      imagen: "/leccion6.png",
      puntos: 100,
    },
  ];

  function siguiente() {
    setIndice((prev) => (prev + 1) % imagenes.length);
    setLeccionActiva(null);
  }

  function anterior() {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    setLeccionActiva(null);
  }

  const leccionSeleccionada =
    leccionActiva !== null
      ? lecciones.find((item) => item.id === leccionActiva)
      : null;

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

{indice === 0 && (
  <>
    {/* fila superior */}
    <BotonLibro top="33%" left="78%" onClick={() => setLeccionActiva(1)} />
    <BotonLibro top="33%" left="86%" onClick={() => setLeccionActiva(2)} />
    <BotonLibro top="33%" left="94%" onClick={() => setLeccionActiva(3)} />

    {/* fila inferior */}
    <BotonLibro top="63%" left="78%" onClick={() => setLeccionActiva(4)} />
    <BotonLibro top="63%" left="86%" onClick={() => setLeccionActiva(5)} />
    <BotonLibro top="63%" left="94%" onClick={() => setLeccionActiva(6)} />
  </>
)}

      {leccionSeleccionada && (
        <TarjetaLeccion
          nombre={leccionSeleccionada.nombre}
          descripcion={leccionSeleccionada.descripcion}
          imagen={leccionSeleccionada.imagen}
          puntos={leccionSeleccionada.puntos}
          onClose={() => setLeccionActiva(null)}
        />
      )}
    </div>
  );
}

function BotonLibro({
  top,
  left,
  onClick,
}: {
  top: string;
  left: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Abrir lección"
      style={{
        position: "absolute",
        top,
        left,
        transform: "translate(-50%, -50%)",
        width: "26px",
        height: "26px",
        borderRadius: "999px",
        border: "2px solid rgba(255,255,255,0.85)",
        background:
          "radial-gradient(circle, #ffffff 0%, #e9d5ff 40%, #8b5cf6 100%)",
        boxShadow:
          "0 0 10px rgba(139,92,246,0.9), 0 0 22px rgba(139,92,246,0.6), 0 0 40px rgba(255,255,255,0.45)",
        animation: "portalPulse 2.2s ease-in-out infinite",
        cursor: "pointer",
        zIndex: 25,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.2)";
        e.currentTarget.style.boxShadow =
          "0 0 16px rgba(139,92,246,1), 0 0 30px rgba(139,92,246,0.85), 0 0 50px rgba(255,255,255,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
        e.currentTarget.style.boxShadow =
          "0 0 10px rgba(139,92,246,0.9), 0 0 22px rgba(139,92,246,0.6), 0 0 40px rgba(255,255,255,0.45)";
      }}
    />
  );
}

function TarjetaLeccion({
  nombre,
  descripcion,
  imagen,
  puntos,
  onClose,
}: {
  nombre: string;
  descripcion: string;
  imagen: string;
  puntos: number;
  onClose: () => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "14%",
        left: "12%",
        width: "360px",
        background: "rgba(255,255,255,0.18)",
        border: "1px solid rgba(255,255,255,0.22)",
        borderRadius: "28px",
        padding: "22px",
        backdropFilter: "blur(4px)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
        zIndex: 40,
      }}
    >
      <button
        onClick={onClose}
        aria-label="Cerrar"
        style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          width: "36px",
          height: "36px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(255,255,255,0.22)",
          color: "white",
          fontSize: "20px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        ×
      </button>

      <p
        style={{
          color: "rgba(255,255,255,0.82)",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        Lección disponible
      </p>

      <h3
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "12px",
          paddingRight: "30px",
        }}
      >
        {nombre}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "16px",
          lineHeight: 1.5,
          marginBottom: "18px",
        }}
      >
        {descripcion}
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "180px",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "18px",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Image src={imagen} alt={nombre} fill className="object-cover" />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          ⭐ {puntos} puntos
        </span>
      </div>

      <button
        style={{
          width: "100%",
          background: "linear-gradient(90deg, #c084fc, #6d28d9)",
          color: "white",
          padding: "16px 24px",
          borderRadius: "999px",
          border: "none",
          fontSize: "16px",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
        }}
      >
        Aprender
      </button>
    </div>
  );
}

function CarruselPociones({ onBack }: { onBack: () => void }) {
  const imagenes = ["/pociones1.png", "/pociones2.png", "/pociones3.png"];
  const niveles = ["Nivel básico", "Nivel intermedio", "Nivel avanzado"];
  const [indice, setIndice] = useState(0);
  const [leccionActiva, setLeccionActiva] = useState<number | null>(null);

  const lecciones = [
    {
      id: 1,
      nombre: "Poción de sumas",
      descripcion:
        "Resuelve sumas sencillas para completar la receta mágica.",
      imagen: "/pocion-leccion1.png",
      puntos: 50,
    },
    {
      id: 2,
      nombre: "Poción de restas",
      descripcion:
        "Encuentra el resultado correcto para mezclar los ingredientes.",
      imagen: "/pocion-leccion2.png",
      puntos: 60,
    },
    {
      id: 3,
      nombre: "Poción de patrones",
      descripcion:
        "Descubre la secuencia correcta para activar el caldero encantado.",
      imagen: "/pocion-leccion3.png",
      puntos: 70,
    },
    {
      id: 4,
      nombre: "Poción de conteo",
      descripcion:
        "Cuenta ingredientes y elige la cantidad correcta para la mezcla final.",
      imagen: "/pocion-leccion4.png",
      puntos: 80,
    },
  ];

  function siguiente() {
    setIndice((prev) => (prev + 1) % imagenes.length);
    setLeccionActiva(null);
  }

  function anterior() {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    setLeccionActiva(null);
  }

  const leccionSeleccionada =
    leccionActiva !== null
      ? lecciones.find((item) => item.id === leccionActiva)
      : null;

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

      {indice === 0 && (
        <>
          {/* poción izquierda inferior morada/roja */}
          <BotonLibro
            top="69%"
            left="11%"
            onClick={() => setLeccionActiva(1)}
          />

          {/* poción verde grande izquierda-centro */}
          <BotonLibro
            top="53%"
            left="21%"
            onClick={() => setLeccionActiva(2)}
          />

          {/* poción roja/naranja derecha-centro */}
          <BotonLibro
            top="63%"
            left="67%"
            onClick={() => setLeccionActiva(3)}
          />

          {/* caldero grande inferior derecho */}
          <BotonLibro
            top="79%"
            left="82%"
            onClick={() => setLeccionActiva(4)}
          />
        </>
      )}

      {leccionSeleccionada && (
        <TarjetaLeccion
          nombre={leccionSeleccionada.nombre}
          descripcion={leccionSeleccionada.descripcion}
          imagen={leccionSeleccionada.imagen}
          puntos={leccionSeleccionada.puntos}
          onClose={() => setLeccionActiva(null)}
        />
      )}
    </div>
  );
}

function CarruselGaleria({ onBack }: { onBack: () => void }) {
  const imagenes = ["/galeria1.png", "/galeria2.png", "/galeria3.png"];
  const niveles = ["Nivel básico", "Nivel intermedio", "Nivel avanzado"];
  const [indice, setIndice] = useState(0);
  const [leccionActiva, setLeccionActiva] = useState<number | null>(null);

  const lecciones = [
    {
      id: 1,
      nombre: "¿Qué emoción ves?",
      descripcion:
        "Observa la escena y elige la emoción principal que transmite la pintura.",
      imagen: "/emocion1.png",
      puntos: 50,
    },
    {
      id: 2,
      nombre: "Empatía en acción",
      descripcion:
        "Descubre cómo se siente un personaje y qué podrías hacer para ayudarlo.",
      imagen: "/emocion2.png",
      puntos: 60,
    },
    {
      id: 3,
      nombre: "Respira y cuenta",
      descripcion:
        "Aprende una estrategia sencilla para calmarte cuando te sientes nervioso.",
      imagen: "/emocion3.png",
      puntos: 70,
    },
    {
      id: 4,
      nombre: "Nombra lo que sientes",
      descripcion:
        "Relaciona cada emoción con la palabra correcta y expresa lo que pasa dentro de ti.",
      imagen: "/emocion4.png",
      puntos: 80,
    },
    {
      id: 5,
      nombre: "¿Qué harías tú?",
      descripcion:
        "Lee una situación y elige la mejor manera de responder con calma y respeto.",
      imagen: "/emocion5.png",
      puntos: 90,
    },
    {
      id: 6,
      nombre: "Señales del cuerpo",
      descripcion:
        "Identifica cómo reacciona el cuerpo cuando sientes miedo, enojo o alegría.",
      imagen: "/emocion6.png",
      puntos: 95,
    },
    {
      id: 7,
      nombre: "Mi espacio seguro",
      descripcion:
        "Explora ideas para crear un lugar o rutina que te ayude a sentirte mejor.",
      imagen: "/emocion7.png",
      puntos: 100,
    },
  ];

  function siguiente() {
    setIndice((prev) => (prev + 1) % imagenes.length);
    setLeccionActiva(null);
  }

  function anterior() {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    setLeccionActiva(null);
  }

  const leccionSeleccionada =
    leccionActiva !== null
      ? lecciones.find((item) => item.id === leccionActiva)
      : null;

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

      {indice === 0 && (
        <>
          {/* fila superior */}
          <BotonLibro
            top="24%"
            left="19%"
            onClick={() => setLeccionActiva(1)}
          />
          <BotonLibro
            top="33%"
            left="39%"
            onClick={() => setLeccionActiva(2)}
          />
          <BotonLibro
            top="25%"
            left="53%"
            onClick={() => setLeccionActiva(3)}
          />
          <BotonLibro
            top="24%"
            left="75%"
            onClick={() => setLeccionActiva(4)}
          />

          {/* fila inferior */}
          <BotonLibro
            top="62%"
            left="20%"
            onClick={() => setLeccionActiva(5)}
          />
          <BotonLibro
            top="65%"
            left="52%"
            onClick={() => setLeccionActiva(6)}
          />
          <BotonLibro
            top="67%"
            left="74%"
            onClick={() => setLeccionActiva(7)}
          />
        </>
      )}

      {leccionSeleccionada && (
        <TarjetaLeccion
          nombre={leccionSeleccionada.nombre}
          descripcion={leccionSeleccionada.descripcion}
          imagen={leccionSeleccionada.imagen}
          puntos={leccionSeleccionada.puntos}
          onClose={() => setLeccionActiva(null)}
        />
      )}
    </div>
  );
}

function TarjetaPerfil({
  nombre,
  nivel,
  codigo,
  puntos,
  leccionesCompletadas,
  mundosExplorados,
  onClose,
}: {
  nombre: string;
  nivel: string;
  codigo: string;
  puntos: number;
  leccionesCompletadas: number;
  mundosExplorados: number;
  onClose: () => void;
}


)
 {
  
  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        right: "20px",
        width: "360px",
        background: "rgba(255,255,255,0.18)",
        border: "1px solid rgba(255,255,255,0.22)",
        borderRadius: "28px",
        padding: "22px",
        backdropFilter: "blur(8px)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
        zIndex: 70,
      }}
    >
      <button
        onClick={onClose}
        aria-label="Cerrar perfil"
        style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          width: "36px",
          height: "36px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(255,255,255,0.22)",
          color: "white",
          fontSize: "20px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        ×
      </button>

      <p
        style={{
          color: "rgba(255,255,255,0.82)",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        Perfil del explorador
      </p>

      <h3
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "18px",
          paddingRight: "30px",
        }}
      >
        {nombre || "Explorador"}
      </h3>

      <div
        style={{
          display: "grid",
          gap: "12px",
          marginBottom: "18px",
        }}
      >
        <InfoFila etiqueta="Nivel" valor={nivel} />
        <InfoFila etiqueta="Código" valor={codigo || "Demo"} />
      </div>

      <div
        style={{
          marginTop: "8px",
          padding: "16px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "16px",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Estadísticas
        </p>

        <div style={{ display: "grid", gap: "10px" }}>
          <StatFila icono="⭐" texto={`Puntos acumulados: ${puntos}`} />
          <StatFila
            icono="📚"
            texto={`Lecciones completadas: ${leccionesCompletadas}`}
          />
          <StatFila
            icono="🌍"
            texto={`Mundos explorados: ${mundosExplorados}`}
          />
        </div>
      </div>
    </div>
  );
}

function InfoFila({
  etiqueta,
  valor,
}: {
  etiqueta: string;
  valor: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "12px",
        padding: "10px 14px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.12)",
      }}
    >
      <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>
        {etiqueta}
      </span>
      <span style={{ color: "white", fontWeight: 700 }}>{valor}</span>
    </div>
  );
}

function StatFila({
  icono,
  texto,
}: {
  icono: string;
  texto: string;
}) {
  return (
    <div
      style={{
        color: "rgba(255,255,255,0.92)",
        fontSize: "15px",
        fontWeight: 600,
      }}
    >
      {icono} {texto}
    </div>
  );
}