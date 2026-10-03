"use client";

import { useMemo, useState } from "react";
import { services } from "@/lib/site-data";

const slotOptions = [
  "09:00",
  "09:45",
  "10:30",
  "11:15",
  "12:00",
  "13:30",
  "14:15",
  "15:00",
  "15:45",
  "16:30",
  "17:15",
];

function getNextDates() {
  return Array.from({ length: 8 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return {
      value: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }),
    };
  });
}

export function BookingWizard() {
  const nextDates = useMemo(() => getNextDates(), []);
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [selectedDate, setSelectedDate] = useState(nextDates[0].value);
  const [selectedTime, setSelectedTime] = useState(slotOptions[2]);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    reason: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState<string | null>(null);

  const selectedService =
    services.find((service) => service.id === selectedServiceId) ?? services[0];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ref = `PF-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setSubmitted(ref);
  };

  const isDisabled = !form.fullName || !form.phone || !form.email;

  return (
    <div className="rounded-[28px] border border-[#1A1A1A]/10 bg-white p-4 shadow-[0_12px_40px_rgba(26,26,26,0.08)] sm:p-6 lg:p-8">
      {submitted ? (
        <div className="space-y-5">
          <div className="inline-flex rounded-full bg-[#FFF9E6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]">
            Reservation received
          </div>
          <h3 className="text-3xl font-bold text-[#1A1A1A]">Booking request submitted</h3>
          <p className="text-[#1A1A1A]/70">
            Your appointment request has been received. Gitana will review the booking manually and confirm by email or phone.
          </p>
          <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FFF9E6] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/60">Booking reference</p>
            <p className="mt-2 text-2xl font-black text-[#1A1A1A]">{submitted}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              Step 1 • Service
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedServiceId === service.id
                      ? "border-[#FFDD00] bg-[#FFF9E6]"
                      : "border-[#1A1A1A]/10 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">{service.name}</p>
                      <p className="text-xs text-[#1A1A1A]/60">{service.category}</p>
                    </div>
                    <span className="text-sm font-bold text-[#1A1A1A]">£{service.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#1A1A1A]/70">{service.duration} min</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              Step 2 • Date
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {nextDates.map((date) => (
                <button
                  key={date.value}
                  type="button"
                  onClick={() => setSelectedDate(date.value)}
                  className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${
                    selectedDate === date.value
                      ? "border-[#FFDD00] bg-[#FFDD00]/15 text-[#1A1A1A]"
                      : "border-[#1A1A1A]/10 bg-[#FFF9E6]/60 text-[#1A1A1A]"
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              Step 3 • Time slot
            </p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
              {slotOptions.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-xl border px-3 py-2 text-sm font-medium transition ${
                    selectedTime === time
                      ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                      : "border-[#1A1A1A]/10 bg-white text-[#1A1A1A]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              Step 4 • Patient details
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[#1A1A1A]">
                Full name
                <input
                  value={form.fullName}
                  onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                  className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FFF9E6] px-4 py-3 text-base outline-none transition focus:border-[#FFDD00]"
                  placeholder="Full name"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[#1A1A1A]">
                Phone number
                <input
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FFF9E6] px-4 py-3 text-base outline-none transition focus:border-[#FFDD00]"
                  placeholder="Phone number"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[#1A1A1A] md:col-span-2">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FFF9E6] px-4 py-3 text-base outline-none transition focus:border-[#FFDD00]"
                  placeholder="Email address"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[#1A1A1A] md:col-span-2">
                Reason for appointment
                <textarea
                  value={form.reason}
                  onChange={(event) => setForm({ ...form, reason: event.target.value })}
                  className="min-h-24 w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FFF9E6] px-4 py-3 text-base outline-none transition focus:border-[#FFDD00]"
                  placeholder="Optional reason for your appointment"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[#1A1A1A] md:col-span-2">
                Notes
                <textarea
                  value={form.notes}
                  onChange={(event) => setForm({ ...form, notes: event.target.value })}
                  className="min-h-24 w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FFF9E6] px-4 py-3 text-base outline-none transition focus:border-[#FFDD00]"
                  placeholder="Optional notes for the physiotherapist"
                />
              </label>
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-[#1A1A1A]/10 bg-[#FFF9E6] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              Step 5 • Summary
            </p>
            <div className="mt-3 grid gap-3 text-sm text-[#1A1A1A] md:grid-cols-2">
              <div>
                <p className="text-[#1A1A1A]/60">Service</p>
                <p className="font-semibold">{selectedService.name}</p>
              </div>
              <div>
                <p className="text-[#1A1A1A]/60">Duration</p>
                <p className="font-semibold">{selectedService.duration} min</p>
              </div>
              <div>
                <p className="text-[#1A1A1A]/60">Date</p>
                <p className="font-semibold">{selectedDate}</p>
              </div>
              <div>
                <p className="text-[#1A1A1A]/60">Time</p>
                <p className="font-semibold">{selectedTime}</p>
              </div>
              <div>
                <p className="text-[#1A1A1A]/60">Patient</p>
                <p className="font-semibold">{form.fullName || "Pending"}</p>
              </div>
              <div>
                <p className="text-[#1A1A1A]/60">Price</p>
                <p className="font-semibold">£{selectedService.price}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#1A1A1A]/60">Manual approval is required before final confirmation.</p>
            <button
              type="submit"
              disabled={isDisabled}
              className="inline-flex items-center justify-center rounded-full bg-[#FFDD00] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#f4d100] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit reservation
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
