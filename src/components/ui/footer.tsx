import Link from "next/link";

const trustSignals = [
  "40+ end-to-end product launches",
  "Cloud, DevOps & UX under one roof",
  "SLO playbooks for 99.9% uptime",
  "Design systems for 8+ industries",
  "Security reviews & SOC-2 alignment",
  "Embedded with venture-backed teams",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-slate-950/80 text-slate-200">
      {/* <div className="container py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Delivery Partners
            </p>
            <h3 className="text-3xl font-semibold text-white lg:text-[2.3rem]">
              We build resilient products with the accountability of an in-house team and the velocity of a specialist studio.
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
              Discovery workshops, UX systems, full-stack engineering, multi-cloud infrastructure, DevOps automation, and SRE runbooks—handled end-to-end by a senior collective who stay on through launch and beyond.
            </p>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.8)]">
            <h4 className="text-lg font-semibold text-white">Let&apos;s scope your build</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                Email:
                <Link
                  href="mailto:hello@foundryfivestudio.com"
                  className="ml-2 font-medium text-fuchsia-300 hover:text-fuchsia-200"
                >
                  hello@foundryfivestudio.com
                </Link>
              </p>
              <p>
                Phone:
                <Link
                  href="tel:+919106011016"
                  className="ml-2 font-medium text-fuchsia-300 hover:text-fuchsia-200"
                >
                  +91 91060 11016
                </Link>
              </p>
              <p>
                Calendar:
                <Link
                  href="https://cal.com/foundryfivestudio/intro"
                  target="_blank"
                  className="ml-2 font-medium text-fuchsia-300 hover:text-fuchsia-200"
                >
                  Book a 30 min intro
                </Link>
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://x.com/vanshsutariya"
                target="_blank"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-fuchsia-400 hover:text-white"
              >
                Updates
              </Link>
              <Link
                href="https://github.com/VanshSutariya"
                target="_blank"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-fuchsia-400 hover:text-white"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/vansh-sutariya/"
                target="_blank"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-fuchsia-400 hover:text-white"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="border-t border-white/10 bg-slate-950/60">
        <div className="relative overflow-hidden">
          <div className="flex min-w-[200%] items-center gap-10 whitespace-nowrap py-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 animate-marquee">
            {[...trustSignals, ...trustSignals].map((signal, index) => (
              <span key={`${signal}-${index}`} className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-fuchsia-400" />
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="border-t border-white/10 bg-slate-950/90">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} FoundryFive Studio. All rights reserved.</p>
          <p className="text-slate-400">
            Built with curiosity • Shipping from Ahmedabad &amp; Los Angeles
          </p>
        </div>
      </div> */}
    </footer>
  );
}
