import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-20 text-paper/90 md:px-20">
      <div className="grid grid-cols-1 gap-12 border-b border-paper/10 pb-20 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6 font-display text-3xl font-extrabold tracking-tight">
            NEXARA<span className="text-amber">LABS</span>
          </div>
          <p className="max-w-xs leading-relaxed text-paper/60">
            ICT infrastructure and digital systems, built from Nairobi.
          </p>
        </div>

        <div>
          <h2 className="mb-6 font-display text-xs font-bold uppercase tracking-widest text-amber">
            Company
          </h2>
          <ul className="space-y-4 text-sm font-medium text-paper/60">
            <li><Link href="/services" className="transition-colors hover:text-paper">Services</Link></li>
            <li><Link href="/portfolio" className="transition-colors hover:text-paper">Portfolio</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-paper">About</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-paper">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-display text-xs font-bold uppercase tracking-widest text-amber">
            Government
          </h2>
          <ul className="space-y-4 text-sm font-medium text-paper/60">
            <li><Link href="/government" className="transition-colors hover:text-paper">Capability Statement</Link></li>
            <li><Link href="/government#compliance" className="transition-colors hover:text-paper">Compliance &amp; Certification</Link></li>
            <li><Link href="/government#performance" className="transition-colors hover:text-paper">Past Performance</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 pt-10 text-[11px] font-bold uppercase tracking-[0.2em] text-paper/30 md:flex-row">
        <p>&copy; 2026 Nexara Labs Ltd. All rights reserved.</p>
        <p>AGPO Youth Category Certified - Nairobi, KE</p>
      </div>
    </footer>
  );
}
