export default function Contact() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="label text-xs text-amber">Contact</p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Tell us what you&apos;re working with.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Most inquiries start on WhatsApp. For tenders and procurement,
            use the government contact channel instead.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-ink p-7 transition-colors hover:bg-panel"
          >
            <span className="font-mono text-xs text-signal">PREFERRED</span>
            <h3 className="mt-3 font-display text-lg font-medium">WhatsApp</h3>
            <p className="mt-2 text-sm text-muted">
              Fastest response. Describe your project or issue directly.
            </p>
            <p className="label mt-4 text-xs text-amber group-hover:underline">
              Open chat →
            </p>
          </a>

          <a
            href="mailto:hello@nexaralabs.co.ke"
            className="group bg-ink p-7 transition-colors hover:bg-panel"
          >
            <span className="font-mono text-xs text-muted">EMAIL</span>
            <h3 className="mt-3 font-display text-lg font-medium">General inquiries</h3>
            <p className="mt-2 text-sm text-muted">hello@nexaralabs.co.ke</p>
            <p className="label mt-4 text-xs text-amber group-hover:underline">
              Send email →
            </p>
          </a>

          <a
            href="/government"
            className="group bg-ink p-7 transition-colors hover:bg-panel"
          >
            <span className="font-mono text-xs text-amber">GOVERNMENT</span>
            <h3 className="mt-3 font-display text-lg font-medium">Tenders & procurement</h3>
            <p className="mt-2 text-sm text-muted">
              Capability statement and compliance documents.
            </p>
            <p className="label mt-4 text-xs text-amber group-hover:underline">
              View capability statement →
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
