import TopBar from "../components/TopBar.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const rows = [
  {
    t: "D-9",
    asset: "Static 01",
    idea: "شاري لو طلبك موجود؟",
    push: "Organic + Seed Paid",
    tone: "signal",
  },
  {
    t: "D-8",
    asset: "Reel 01",
    idea: "جوا دماغ البياع",
    push: "Organic",
    tone: "muted",
  },
  {
    t: "D-7",
    asset: "Carousel 01",
    idea: "من طلبك للـ Shortlist",
    push: "Organic",
    tone: "muted",
  },
  {
    t: "D-6",
    asset: "Static 02",
    idea: "إحنا مش بنبدأ بالمشروع",
    push: "Organic",
    tone: "muted",
  },
];

export default function Plan() {
  return (
    <>
      <TopBar eyebrow="Station 04" title="خطة النشر" />
      <div className="mx-auto max-w-5xl space-y-10 px-8 py-14">
        <SectionHeader
          code="04"
          eyebrow="Ready to shift by launch date"
          title="تقويم نشر مقترح — جاهز للتحريك حسب يوم الإطلاق"
        />

        {/* Timetable styled like a departures board */}
        <div className="overflow-hidden rounded-[24px] border border-line bg-white">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-line bg-ink text-paper">
                <th className="w-28 p-4 font-mono text-xs uppercase tracking-widest">
                  التوقيت
                </th>
                <th className="w-48 p-4 font-mono text-xs uppercase tracking-widest">
                  الأصول
                </th>
                <th className="p-4 font-mono text-xs uppercase tracking-widest">
                  الفكرة
                </th>
                <th className="w-52 p-4 font-mono text-xs uppercase tracking-widest">
                  الدفع
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line font-body text-[15px] text-ink">
              {rows.map((r) => (
                <tr key={r.t} className="transition-colors hover:bg-paper-raised">
                  <td className="p-4">
                    <span className="rounded-md bg-ink px-2.5 py-1 font-mono text-xs font-semibold text-brass">
                      {r.t}
                    </span>
                  </td>
                  <td className="p-4 text-ink-soft">{r.asset}</td>
                  <td className="p-4 font-medium">{r.idea}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        r.tone === "signal"
                          ? "bg-signal-soft text-signal"
                          : "bg-paper-raised text-ink-soft"
                      }`}
                    >
                      {r.push}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center font-mono text-xs text-ink-soft/70">
          © 2026 Growth Station
        </p>
      </div>
    </>
  );
}
