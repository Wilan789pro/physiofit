import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { businessInfo, services, socialPosts, testimonials } from "@/lib/site-data";

const featuredServices = services.slice(0, 3);

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full bg-[#FFDD00] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">
              {businessInfo.name}
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Feel stronger, move better, recover with confidence.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#1A1A1A]/75">
              {businessInfo.intro} Gitana provides physiotherapy and massage services designed to support comfort, recovery and everyday movement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book" className="btn-primary">
                Book an Appointment
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-[#1A1A1A]/70">
              <span>✔ Personalised care</span>
              <span>✔ Professional support</span>
              <span>✔ Manual booking review</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-7 h-32 w-32 rounded-full bg-[#FFDD00]/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-[#1A1A1A]/10 bg-white shadow-[0_18px_50px_rgba(26,26,26,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                alt="Physiotherapy session"
                width={800}
                height={520}
                unoptimized
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-[#1A1A1A]/90 p-5 text-[#FFF9E6] backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-[#FFDD00]">Gitana</p>
                <p className="mt-2 text-2xl font-bold">PhysioFit</p>
                <p className="mt-2 text-sm text-[#FFF9E6]/75">Physiotherapy • Massage • Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9E6] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured services"
            title="Support for recovery, comfort and everyday movement"
            description="A carefully chosen range of treatment options, each designed to be clear, practical and easy to understand."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <article key={service.id} className="overflow-hidden rounded-[28px] border border-[#1A1A1A]/10 bg-white shadow-sm">
                <Image src={service.image} alt={service.name} width={800} height={520} unoptimized className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/60">{service.category}</p>
                    <span className="text-sm font-semibold text-[#1A1A1A]">£{service.price}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-[#1A1A1A]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#1A1A1A]/70">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[32px] bg-[#1A1A1A] p-8 text-[#FFF9E6]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFDD00]">About Gitana</p>
            <h2 className="mt-4 text-3xl font-bold">Professional, human-centred care.</h2>
            <p className="mt-4 text-base leading-8 text-[#FFF9E6]/75">
              Gitana brings a calm, thoughtful and practical approach to physiotherapy and massage, helping patients feel supported from the first conversation through to long-term progress.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center rounded-full bg-[#FFDD00] px-5 py-3 font-semibold text-[#1A1A1A]">
              Learn more about Gitana
            </Link>
          </div>

          <div className="rounded-[32px] border border-[#1A1A1A]/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">How it works</p>
            <ol className="mt-6 space-y-5">
              {[
                "Choose your service",
                "Choose a convenient time",
                "Submit your reservation",
                "Receive confirmation",
                "Attend your appointment",
              ].map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFDD00] font-bold text-[#1A1A1A]">
                    {index + 1}
                  </span>
                  <span className="text-lg font-medium text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Patient experience placeholder"
            description="Placeholder testimonials will be added when authentic feedback is available and approved for publication."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((person) => (
              <div key={person.id} className="rounded-[28px] border border-[#1A1A1A]/10 bg-[#FFF9E6] p-6">
                <p className="text-lg leading-8 text-[#1A1A1A]/75">“{person.quote}”</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]/60">
                  {person.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social / Latest updates"
          title="Stay Connected with PhysioFit"
          description="Tips, exercises, wellness advice and updates from Gitana."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {socialPosts.map((post) => (
            <a key={post.id} href={post.link} target="_blank" rel="noreferrer" className="overflow-hidden rounded-[28px] border border-[#1A1A1A]/10 bg-white">
              <Image src={post.image} alt={post.caption} width={800} height={560} unoptimized className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]/60">
                  <span>{post.platform}</span>
                  <span>{post.date}</span>
                </div>
                <p className="mt-3 text-lg font-semibold text-[#1A1A1A]">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF9E6] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">Contact details</p>
              <h2 className="mt-4 text-3xl font-bold text-[#1A1A1A]">Book a consultation</h2>
              <ul className="mt-6 space-y-3 text-base text-[#1A1A1A]/75">
                <li>Location: {businessInfo.location}</li>
                <li>Opening hours: {businessInfo.openingHours}</li>
                <li>Email: {businessInfo.email}</li>
                <li>Phone: {businessInfo.phone}</li>
              </ul>
            </div>
            <div className="rounded-[28px] border border-[#1A1A1A]/10 bg-white p-8">
              <p className="text-lg leading-8 text-[#1A1A1A]/75">
                The booking process is designed to be simple, warm and clear. If you are unsure about the best service for you, contact Gitana for guidance before booking.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/book" className="btn-primary">
                  Book an Appointment
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Gitana
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
