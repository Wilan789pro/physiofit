export const businessInfo = {
  name: "PHYSIOFIT",
  descriptor: "Physiotherapy • Massage • Wellness",
  intro: "Gitana helps people move well, feel stronger, and recover with confidence.",
  location: "Location to be confirmed",
  address: "Address to be confirmed",
  email: "hello@physiofit.example",
  phone: "+00 000 000 000",
  openingHours: "Mon–Fri: 9:00–18:00 | Sat: By appointment",
  bookingLeadTime: "Appointments are reviewed manually before confirmation.",
};

export const services = [
  {
    id: "initial-consultation",
    name: "Initial Consultation",
    category: "Physiotherapy",
    description:
      "A thorough assessment to understand your current concerns, movement patterns, and goals.",
    duration: 45,
    price: 95,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    active: true,
    onlineBooking: true,
  },
  {
    id: "follow-up-physio",
    name: "Follow-up Physiotherapy",
    category: "Physiotherapy",
    description:
      "Progress-focused treatment sessions to build strength, reduce pain, and improve function.",
    duration: 50,
    price: 85,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    active: true,
    onlineBooking: true,
  },
  {
    id: "rehabilitation-plan",
    name: "Rehabilitation Plan",
    category: "Physiotherapy",
    description:
      "Personalised recovery support with guided movement, exercise progression, and practical advice.",
    duration: 60,
    price: 110,
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    active: true,
    onlineBooking: true,
  },
  {
    id: "therapeutic-massage",
    name: "Therapeutic Massage",
    category: "Massage",
    description:
      "Targeted massage therapy to support recovery, reduce tension, and improve mobility.",
    duration: 60,
    price: 100,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    active: true,
    onlineBooking: true,
  },
  {
    id: "relaxation-massage",
    name: "Relaxation Massage",
    category: "Massage",
    description:
      "A calming treatment focused on easing stress, soft tissue tension, and restoring a sense of ease.",
    duration: 60,
    price: 95,
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    active: true,
    onlineBooking: true,
  },
  {
    id: "mobility-session",
    name: "Mobility Session",
    category: "Physiotherapy",
    description:
      "A focused session to improve range of motion, posture, and movement confidence.",
    duration: 45,
    price: 90,
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
    active: true,
    onlineBooking: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Client feedback",
    quote:
      "Placeholder testimonial. This section will be updated when patient feedback is available.",
  },
  {
    id: 2,
    name: "Client feedback",
    quote:
      "Placeholder testimonial. Replace with verified client experience once approved.",
  },
  {
    id: 3,
    name: "Client feedback",
    quote:
      "Placeholder testimonial. Add authentic feedback only when consent and permission are confirmed.",
  },
];

export const socialPosts = [
  {
    id: 1,
    platform: "Instagram",
    caption: "Movement, recovery, and healthy routines start with consistency.",
    date: "2026-10-01",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.instagram.com/",
    featured: true,
  },
  {
    id: 2,
    platform: "Facebook",
    caption: "Simple tips to support recovery and day-to-day wellbeing.",
    date: "2026-09-18",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.facebook.com/",
    featured: true,
  },
  {
    id: 3,
    platform: "TikTok",
    caption: "A few small movement checks can make a big difference to comfort.",
    date: "2026-09-02",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.tiktok.com/",
    featured: false,
  },
];

export const adminOverview = {
  todaysAppointments: 6,
  pendingReservations: 4,
  upcomingSessions: 12,
  completedAppointments: 18,
  cancelledAppointments: 2,
  noShows: 1,
  monthlyRevenue: 2850,
};

export const availability = {
  workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  openingHour: "09:00",
  closingHour: "18:00",
  breaks: ["12:30-13:30"],
  appointmentDuration: 60,
  bufferTime: 15,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/physiotherapy", label: "Physiotherapy" },
  { href: "/massage", label: "Massage & Wellness" },
  { href: "/services", label: "Services & Prices" },
  { href: "/social", label: "Social / Updates" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Appointment" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services", label: "Pricing" },
  { href: "/book", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
];
