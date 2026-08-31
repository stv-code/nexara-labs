import Image from "next/image";
import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Web & application development",
    body: "Custom platforms built on Next.js and Supabase, from public-facing sites to multi-role portals with admin tooling.",
  },
  {
    n: "02",
    title: "Hosting, domains & Workspace",
    body: "Domain registration, managed hosting, DNS, and Google Workspace setup and migration for teams and institutions.",
  },
  {
    n: "03",
    title: "Security consulting",
    body: "Vulnerability assessment, secure configuration review, and practical hardening grounded in a cybersecurity background, not generic checklists.",
  },
  {
    n: "04",
    title: "Government & procurement systems",
    body: "AGPO-certified ICT supplier. Capability statement, compliance documentation, and systems integration for public sector engagement.",
  },
];

const status = [
  { code: "01 / WEB", label: "Web & application development", state: "Operational" },
  { code: "02 / INF", label: "Hosting, domains & Workspace", state: "Operational" },
  { code: "03 / SEC", label: "Security consulting & assessments", state: "Operational" },
  { code: "04 / GOV", label: "Government procurement", state: "AGPO Certified", strong: true },
];

export default function Home() {
  return (
    <main>
      <section className="grid min-h-[85vh] grid-cols-1 border-b border-border md:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-border p-8 md:border-b-0 md:border-r md:p-20">
          <div className="mb-8 inline-block w-fit border border-border bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
            Nairobi / ICT &amp; Digital Systems
          </div>
          <h1 className="mb-8 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Infrastructure and software for institutions that{" "}
            <span className="text-amber">can&apos;t afford</span> downtime.
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Nexara Labs builds and maintains the systems behind organizations: web platforms,
            hosting and domains, Workspace deployments, and security assessments. AGPO-certified
            for government engagement.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-amber px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-paper"
            >
              View services
            </Link>
            <Link
              href="/government"
              className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-[14px] font-bold uppercase tracking-wider transition-all hover:bg-secondary"
            >
              Capability statement <span aria-hidden>-&gt;</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-secondary/60 p-8 md:p-20">
          <div className="border border-border bg-card p-8 shadow-sm">
            <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                System status
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Nairobi, KE
                </span>
                <span className="size-2 animate-pulse rounded-full bg-amber" />
              </div>
            </div>

            <div className="space-y-6">
              {status.map((row) => (
                <div key={row.code} className="flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-tight text-muted-foreground">
                      {row.code}
                    </span>
                    <span className="font-display text-base md:text-lg">{row.label}</span>
                  </div>
                  <span
                    className={
                      row.strong
                        ? "shrink-0 border border-ink bg-ink px-2 py-1 text-[11px] font-bold uppercase text-paper"
                        : "shrink-0 border border-amber/20 bg-amber/10 px-2 py-1 text-[11px] font-bold uppercase text-amber"
                    }
                  >
                    {row.state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-6 py-24 md:px-20">
        <div className="mb-16 flex items-baseline justify-between gap-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">What we do</h2>
          <Link href="/services" className="label text-muted-foreground transition-colors hover:text-amber">
            All services -&gt;
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {services.map((service) => (
            <div key={service.n} className="space-y-4">
              <span className="font-display text-4xl font-bold text-amber/20">{service.n}</span>
              <h3 className="font-display text-xl font-bold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b border-border p-12 md:border-b-0 md:border-r md:p-24">
          <h2 className="mb-12 text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Recent engagement
          </h2>
          <Image
            src="/engagement-legal-practice.jpg"
            alt="Interior of a Nairobi legal practice office"
            width={1024}
            height={1024}
            className="mb-8 aspect-square w-full border border-border object-cover grayscale"
          />
          <h3 className="mb-4 font-display text-3xl font-bold">
            Legal Practice Digital Infrastructure
          </h3>
          <p className="max-w-md text-muted-foreground">
            Domain registration, web hosting, and Google Workspace deployment for a Nairobi legal
            practice, delivered end to end.
          </p>
          <Link href="/portfolio" className="label mt-8 inline-block text-muted-foreground transition-colors hover:text-amber">
            See full portfolio -&gt;
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center p-12 text-center md:p-24">
          <div className="max-w-md">
            <h2 className="mb-8 font-display text-4xl font-bold">
              Have a system that needs building or fixing?
            </h2>
            <p className="mb-10 text-muted-foreground">
              Most inquiries start on WhatsApp. Tell us what you&apos;re working with.
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="block w-full bg-ink py-5 text-[13px] font-bold uppercase tracking-widest text-paper transition-colors hover:bg-amber hover:text-ink"
              >
                Get in touch
              </Link>
              <a
                href="mailto:hello@nexaralabs.co.ke"
                className="block w-full border border-foreground py-5 text-[13px] font-bold uppercase tracking-widest transition-colors hover:bg-secondary"
              >
                hello@nexaralabs.co.ke
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
