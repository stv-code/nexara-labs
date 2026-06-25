import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-base font-semibold">
              <span className="flex h-6 w-6 items-center justify-center border border-amber/60 text-xs font-mono text-amber">
                N
              </span>
              Nexara Labs
            </div>
            <p className="mt-3 text-sm text-muted">
              ICT infrastructure and digital systems, built from Nairobi.
            </p>
          </div>

          <div>
            <p className="label text-xs text-muted">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/services" className="text-muted hover:text-text">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted hover:text-text">Portfolio</Link></li>
              <li><Link href="/about" className="text-muted hover:text-text">About</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-text">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="label text-xs text-muted">Government</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/government" className="text-muted hover:text-text">Capability Statement</Link></li>
              <li><Link href="/government#compliance" className="text-muted hover:text-text">Compliance &amp; Certification</Link></li>
              <li><Link href="/government#performance" className="text-muted hover:text-text">Past Performance</Link></li>
            </ul>
          </div>

          <div>
            <p className="label text-xs text-muted">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Nairobi, Kenya</li>
              <li>
                <a href="https://wa.me/254700000000" className="hover:text-text">
                  WhatsApp inquiries
                </a>
              </li>
              <li>
                <a href="mailto:hello@nexaralabs.co.ke" className="hover:text-text">
                  hello@nexaralabs.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p className="font-mono">© {new Date().getFullYear()} NEXARA LABS LTD. ALL RIGHTS RESERVED.</p>
          <p className="font-mono">AGPO YOUTH CATEGORY CERTIFIED · NAIROBI, KE</p>
        </div>
      </div>
    </footer>
  );
}
