import { Link } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";
import CopyButton from "../components/CopyButton.jsx";

const stations = [
  { to: "/positioning", code: "01", title: "التموضع", desc: "UVP والهوية الاستراتيجية" },
  { to: "/goals", code: "02", title: "الأهداف", desc: "Business · Marketing · Content" },
  { to: "/audience", code: "03", title: "الجمهور", desc: "خريطة الجمهور والمسار" },
  { to: "/plan", code: "04", title: "خطة النشر", desc: "تقويم من D-9 حتى الإطلاق" },
];

export default function Landing() {
  return (
    <>
      <TopBar eyebrow="Growth Station · Launch Playbook · 2026" title="لوحة الانطلاق" />

      <div className="mx-auto max-w-5xl space-y-16 px-8 py-14">
        {/* Hero — framed like a departures board: one confident line, one destination */}
        <section className="fade-up rounded-[28px] border border-line bg-white p-12 text-center shadow-[0_20px_50px_-25px_rgba(13,43,30,0.25)]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            Next departure · Egypt &amp; GCC
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Growth Station هي شريك علامة ونمو،{" "}
            <span className="text-signal">مش وكالة تنفيذ عادية</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink-soft">
            نتغلغل جوا أعمال عملائنا لبناء علامات تجارية قوية، وتحقيق نمو
            مستدام وملموس — استراتيجية الأول، وتنفيذ يترتب عليها.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/plan"
              className="rounded-full bg-signal px-6 py-3 font-display text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(222,106,46,0.6)] transition-transform hover:-translate-y-0.5"
            >
              افتح خطة المحتوى
            </Link>
            <Link
              to="/goals"
              className="rounded-full border border-line bg-white px-6 py-3 font-display text-sm font-bold text-ink transition-colors hover:bg-paper-raised"
            >
              راجع الأهداف الاستراتيجية
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 border-t border-line pt-8">
            {["الإطلاق: Cairo", "growthstation.com", "Strategy: Rana Eltorky"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full bg-paper-raised px-4 py-1.5 font-mono text-xs text-ink-soft"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </section>


        {/* Who is Growth Station */}
        <section className="fade-up rounded-[28px] border border-line bg-white p-10">
          <div className="mb-8 flex items-center justify-between border-b border-line pb-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                مين هي Growth Station؟
              </h2>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-signal">
                Our story &amp; mission
              </p>
            </div>
            <CopyButton
              text="Growth Station is a Cairo-based digital marketing agency built on strategy before execution."
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-5 font-body text-[17px] leading-relaxed text-ink-soft">
              <p>
                <span className="font-bold text-signal">Growth Station</span>{" "}
                وكالة تسويق رقمي مقرها القاهرة، مبنية على مبدأ واحد غير قابل
                للتفاوض:{" "}
                <span className="font-bold italic text-ink">
                  الاستراتيجية الأول، والتنفيذ بعدها
                </span>
                .
              </p>
              <p>
                إحنا مش بيت إنتاج بينشر محتوى وبس. إحنا{" "}
                <span className="font-bold text-ink">شريك علامة ونمو</span> —
                حليف استراتيجي يتغلغل جوا أعمال عملائنا لبناء علامات قوية
                وتحقيق نمو حقيقي وقابل للقياس.
              </p>
            </div>
            <div className="space-y-5 rounded-2xl border border-line bg-paper-raised p-7 font-body text-[17px] leading-relaxed text-ink-soft">
              <p>
                انطلقنا من مدينة نصر، القاهرة، ونخدم الشركات الصغيرة
                والمتوسطة والـ startups الطموحة في{" "}
                <span className="font-semibold text-signal">مصر ودول الخليج</span>.
              </p>
              <p>
                هدفنا نسد الفجوة بين الوكالات اللي بتنفذ بس، والتسويق
                الاستراتيجي اللي شركات مصر والخليج محتاجاه فعلاً عشان تكبر
                وتقود السوق.
              </p>
            </div>
          </div>
        </section>

        {/* Mini station map — the four stops ahead, echoing the sidebar rail */}
        <section className="fade-up">
          <SectionLabel />
          <div className="relative mt-8 grid gap-5 md:grid-cols-4">
            <div className="absolute right-0 left-0 top-7 hidden h-px bg-brass/40 md:block" />
            {stations.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group relative flex flex-col items-center rounded-2xl border border-line bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-brass hover:shadow-[0_16px_30px_-18px_rgba(13,43,30,0.35)]"
              >
                <span className="station-dot z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brass font-mono text-xs font-bold text-white group-hover:bg-signal">
                  {s.code}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1 font-body text-sm text-ink-soft">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function SectionLabel() {
  return (
    <div className="text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
        Route map
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold text-ink">
        المحطات الأربعة اللي بتبني الخطة
      </h2>
    </div>
  );
}
