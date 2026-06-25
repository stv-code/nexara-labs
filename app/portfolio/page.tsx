const projects = [
  {
    code: "01",
    name: "ZulaPath",
    type: "Study abroad & scholarship platform",
    body: "Multi-role platform (student, agent, admin) handling scholarship guidance and study-abroad placement, built on Next.js and Supabase with a headless CMS.",
    stack: ["Next.js", "Supabase", "Sanity CMS"],
  },
  {
    code: "02",
    name: "SafariRail",
    type: "Tourism booking platform",
    body: "Live booking site for SGR tourism, deployed and serving customers.",
    stack: ["React", "Netlify"],
    link: { href: "https://safarirail.co.ke", label: "safarirail.co.ke" },
  },
  {
    code: "03",
    name: "Proxari",
    type: "Community shopping platform",
    body: "International proxy shopping community platform with a forwarder directory, built from a structured PRD and user survey.",
    stack: ["React"],
  },
  {
    code: "04",
    name: "Biketi & Company Advocates",
    type: "Client engagement",
    body: "Domain registration, managed hosting, and Google Workspace setup delivered for a Nairobi legal practice.",
    stack: ["Domains", "Hosting", "Google Workspace"],
  },
];

export default function Portfolio() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="label text-xs text-amber">Portfolio</p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Platforms we&apos;ve built and systems we&apos;ve deployed.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            A mix of in-house products and client engagements, spanning web
            platforms, infrastructure, and government-adjacent delivery.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden border border-border bg-border px-0 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.code} className="bg-ink p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber">{p.code}</span>
                {p.link ? (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-xs text-signal hover:underline"
                  >
                    {p.link.label} ↗
                  </a>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-lg font-medium">{p.name}</h3>
              <p className="label mt-1 text-xs text-muted">{p.type}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-border px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
