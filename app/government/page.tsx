const services = [
  "Web & application development for public institutions",
  "Domain registration, hosting & DNS management",
  "Google Workspace deployment & migration",
  "Security configuration review & assessment",
  "ICT systems integration & technical support",
];

const compliance = [
  { label: "AGPO Certification", value: "Youth Category — Active", code: "DOC-01" },
  { label: "Business Registration", value: "Available on request", code: "DOC-02" },
  { label: "KRA PIN", value: "Available on request", code: "DOC-03" },
  { label: "Tax Compliance Certificate", value: "Available on request", code: "DOC-04" },
];

export default function Government() {
  return (
    <main>
      {/* Header — document register */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-amber/50 px-2 py-1 font-mono text-[11px] text-amber">
              AGPO CERTIFIED
            </span>
            <span className="font-mono text-[11px] text-muted">REF: NXL-GOV-2026</span>
          </div>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Capability statement for government &amp; procurement engagement
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Nexara Labs is an AGPO-certified ICT supplier under the Youth
            Category, providing systems integration, infrastructure, and
            digital platform development for public institutions.
          </p>
        </div>
      </section>

      {/* Services offered */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="label text-xs text-muted">Section 1 — Services offered</p>
          <ul className="mt-6 divide-y divide-border border border-border">
            {services.map((s, i) => (
              <li key={s} className="flex items-center gap-4 px-5 py-4 text-sm">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-text">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="scroll-mt-20 border-b border-border bg-panel2">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="label text-xs text-muted">Section 2 — Compliance &amp; certification</p>
          <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {compliance.map((c) => (
              <div key={c.code} className="flex items-center justify-between bg-white p-5">
                <div>
                  <p className="font-mono text-[11px] text-muted">{c.code}</p>
                  <p className="mt-1 text-sm text-text">{c.label}</p>
                </div>
                <p className="label text-xs text-amber">{c.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Full certification and registration documents are issued
            directly to procurement officers on request.
          </p>
        </div>
      </section>

      {/* Past performance */}
      <section id="performance" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="label text-xs text-muted">Section 3 — Past performance</p>
          <div className="mt-6 border border-border p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-medium">
                Biketi &amp; Company Advocates
              </h3>
              <span className="font-mono text-[11px] text-muted">REF: NXL-PP-001</span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Engaged to deliver domain registration, web hosting, and Google
              Workspace setup for a Nairobi-based legal practice. Scope
              covered infrastructure procurement through to deployment and
              handover.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Domain Registration", "Web Hosting", "Google Workspace"].map((t) => (
                <span key={t} className="border border-border px-2 py-1 font-mono text-[11px] text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for procurement */}
      <section>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">For procurement officers</h2>
            <p className="mt-2 max-w-md text-sm text-muted">
              Request the full capability statement, compliance documents, or
              discuss a specific tender requirement directly.
            </p>
          </div>
          <a
            href="mailto:hello@nexaralabs.co.ke?subject=Government%20Procurement%20Inquiry"
            className="shrink-0 bg-amber px-6 py-3 text-sm font-medium text-ink hover:bg-amber/90"
          >
            Request documents
          </a>
        </div>
      </section>
    </main>
  );
}
