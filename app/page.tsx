import Link from "next/link";
import StatusPanel from "@/components/StatusPanel";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div>
            <p className="label text-xs text-amber">Nairobi · ICT &amp; Digital Systems</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Infrastructure and software for institutions that can&apos;t afford downtime.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              Nexara Labs builds and maintains the systems behind organizations:
              web platforms, hosting and domains, Workspace deployments, and
              security assessments. AGPO-certified for government engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-amber px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-amber/90"
              >
                View services
              </Link>
              <Link
                href="/government"
                className="border border-border px-5 py-3 text-sm text-text transition-colors hover:border-amber/60"
              >
                Capability statement →
              </Link>
            </div>
          </div>

          <div className="md:pt-8">
            <StatusPanel />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold">What we do</h2>
            <Link href="/services" className="label text-xs text-amber hover:underline">
              All services →
            </Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {[
              {
                code: "01",
                title: "Web & application development",
                body: "Custom platforms built on Next.js and Supabase, from public-facing sites to multi-role portals with admin tooling.",
              },
              {
                code: "02",
                title: "Hosting, domains & Workspace",
                body: "Domain registration, managed hosting, DNS, and Google Workspace setup and migration for teams and institutions.",
              },
              {
                code: "03",
                title: "Security consulting",
                body: "Vulnerability assessment, secure configuration review, and practical hardening grounded in a cybersecurity background, not generic checklists.",
              },
              {
                code: "04",
                title: "Government & procurement systems",
                body: "AGPO-certified ICT supplier. Capability statement, compliance documentation, and systems integration for public sector engagement.",
              },
            ].map((s) => (
              <div key={s.code} className="bg-ink p-7">
                <span className="font-mono text-xs text-amber">{s.code}</span>
                <h3 className="mt-4 font-display text-lg font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past performance strip */}
      <section className="border-b border-border bg-panel2">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="label text-xs text-muted">Recent engagement</p>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-display text-xl font-medium">
                Biketi &amp; Company Advocates
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                Domain registration, web hosting, and Google Workspace deployment
                for a Nairobi legal practice, delivered end to end.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="label shrink-0 border border-border px-4 py-2 text-xs text-text hover:border-amber/60"
            >
              See full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Have a system that needs building or fixing?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Most inquiries start on WhatsApp. Tell us what you&apos;re working with.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-amber px-6 py-3 text-sm font-medium text-ink hover:bg-amber/90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
