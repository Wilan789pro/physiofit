import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About Gitana"
        title="Warm, evidence-informed care for real life"
        description="PhysioFit is the personal practice of Gitana, offering patient-centred physiotherapy and massage services designed around comfort, confidence and movement."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-[28px] border border-[#1A1A1A]/10 bg-white p-8">
          <p className="text-lg leading-8 text-[#1A1A1A]/75">
            Gitana works with people seeking practical support for pain, mobility, recovery and everyday movement. Her approach blends attentive assessment with collaborative guidance, helping patients feel informed, supported and able to take meaningful next steps.
          </p>
          <p className="text-lg leading-8 text-[#1A1A1A]/75">
            Every appointment is shaped around the individual—what is happening in the body, what matters in daily life, and what kind of progress feels realistic and sustainable.
          </p>
        </div>

        <div className="rounded-[28px] bg-[#FFF9E6] p-8">
          <h3 className="text-2xl font-bold text-[#1A1A1A]">Approach to care</h3>
          <ul className="mt-5 space-y-4 text-[#1A1A1A]/75">
            <li>• Person-centred treatment plans</li>
            <li>• Clear communication and education</li>
            <li>• Practical progress tracking</li>
            <li>• A calm, supportive environment</li>
            <li>• Integration of physiotherapy and massage support where relevant</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Background", "Placeholder professional background information will be added here once confirmed."],
          ["Experience", "Placeholder experience overview. This section is intentionally flexible for future updates."],
          ["Professional credentials", "Professional details will be included once verified and approved."],
          ["Philosophy", "Care should feel straightforward, respectful and practical, with support tailored to each patient."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[28px] border border-[#1A1A1A]/10 bg-white p-6">
            <h3 className="text-xl font-bold text-[#1A1A1A]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#1A1A1A]/70">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[32px] bg-[#1A1A1A] px-6 py-10 text-center text-[#FFF9E6] sm:px-10">
        <h3 className="text-3xl font-bold">Ready to begin?</h3>
        <p className="mt-3 text-[#FFF9E6]/75">Book a consultation or ask a question to find the right next step.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-[#FFDD00] px-6 py-3 font-semibold text-[#1A1A1A]">
            Book an Appointment
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#FFF9E6]/20 px-6 py-3 font-semibold text-[#FFF9E6]">
            Contact Gitana
          </Link>
        </div>
      </div>
    </main>
  );
}
