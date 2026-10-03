import Link from "next/link";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1A1A1A]/10 bg-[#FFF9E6]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="PhysioFit home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFDD00] text-sm font-black text-[#1A1A1A]">
            PF
          </div>
          <div>
            <div className="text-lg font-black uppercase tracking-[0.12em] text-[#1A1A1A]">
              PhysioFit
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/70">
              Physiotherapy • Massage • Wellness
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1A1A1A]/75 transition hover:text-[#1A1A1A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-[#FFDD00] px-4 py-2 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#f4d100]"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
