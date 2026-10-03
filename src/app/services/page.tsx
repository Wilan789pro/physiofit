import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services & Prices"
        title="Bookable services available through the clinic"
        description="All services are managed through the admin dashboard and can be updated without changing frontend code."
      />

      <div className="mt-12 space-y-4">
        {services.map((service) => (
          <article key={service.id} className="grid gap-5 rounded-[28px] border border-[#1A1A1A]/10 bg-white p-5 md:grid-cols-[1.2fr_0.9fr_0.6fr] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#FFF9E6] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A]">
                  {service.category}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#1A1A1A]/60">
                  {service.duration} min
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-[#1A1A1A]">{service.name}</h3>
              <p className="mt-2 text-sm leading-7 text-[#1A1A1A]/70">{service.description}</p>
            </div>
            <div className="rounded-2xl bg-[#FFF9E6] p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]/60">Price</p>
              <p className="mt-2 text-3xl font-black text-[#1A1A1A]">£{service.price}</p>
            </div>
            <div className="flex justify-end">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-[#FFDD00] px-5 py-3 text-sm font-semibold text-[#1A1A1A]"
              >
                Book now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
