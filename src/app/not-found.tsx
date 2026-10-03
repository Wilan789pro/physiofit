import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]/60">404</p>
      <h1 className="mt-4 text-4xl font-black text-[#1A1A1A]">This page could not be found.</h1>
      <p className="mt-4 text-lg text-[#1A1A1A]/70">The link may be outdated or the page is still being built.</p>
      <Link href="/" className="btn-primary mt-8">
        Return home
      </Link>
    </main>
  );
}
