import { adminOverview, businessInfo } from "@/lib/site-data";

const cards = [
  { label: "Today’s appointments", value: adminOverview.todaysAppointments },
  { label: "Pending reservations", value: adminOverview.pendingReservations },
  { label: "Upcoming sessions", value: adminOverview.upcomingSessions },
  { label: "Completed appointments", value: adminOverview.completedAppointments },
  { label: "Cancelled appointments", value: adminOverview.cancelledAppointments },
  { label: "No-shows", value: adminOverview.noShows },
  { label: "Monthly revenue", value: `£${adminOverview.monthlyRevenue}` },
];

const quickActions = ["Add appointment", "Create service", "Manage availability", "Publish update"];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">Admin dashboard</p>
          <h1 className="mt-2 text-3xl font-black text-[#1A1A1A]">{businessInfo.name}</h1>
        </div>
        <button className="rounded-full bg-[#FFDD00] px-5 py-3 text-sm font-semibold text-[#1A1A1A]">
          + Add appointment
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-[24px] border border-[#1A1A1A]/10 bg-white p-5">
            <p className="text-sm text-[#1A1A1A]/60">{card.label}</p>
            <p className="mt-4 text-3xl font-black text-[#1A1A1A]">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-[#1A1A1A]/10 bg-white p-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">Today’s appointments</h2>
          <div className="mt-6 space-y-3">
            {[
              ["09:00", "Initial Consultation", "Olivia Clarke"],
              ["11:15", "Therapeutic Massage", "Mason Bell"],
              ["15:00", "Follow-up Physiotherapy", "Ava Turner"],
            ].map(([time, service, patient]) => (
              <div key={time} className="flex items-center justify-between rounded-2xl bg-[#FFF9E6] px-4 py-3">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{service}</p>
                  <p className="text-sm text-[#1A1A1A]/60">{patient}</p>
                </div>
                <span className="text-sm font-semibold text-[#1A1A1A]">{time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#1A1A1A]/10 bg-[#FFF9E6] p-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">Quick actions</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {quickActions.map((action) => (
              <button key={action} className="rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-2 text-sm font-medium text-[#1A1A1A]">
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
