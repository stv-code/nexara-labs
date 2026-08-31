import Link from "next/link";

const offered = [
  "Web & application development for public institutions",
  "Domain registration, hosting & DNS management",
  "Google Workspace deployment & migration",
  "Security configuration review & assessment",
  "ICT systems integration & technical support",
];

const compliance = [
  { ref: "DOC-01", name: "AGPO Certification", status: "Youth Category - Active", active: true },
  { ref: "DOC-02", name: "Business Registration", status: "Available on request" },
  { ref: "DOC-03", name: "KRA PIN", status: "Available on request" },
  { ref: "DOC-04", name: "Tax Compliance Certificate", status: "Available on request" },
];

export default function Government() {
  return (
    <main>
      <section className="grid grid-cols-1 border-b border-border md:grid-cols-2">
        <div className="border-b border-border p-8 md:border-b-0 md:border-r md:px-20 md:py-28">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="border border-ink bg-ink px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-paper">
              AGPO Certified
            </span>
            <span className="label text-muted-foreground">Ref: NXL-GOV-2026</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Capability statement for government &amp; procurement engagement
          </h1>
        </div>
        <div className="flex items-end bg-secondary/60 p-8 md:px-20 md:py-28">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Nexara Labs is an AGPO-certified ICT supplier under the Youth Category, providing
            systems integration, infrastructure, and digital platform development for public
            institutions.
          </p>
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 md:px-20">
        <h2 className="label mb-12 text-muted-foreground">Section 1 - Services offered</h2>
        <ul className="divide-y divide-border border-t border-border">
          {offered.map((item, index) => (
            <li key={item} className="flex items-baseline gap-6 py-6">
              <span className="font-display text-sm font-bold text-amber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg md:text-xl">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="compliance" className="border-b border-border bg-secondary/60 px-6 py-20 md:px-20">
        <h2 className="label mb-12 text-muted-foreground">
          Section 2 - Compliance &amp; certification
        </h2>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
          {compliance.map((doc) => (
            <div key={doc.ref} className="bg-card p-8">
              <span className="label text-muted-foreground">{doc.ref}</span>
              <h3 className="mt-4 font-display text-lg font-bold">{doc.name}</h3>
              <p
                className={
                  doc.active
                    ? "mt-3 text-[11px] font-bold uppercase tracking-widest text-amber"
                    : "mt-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
                }
              >
                {doc.status}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-sm text-muted-foreground">
          Full certification and registration documents are issued directly to procurement officers
          on request.
        </p>
      </section>

      <section id="performance" className="border-b border-border px-6 py-20 md:px-20">
        <h2 className="label mb-12 text-muted-foreground">Section 3 - Past performance</h2>
        <div className="border border-border bg-card p-8 md:p-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-bold">
              Legal Practice Digital Infrastructure
            </h3>
            <span className="label text-muted-foreground">Ref: NXL-PP-001</span>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Engaged to deliver domain registration, web hosting, and Google Workspace setup for a
            Nairobi-based legal practice. Scope covered infrastructure procurement through to
            deployment and handover.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Domain Registration", "Web Hosting", "Google Workspace"].map((tag) => (
              <span
                key={tag}
                className="border border-border px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b border-border p-12 md:border-b-0 md:border-r md:p-24">
          <h2 className="font-display text-4xl font-bold">For procurement officers</h2>
        </div>
        <div className="flex flex-col justify-center p-12 md:p-24">
          <p className="mb-10 max-w-md text-muted-foreground">
            Request the full capability statement, compliance documents, or discuss a specific
            tender requirement directly.
          </p>
          <Link
            href="/contact"
            className="w-fit bg-amber px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-paper"
          >
            Request documents
          </Link>
        </div>
      </section>
    </main>
  );
}
