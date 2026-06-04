/**
 * Single-page composition. Sections are added in subsequent batches; this
 * minimal hero locks a green build first and shows the theme + fonts wired up.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="spectrum-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 inline-block rounded-full border border-foreground/15 bg-background/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-foreground/70 backdrop-blur-sm">
          Raw Web Audio API
        </p>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl">
          Sound, made
          <span className="block bg-gradient-to-r from-rose via-violet to-cyan bg-clip-text text-transparent">
            to be played
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-foreground/70 sm:text-lg">
          A single-page instrument: a hand-wired synthesizer and a live
          visualizer of the sound you make, built on raw Web Audio.
        </p>
      </section>
    </main>
  );
}
