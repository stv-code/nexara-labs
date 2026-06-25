export default function About() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="label text-xs text-amber">About</p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            A technical practice, not a reselling outfit.
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_320px]">
          <div className="space-y-5 text-sm leading-relaxed text-muted">
            <p>
              Nexara Labs is a Nairobi-based ICT and digital solutions company.
              Most local providers in this space resell hosting and call it
              development. Nexara is built differently: every engagement is
              led by an engineer with a formal cybersecurity background, not
              a sales layer in front of a subcontractor.
            </p>
            <p>
              That shows up in the work. Platforms are built rather than
              templated, infrastructure is configured rather than defaulted,
              and security is treated as a first-class concern rather than
              an afterthought bolted on after launch.
            </p>
            <p>
              Nexara holds AGPO Youth Category certification and works
              directly with public institutions on ICT systems integration,
              alongside private clients across education, legal, and
              tourism sectors.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-border p-6">
              <p className="label text-xs text-muted">Founder</p>
              <p className="mt-2 font-display text-base font-medium">
                Final-year BSc Cybersecurity, TUM
              </p>
              <p className="mt-2 text-sm text-muted">
                Leads technical delivery across all Nexara engagements,
                from infrastructure to application security.
              </p>
            </div>
            <div className="border border-border p-6">
              <p className="label text-xs text-muted">Based in</p>
              <p className="mt-2 font-display text-base font-medium">Nairobi, Kenya</p>
            </div>
            <div className="border border-border p-6">
              <p className="label text-xs text-muted">Certification</p>
              <p className="mt-2 font-display text-base font-medium">AGPO Youth Category</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
