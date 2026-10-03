import Link from "next/link";
import { businessInfo, footerLinks } from "@/lib/site-data";
import { socialLinks } from "@/lib/social-links";

const socialIcons = {
  instagram: "◎",
  facebook: "◌",
  tiktok: "◍",
  whatsapp: "✆",
};

export function SiteFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FFF9E6]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-black uppercase tracking-[0.14em]">{businessInfo.name}</div>
            <p className="mt-3 text-sm text-[#FFF9E6]/75">{businessInfo.descriptor}</p>
            <div className="mt-5 flex items-center gap-3">
              {Object.entries(socialLinks).map(([key, url]) => (
                <a
                  key={key}
                  href={url === `YOUR_${key.toUpperCase()}_URL` ? "#" : url}
                  target={url.startsWith("http") ? "_blank" : undefined}
                  rel={url.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFF9E6]/20 bg-[#FFF9E6]/5 text-sm font-bold text-[#FFDD00] transition hover:border-[#FFDD00]"
                  aria-label={key}
                >
                  {socialIcons[key as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFDD00]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#FFF9E6]/80">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="transition hover:text-[#FFF9E6]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFDD00]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#FFF9E6]/80">
              <li>{businessInfo.email}</li>
              <li>{businessInfo.phone}</li>
              <li>{businessInfo.location}</li>
              <li>{businessInfo.openingHours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFDD00]">
              Policies
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#FFF9E6]/80">
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Copyright © 2026</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
