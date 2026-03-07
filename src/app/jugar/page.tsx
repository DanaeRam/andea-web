"use client";

import { useState } from "react";
import Link from "next/link";

type Screen =
  | "welcome"
  | "name"
  | "code"
  | "menu"
  | "math"
  | "reading"
  | "mental"
  | "exercise";

type Area = "Matemáticas" | "Lecto-escritura" | "Salud mental" | null;

type Lesson = {
  title: string;
  question: string;
  options: string[];
  correct: string;
};

const lessonsByArea: Record<"Matemáticas" | "Lecto-escritura" | "Salud mental", Lesson[]> = {
  "Matemáticas": [
    {
      title: "Lección 1: Sumas",
      question: "¿Cuánto es 4 + 3?",
      options: ["5", "7", "8"],
      correct: "7",
    },
    {
      title: "Lección 2: Restas",
      question: "¿Cuánto es 9 - 2?",
      options: ["6", "7", "8"],
      correct: "7",
    },
    {
      title: "Lección 3: Conteo",
      question: "¿Cuál número sigue después del 14?",
      options: ["13", "15", "16"],
      correct: "15",
    },
    {
      title: "Lección 4: Comparar cantidades",
      question: "¿Qué número es mayor?",
      options: ["6", "9", "4"],
      correct: "9",
    },
  ],
  "Lecto-escritura": [
    {
      title: "Lección 1: Vocales",
      question: "¿Cuál de estas es una vocal?",
      options: ["M", "E", "T"],
      correct: "E",
    },
    {
      title: "Lección 2: Completa la palabra",
      question: "C _ S A",
      options: ["E", "A", "U"],
      correct: "A",
    },
    {
      title: "Lección 3: Comprensión",
      question: "Si Ana tiene un perro, ¿quién tiene un perro?",
      options: ["Ana", "El perro", "Nadie"],
      correct: "Ana",
    },
    {
      title: "Lección 4: Identifica la palabra",
      question: "¿Cuál es una palabra correcta?",
      options: ["sol", "slo", "osl"],
      correct: "sol",
    },
  ],
  "Salud mental": [
    {
      title: "Lección 1: Emociones",
      question: "Si quieres llorar, ¿qué emoción podrías sentir?",
      options: ["Tristeza", "Alegría", "Sorpresa"],
      correct: "Tristeza",
    },
    {
      title: "Lección 2: Respiración",
      question: "¿Qué ayuda a calmarte cuando estás nervioso?",
      options: ["Gritar", "Respirar profundo", "Correr sin parar"],
      correct: "Respirar profundo",
    },
    {
      title: "Lección 3: Pedir ayuda",
      question: "Si te sientes muy mal, ¿qué puedes hacer?",
      options: ["Guardar silencio siempre", "Pedir ayuda a un adulto", "Romper cosas"],
      correct: "Pedir ayuda a un adulto",
    },
  ],
};

export default function JugarPage() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [selectedArea, setSelectedArea] = useState<Area>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  function goToCode() {
    if (!playerName.trim()) return;
    setScreen("code");
  }

  function enterGame() {
    if (!gameCode.trim()) return;
    setScreen("menu");
  }

  function openArea(area: "Matemáticas" | "Lecto-escritura" | "Salud mental") {
    setSelectedArea(area);
    if (area === "Matemáticas") setScreen("math");
    if (area === "Lecto-escritura") setScreen("reading");
    if (area === "Salud mental") setScreen("mental");
  }

  function openLesson(area: "Matemáticas" | "Lecto-escritura" | "Salud mental", index: number) {
    setSelectedArea(area);
    setSelectedLesson(lessonsByArea[area][index]);
    setSelectedAnswer("");
    setFeedback("");
    setScreen("exercise");
  }

  function checkAnswer() {
    if (!selectedLesson || !selectedAnswer) return;

    if (selectedAnswer === selectedLesson.correct) {
      setFeedback("¡Muy bien! Respuesta correcta 🎉");
    } else {
      setFeedback(`Intenta otra vez.`);
    }
  }

  function backToArea() {
    setSelectedAnswer("");
    setFeedback("");
    if (selectedArea === "Matemáticas") setScreen("math");
    if (selectedArea === "Lecto-escritura") setScreen("reading");
    if (selectedArea === "Salud mental") setScreen("mental");
  }

  function renderLessonButtons(area: "Matemáticas" | "Lecto-escritura" | "Salud mental") {
    return (
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {lessonsByArea[area].map((lesson, index) => (
          <button
            key={lesson.title}
            onClick={() => openLesson(area, index)}
            className="card p-6 text-left hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold">{lesson.title}</h3>
            <p className="mt-2 text-sm text-white/70">
              (Los ejercicios son solo un ejemplo)
            </p>
          </button>
        ))}
      </div>
    );
  }

  return (
<main className="min-h-screen section-purple text-white px-6 py-10">

  {/* Barra superior */}
  <div className="mx-auto max-w-5xl mb-6 flex items-center justify-between">
    <Link href="/" className="text-white/80 hover:text-white">
      ← Volver al inicio
    </Link>

    <h1 className="text-2xl font-semibold">ANDEA</h1>

    <div />
  </div>

  {/* Contenedor centrado */}
  <div className="flex justify-center">

    {/* Marco del juego */}
    <div className="w-full max-w-5xl rounded-3xl bg-[#3c8bec] ring-1 ring-white/10 shadow-2xl overflow-hidden">

      <div className="p-16">



        {/* Pantalla 1 */}
        {screen === "welcome" && (
          <section className="mt-2 card p-18 text-center">
            <p className="text-xs uppercase tracking-widest text-white/70">
              Bienvenido al juego
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-hero-title">
              ¡Hola, explorador!
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/80 leading-relaxed">
              Prepárate para una aventura llena de retos, aprendizaje y diversión.
              En ANDEA podrás jugar, descubrir y aprender mientras superas misiones.
            </p>

            <button
              onClick={() => setScreen("name")}
              className="btn-pill btn-primary mt-8"
            >
              Ingresa tu nombre
            </button>
          </section>
        )}

        {/* Pantalla 2 */}
        {screen === "name" && (
          <section className="mt-2 card p-18">
            <h2 className="text-3xl font-semibold text-hero-title">
              ¿Cómo te llamas?
            </h2>
            <p className="mt-3 text-white/75">
              Escribe tu nombre para comenzar la aventura.
            </p>

            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Escribe tu nombre"
              className="mt-6 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
            />

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setScreen("welcome")}
                className="btn-pill btn-glass"
              >
                Volver
              </button>
              <button
                onClick={goToCode}
                className="btn-pill btn-primary"
              >
                Continuar
              </button>
            </div>
          </section>
        )}

        {/* Pantalla 3 */}
        {screen === "code" && (
          <section className="mt-2 card p-18">
            <h2 className="text-3xl font-semibold text-hero-title">
              ¡Hola, {playerName || "jugador"}!
            </h2>
            <p className="mt-3 text-white/75">
              Ingresa tu código de juego para entrar.
            </p>

            <input
              type="text"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value)}
              placeholder="Ingresa cualquier texto (demo)."
              className="mt-6 w-full rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-white/25"
            />

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setScreen("name")}
                className="btn-pill btn-glass"
              >
                Volver
              </button>
              <button
                onClick={enterGame}
                className="btn-pill btn-primary"
              >
                Entrar al juego
              </button>
            </div>
          </section>
        )}

        {/* Pantalla 4 */}
        {screen === "menu" && (
          <section className="mt-2 card p-8">
            <h2 className="mt-3 text-3xl font-semibold text-hero-title">
              Elige tu aventura, {playerName}
            </h2>
            <p className="mt-3 text-white/80">
              Escoge una sección para comenzar tus lecciones.
            </p>

            <div className="mt-8 p-8 grid gap-2 md:grid-cols-3">
              <button
                onClick={() => openArea("Matemáticas")}
                className="card p-6 text-left hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold">Matemáticas</h3>
                <p className="mt-2 text-sm text-white/70">
                  Números, sumas, restas y más retos.
                </p>
              </button>

              <button
                onClick={() => openArea("Lecto-escritura")}
                className="card p-6 text-left hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold">Lecto-escritura</h3>
                <p className="mt-2 text-sm text-white/70">
                  Palabras, lectura y comprensión.
                </p>
              </button>

              <button
                onClick={() => openArea("Salud mental")}
                className="card p-6 text-left hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold">Salud mental</h3>
                <p className="mt-2 text-sm text-white/70">
                  Emociones, calma y bienestar.
                </p>
              </button>
            </div>
          </section>
        )}

        {/* Matemáticas */}
        {screen === "math" && (
          <section className="card p-8">
            <h2 className="text-3xl font-semibold text-hero-title">Matemáticas</h2>
            {renderLessonButtons("Matemáticas")}
            <button onClick={() => setScreen("menu")} className="btn-pill btn-glass mt-8">
              Volver al menú
            </button>
          </section>
        )}

        {/* Lecto-escritura */}
        {screen === "reading" && (
          <section className="card p-8">
            <h2 className="text-3xl font-semibold text-hero-title">Lecto-escritura</h2>
            {renderLessonButtons("Lecto-escritura")}
            <button onClick={() => setScreen("menu")} className="btn-pill btn-glass mt-8">
              Volver al menú
            </button>
          </section>
        )}

        {/* Salud mental */}
        {screen === "mental" && (
          <section className="card p-8">
            <h2 className="text-3xl font-semibold text-hero-title">Salud mental</h2>
            {renderLessonButtons("Salud mental")}
            <button onClick={() => setScreen("menu")} className="btn-pill btn-glass mt-8">
              Volver al menú
            </button>
          </section>
        )}

        {/* Ejercicio */}
        {screen === "exercise" && selectedLesson && (
          <section className="mt-2 card p-6">
            <p className="text-xs uppercase tracking-widest text-white/70">
              {selectedArea}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-hero-title">
              {selectedLesson.title}
            </h2>
            <p className="mt-5 text-lg text-white/90">{selectedLesson.question}</p>

            <div className="mt-6 grid gap-3">
              {selectedLesson.options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedAnswer(option)}
                  className={`rounded-xl px-4 py-3 text-left ring-1 transition ${
                    selectedAnswer === option
                      ? "bg-white text-black ring-white"
                      : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={backToArea} className="btn-pill btn-glass">
                Volver
              </button>
              <button onClick={checkAnswer} className="btn-pill btn-primary">
                Revisar respuesta
              </button>
            </div>

            {feedback && (
              <div className="mt-6 rounded-xl bg-white/10 p-4 ring-1 ring-white/10">
                <p className="text-white/90">{feedback}</p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
    </div>
    </main>
  );
}