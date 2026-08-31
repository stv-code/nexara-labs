const facts = [
  {
    label: "Founder",
    value: "Final-year BSc Cybersecurity, TUM",
    note: "Leads technical delivery across all Nexara engagements, from infrastructure to application security.",
  },
  { label: "Based in", value: "Nairobi, Kenya" },
  { label: "Certification", value: "AGPO Youth Category" },
];

export default function About() {
  return (
    <main>
      <section className="grid grid-cols-1 border-b border-border md:grid-cols-2">
        <div className="border-b border-border p-8 md:border-b-0 md:border-r md:px-20 md:py-28">
          <p className="label mb-6 text-amber">About</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            A technical practice, not a reselling outfit.
          </h1>
        </div>
        <div className="space-y-6 bg-secondary/60 p-8 md:px-20 md:py-28">
          <p className="leading-relaxed text-muted-foreground">
            Nexara Labs is a Nairobi-based ICT and digital solutions company. Most local providers
            in this space resell hosting and call it development. Nexara is built differently:
            every engagement is led by an engineer with a formal cybersecurity background, not a
            sales layer in front of a subcontractor.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            That shows up in the work. Platforms are built rather than templated, infrastructure is
            configured rather than defaulted, and security is treated as a first-class concern
            rather than an afterthought bolted on after launch.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Nexara holds AGPO Youth Category certification and works directly with public
            institutions on ICT systems integration, alongside private clients across education,
            legal, and tourism sectors.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 divide-y divide-border border-b border-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {facts.map((fact) => (
          <div key={fact.label} className="p-8 md:p-16">
            <p className="label mb-6 text-muted-foreground">{fact.label}</p>
            <h2 className="font-display text-2xl font-bold tracking-tight">{fact.value}</h2>
            {fact.note && (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{fact.note}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
