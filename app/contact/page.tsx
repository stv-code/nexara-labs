import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <section className="grid grid-cols-1 border-b border-border md:grid-cols-2">
        <div className="border-b border-border p-8 md:border-b-0 md:border-r md:px-20 md:py-28">
          <p className="label mb-6 text-amber">Contact</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Tell us what you&apos;re working with.
          </h1>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            Most inquiries start on WhatsApp. For tenders and procurement, use the government
            contact channel instead.
          </p>
        </div>

        <div className="divide-y divide-border bg-secondary/60">
          <div className="p-8 md:p-16">
            <div className="mb-4 flex items-center gap-3">
              <span className="size-2 animate-pulse rounded-full bg-amber" />
              <span className="label text-amber">Preferred</span>
            </div>
            <h2 className="font-display text-2xl font-bold">WhatsApp</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fastest response. Describe your project or issue directly.
            </p>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="label mt-6 inline-block transition-colors hover:text-amber"
            >
              Open chat -&gt;
            </a>
          </div>

          <div className="p-8 md:p-16">
            <span className="label text-muted-foreground">Email</span>
            <h2 className="mt-4 font-display text-2xl font-bold">General inquiries</h2>
            <p className="mt-3 text-sm text-muted-foreground">hello@nexaralabs.co.ke</p>
            <a
              href="mailto:hello@nexaralabs.co.ke"
              className="label mt-6 inline-block transition-colors hover:text-amber"
            >
              Send email -&gt;
            </a>
          </div>

          <div className="p-8 md:p-16">
            <span className="label text-muted-foreground">Government</span>
            <h2 className="mt-4 font-display text-2xl font-bold">Tenders &amp; procurement</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Capability statement and compliance documents.
            </p>
            <Link
              href="/government"
              className="label mt-6 inline-block transition-colors hover:text-amber"
            >
              View capability statement -&gt;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
