import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

const massageServices = services.filter((service) => service.category === "Massage");

export default function MassagePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Massage & Wellness"
        title="Supportive massage care for tension, recovery and ease"
        description="Massage therapies at PhysioFit are offered as a complementary part of the wider wellness and recovery experience, with treatments tailored to comfort and goals."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {massageServices.map((service) => (
          <article key={service.id} className="overflow-hidden rounded-[28px] border border-[#1A1A1A]/10 bg-white shadow-sm">
            <Image src={service.image} alt={service.name} width={800} height={560} unoptimized className="h-56 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-[#1A1A1A]">{service.name}</h3>
                <span className="rounded-full bg-[#FFF9E6] px-2 py-1 text-xs font-semibold text-[#1A1A1A]">
                  {service.duration} min
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#1A1A1A]/70">{service.description}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[#1A1A1A]/10 pt-4">
                <span className="text-sm font-medium text-[#1A1A1A]/70">From £{service.price}</span>
                <a href="/book" className="text-sm font-semibold text-[#1A1A1A] underline decoration-[#FFDD00] decoration-2 underline-offset-4">
                  Book now
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[28px] bg-[#1A1A1A] p-8 text-[#FFF9E6]">
        <h3 className="text-2xl font-bold">Massage can support.</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3 text-sm leading-7 text-[#FFF9E6]/80">
          <li>• Release muscle tension</li>
          <li>• Refresh energy and recovery</li>
          <li>• Support movement comfort</li>
        </ul>
      </div>
    </main>
  );
}
