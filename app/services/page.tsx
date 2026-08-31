import Link from "next/link";

const services = [
  {
    code: "WEB",
    n: "01",
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
    n: "02",
    title: "Hosting, domains & Workspace",
    body: "The infrastructure work that keeps an organization online and email reliably delivered, handled correctly the first time.",
    items: [
      "Domain registration & DNS management",
      "Managed web hosting & deployment",
      "Google Workspace setup & migration",
      "SSL, email authentication (SPF/DKIM/DMARC)",
    ],
  },
  {
    code: "SEC",
    n: "03",
    title: "Security consulting",
    body: "Practical security work grounded in a cybersecurity background: what is actually exploitable, not a generic compliance checklist.",
    items: [
      "Vulnerability assessment & configuration review",
      "Secure deployment practices",
      "Incident response guidance",
      "Staff security awareness briefings",
    ],
  },
  {
    code: "GOV",
    n: "04",
    title: "Government & procurement systems",
    body: "AGPO-certified ICT supplier capability for public sector tenders, from documentation to delivery. See the full capability statement.",
    items: [
      "ICT systems integration for public institutions",
      "Tender-ready documentation & compliance",
      "Domain, hosting & Workspace for government offices",
      "AGPO Youth Category certified",
    ],
  },
];

export default function Services() {
  return (
    <main>
      <section className="grid grid-cols-1 border-b border-border md:grid-cols-2">
        <div className="border-b border-border p-8 md:border-b-0 md:border-r md:px-20 md:py-28">
          <p className="label mb-6 text-amber">Services</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            ICT infrastructure and digital systems, scoped to what you actually need.
          </h1>
        </div>
        <div className="flex items-end bg-secondary/60 p-8 md:px-20 md:py-28">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Four service lines, delivered directly by the engineer who scopes them. No sales layer,
            no subcontracted handoffs.
          </p>
        </div>
      </section>

      {services.map((service) => (
        <section
          key={service.code}
          className="grid grid-cols-1 border-b border-border md:grid-cols-2"
        >
          <div className="border-b border-border p-8 md:border-b-0 md:border-r md:p-20">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-display text-4xl font-bold text-amber/20">{service.n}</span>
              <span className="border border-border px-2 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {service.code}
              </span>
            </div>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight">{service.title}</h2>
            <p className="max-w-md leading-relaxed text-muted-foreground">{service.body}</p>
          </div>
          <div className="p-8 md:p-20">
            <ul className="divide-y divide-border border-t border-border">
              {service.items.map((item) => (
                <li key={item} className="flex items-baseline gap-4 py-5 text-base">
                  <span className="text-amber" aria-hidden>/</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {service.code === "GOV" && (
              <Link
                href="/government"
                className="label mt-8 inline-block text-muted-foreground transition-colors hover:text-amber"
              >
                View capability statement -&gt;
              </Link>
            )}
          </div>
        </section>
      ))}

      <section className="flex flex-col items-center px-6 py-28 text-center">
        <h2 className="mb-6 font-display text-4xl font-bold">Not sure where to start?</h2>
        <p className="mb-10 max-w-md text-muted-foreground">
          Describe what you&apos;re working with and we&apos;ll scope it.
        </p>
        <Link
          href="/contact"
          className="bg-amber px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-paper"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
