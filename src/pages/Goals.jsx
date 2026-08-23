import TopBar from "../components/TopBar.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import CopyButton from "../components/CopyButton.jsx";

const groups = [
  {
    icon: "🎯",
    title: "Business Goals",
    items: [
      "إثبات وجود قوي في السوق الخليجي.",
      "تحقيق نمو مستدام في الإيرادات عبر شراكات طويلة الأجل.",
    ],
  },
  {
    icon: "📈",
    title: "Marketing Goals",
    items: [
      "تموضع Growth Station كشريك استراتيجي، مش وكالة تنفيذ.",
      "توليد leads عالية الجودة من الـ SMEs والـ startups.",
    ],
  },
  {
    icon: "🧠",
    title: "Content Goals",
    items: [
      "توعية السوق بأهمية 'الاستراتيجية قبل التنفيذ'.",
      "عرض الخبرة الإقليمية عبر case studies ورؤى تحليلية.",
    ],
  },
  {
    icon: "📱",
    title: "Social Media Goals",
    items: [
      "بناء مجتمع متفاعل من أصحاب الأعمال وصناع القرار.",
      "توجيه الزيارات للموقع الرئيسي لتعميق التفاعل الاستراتيجي.",
    ],
  },
];

export default function Goals() {
  return (
    <>
      <TopBar eyebrow="Station 02" title="الأهداف الاستراتيجية" />
      <div className="mx-auto max-w-5xl space-y-10 px-8 py-14">
        <SectionHeader
          code="02"
          eyebrow="Business, marketing, content & social"
          title="الأهداف الاستراتيجية"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.title}
              className="relative rounded-[24px] border border-line bg-white p-8 transition-colors hover:border-brass"
            >
              <div className="absolute left-7 top-7">
                <CopyButton text={g.items.join(" · ")} />
              </div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal-soft text-2xl">
                  {g.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {g.title}
                </h3>
              </div>
              <ul className="space-y-3 font-body text-[15px] leading-relaxed text-ink-soft">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
