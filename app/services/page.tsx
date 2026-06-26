import Link from "next/link";

const services = [
  {
    code: "WEB",
    title: "Web & application development",
    body: "Custom-built platforms rather than templates. Multi-role portals, admin tooling, content management, and integrations, built on Next.js and Supabase.",
    items: [
      "Marketing & institutional websites",
      "Multi-role web platforms (student, agent, admin portals etc.)",
      "Content management via headless CMS",
      "API integrations and custom admin tooling",
    ],
  },
  {
    code: "INF",
    title: "Hosting, domains & Workspace",
    body: "The unglamorous infrastructure work that keeps an organization online and email reliably delivered, handled correctly the first time.",
    items: [
      "Domain registration & DNS management",
      "Managed web hosting & deployment",
      "Google Workspace setup & migration",
      "SSL, email authentication (SPF/DKIM/DMARC)",
    ],
  },
  {
    code: "SEC",
    title: "Security consulting",
    body: "Practical security work grounded in a cybersecurity background: what's actually exploitable, not a generic compliance checklist.",
    items: [
      "Vulnerability assessment & configuration review",
      "Secure deployment practices",
      "Incident response guidance",
      "Staff security awareness briefings",
    ],
  },
  {
    code: "GOV",
    title: "Government & procurement systems",
    body: "AGPO-certified ICT supplier capability for public sector tenders, from documentation to delivery. See the full capability statement.",
    items: [
      "ICT systems integration for public institutions",
      "Tender-ready documentation & compliance",
      "Domain, hosting & Workspace for government offices",
      "AGPO Youth Category certified",
    ],
    cta: { href: "/government", label: "View capability statement →" },
  },
];

export default function Services() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="label text-xs text-amber">Services</p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            ICT infrastructure and digital systems, scoped to what you actually need.
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl divide-y divide-border px-6">
          {services.map((s) => (
            <div key={s.code} className="grid gap-6 py-12 md:grid-cols-[200px_1fr] md:gap-12 md:py-16">
              <div>
                <span className="font-mono text-xs text-amber">{s.code}</span>
                <h2 className="mt-3 font-display text-xl font-medium leading-snug">{s.title}</h2>
              </div>
              <div>
                <p className="max-w-xl text-sm leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                      {item}
                    </li>
                  ))}
                </ul>
                {s.cta && (
                  <Link
                    href={s.cta.href}
                    className="label mt-6 inline-block text-xs text-amber hover:underline"
                  >
                    {s.cta.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-panel2">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">Not sure where to start?</h2>
            <p className="mt-2 text-sm text-muted">Describe what you&apos;re working with and we&apos;ll scope it.</p>
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
