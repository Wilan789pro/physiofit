import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

const physioServices = services.filter((service) => service.category === "Physiotherapy");

export default function PhysiotherapyPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Physiotherapy"
        title="Personalised movement and recovery support"
        description="PhysioFit physiotherapy sessions are designed to help patients understand their current challenges, improve confidence in movement, and work toward practical, sustainable outcomes."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {physioServices.map((service) => (
          <article key={service.id} className="overflow-hidden rounded-[28px] border border-[#1A1A1A]/10 bg-white shadow-sm">
            <Image src={service.image} alt={service.name} width={800} height={520} unoptimized className="h-52 w-full object-cover" />
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

      <div className="mt-16 rounded-[28px] bg-[#FFF9E6] p-8">
        <h3 className="text-2xl font-bold text-[#1A1A1A]">What to expect</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            ["Assessment", "A clear conversation about your symptoms, movement, lifestyle and goals."],
            ["Treatment", "A tailored plan that may include hands-on care, exercise guidance, and recovery strategies."],
            ["Progress", "A practical next-step plan designed to support confidence and sustainable improvement."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[24px] bg-white p-5">
              <h4 className="text-lg font-bold text-[#1A1A1A]">{title}</h4>
              <p className="mt-3 text-sm leading-7 text-[#1A1A1A]/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
