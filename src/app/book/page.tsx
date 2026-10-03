import { BookingWizard } from "@/components/booking-wizard";
import { SectionHeading } from "@/components/section-heading";

export default function BookPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Book an appointment"
        title="Request a consultation or session"
        description="Choose a service, select a convenient time, and submit your reservation. Appointments are reviewed manually before confirmation."
      />
      <div className="mt-12 max-w-5xl">
        <BookingWizard />
      </div>
    </main>
  );
}
