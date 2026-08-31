const projects = [
  {
    n: "01",
    name: "ZulaPath",
    kind: "Study abroad & scholarship platform",
    body: "Multi-role platform handling scholarship guidance and study-abroad placement, built on Next.js and Supabase with a headless CMS.",
    stack: ["Next.js", "Supabase", "Sanity CMS"],
  },
  {
    n: "02",
    name: "SafariRail",
    href: "https://safarirail.co.ke",
    kind: "Tourism booking platform",
    body: "Live booking site for SGR tourism, deployed and serving customers.",
    stack: ["React", "Netlify"],
  },
  {
    n: "03",
    name: "Proxari",
    kind: "Community shopping platform",
    body: "International proxy shopping community platform with a forwarder directory, built from a structured PRD and user survey.",
    stack: ["React"],
  },
  {
    n: "04",
    name: "Legal Practice Digital Infrastructure",
    kind: "Client engagement",
    body: "Domain registration, managed hosting, and Google Workspace setup delivered for a Nairobi legal practice.",
    stack: ["Domains", "Hosting", "Google Workspace"],
  },
];

export default function Portfolio() {
  return (
    <main>
      <section className="grid grid-cols-1 border-b border-border md:grid-cols-2">
        <div className="border-b border-border p-8 md:border-b-0 md:border-r md:px-20 md:py-28">
          <p className="label mb-6 text-amber">Portfolio</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Platforms we&apos;ve built and systems we&apos;ve deployed.
          </h1>
        </div>
        <div className="flex items-end bg-secondary/60 p-8 md:px-20 md:py-28">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            A mix of in-house products and client engagements, spanning web platforms,
            infrastructure, and government-adjacent delivery.
          </p>
        </div>
      </section>

      <div className="divide-y divide-border border-b border-border">
        {projects.map((project) => (
          <article
            key={project.n}
            className="grid grid-cols-1 gap-8 px-6 py-14 transition-colors hover:bg-secondary/50 md:grid-cols-[80px_1fr_1fr] md:px-20"
          >
            <span className="font-display text-2xl font-bold text-amber/30">{project.n}</span>
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">{project.name}</h2>
              <p className="label mt-3 text-muted-foreground">{project.kind}</p>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label mt-4 inline-block text-amber"
                >
                  safarirail.co.ke -&gt;
                </a>
              )}
            </div>
            <div>
              <p className="max-w-md leading-relaxed text-muted-foreground">{project.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
