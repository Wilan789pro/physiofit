import { SectionHeading } from "@/components/section-heading";
import { businessInfo } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch with PhysioFit"
        description="For appointments, guidance or general enquiries, use the contact details below and add the real information once it is confirmed."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6 rounded-[28px] border border-[#1A1A1A]/10 bg-white p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">Location</p>
            <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">{businessInfo.location}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">Opening hours</p>
            <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">{businessInfo.openingHours}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">Email</p>
            <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">{businessInfo.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">Phone</p>
            <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">{businessInfo.phone}</p>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#FFF9E6] p-8">
          <h3 className="text-3xl font-bold text-[#1A1A1A]">Send a message</h3>
          <form className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[#1A1A1A]">
                Name
                <input placeholder="Name" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-white px-4 py-3 outline-none transition focus:border-[#FFDD00]" />
              </label>
              <label className="space-y-2 text-sm font-medium text-[#1A1A1A]">
                Email
                <input placeholder="Email" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-white px-4 py-3 outline-none transition focus:border-[#FFDD00]" />
              </label>
            </div>
            <label className="space-y-2 text-sm font-medium text-[#1A1A1A]">
              Message
              <textarea placeholder="How can Gitana help?" className="min-h-32 w-full rounded-2xl border border-[#1A1A1A]/15 bg-white px-4 py-3 outline-none transition focus:border-[#FFDD00]" />
            </label>
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-[#FFDD00] px-6 py-3 font-semibold text-[#1A1A1A]">
              Send enquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
