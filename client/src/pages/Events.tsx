import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Events() {
  usePageTitle("Events");

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-[#0a1733] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Upcoming Events
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Events
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Discover upcoming programs, networking opportunities, and
            entrepreneurial events from Investigo Online.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid md:grid-cols-2">

              {/* Event Visual */}
              <div className="flex min-h-[380px] items-center justify-center bg-gradient-to-br from-[#07142f] via-[#10295a] to-[#07142f] p-10 text-center">
                <div>
                  <div className="mb-5 text-5xl text-amber-400">
                    ★ ★ ★
                  </div>

                  <p className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
                    Lone Star
                  </p>

                  <h2 className="mt-2 text-4xl font-bold leading-tight text-amber-400 md:text-5xl">
                    Investor Forum
                  </h2>

                  <p className="mt-5 text-lg text-slate-200">
                    Texas&apos;s Premier Entrepreneur Pitch Competition
                  </p>
                </div>
              </div>

              {/* Event Information */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                  Applications Now Open — 2026
                </p>

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  Lone Star Investor Forum
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  A premier platform connecting innovative entrepreneurs with
                  investors, business leaders, and industry experts. Present
                  your ideas, build valuable connections, and compete for
                  meaningful funding opportunities.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <CalendarDays className="h-5 w-5 text-amber-500" />
                    <span>October 17, 2026</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate-700">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>
                      India House Houston, 8888 West Bellfort Avenue, Houston
                    </span>
                  </div>
                </div>

                <div className="mt-9">
                  <a
                    href="https://celersoft.acetechnow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-400"
                  >
                    Explore Event
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
