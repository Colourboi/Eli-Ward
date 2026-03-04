export default function ContactPage() {
  return (
    <main>
      <section className="retro-panel">
        <h1 className="retro-title">Contact</h1>
        <p className="retro-copy mb-6">Book a session, ask about pricing, or say hi.</p>
        <div className="mb-8 h-px bg-zinc-700/70" />

        <form className="grid gap-4 md:max-w-xl">
          <label className="grid gap-1 text-xs uppercase tracking-[0.13em] text-zinc-400">
            Name
            <input className="retro-input" type="text" name="name" />
          </label>
          <label className="grid gap-1 text-xs uppercase tracking-[0.13em] text-zinc-400">
            Email
            <input className="retro-input" type="email" name="email" />
          </label>
          <label className="grid gap-1 text-xs uppercase tracking-[0.13em] text-zinc-400">
            Message
            <textarea className="retro-input min-h-32" name="message" />
          </label>
          <button type="submit" className="retro-btn retro-btn-primary w-fit">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
