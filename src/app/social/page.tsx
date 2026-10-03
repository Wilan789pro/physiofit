import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { socialPosts } from "@/lib/site-data";

export default function SocialPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Social / Updates"
        title="Stay Connected with PhysioFit"
        description="Tips, exercises, wellness advice and updates from Gitana."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {socialPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-[28px] border border-[#1A1A1A]/10 bg-white shadow-sm transition hover:-translate-y-1"
          >
            <Image src={post.image} alt={post.caption} width={800} height={600} unoptimized className="h-60 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/60">
                <span>{post.platform}</span>
                <span>{post.date}</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-[#1A1A1A]">{post.caption}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
