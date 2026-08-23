import TopBar from "../components/TopBar.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import CopyButton from "../components/CopyButton.jsx";

const traits = [
  {
    icon: "insights",
    label: "Mindset",
    value: "طموح، موجّه للنمو، ومركّز على النتائج.",
  },
  {
    icon: "verified",
    label: "Core Values",
    value: "توسّع الأعمال ونمو الإيرادات، حضور علامة قوي، احترافية ومصداقية.",
  },
  {
    icon: "trending_up",
    label: "Interests",
    value: "تطوير الأعمال، اتجاهات التسويق، التوسّع خارج السوق المحلي.",
  },
  {
    icon: "lightbulb",
    label: "Attitude towards marketing",
    value: "يقدّر التوجيه الاستراتيجي أكتر من التنفيذ وحده، ومنفتح على الابتكار اللي بيحقق ROI حقيقي.",
  },
  {
    icon: "bolt",
    label: "Personality",
    value: "صانع قرار تحت الضغط، حريص على الوقت والكفاءة، ومنفتح على شراكات إقليمية عابرة للحدود.",
  },
];

export default function Audience() {
  const fullText = traits.map((t) => `${t.label}: ${t.value}`).join(" | ");
  return (
    <>
      <TopBar eyebrow="Station 03" title="الجمهور والمسار" />
      <div className="mx-auto max-w-5xl space-y-10 px-8 py-14">
        <SectionHeader
          code="03"
          eyebrow="Target audience profile"
          title="الجمهور المستهدف (Deep Level)"
        />

        <div className="relative rounded-[28px] border border-line bg-white p-9">
          <div className="mb-7 flex items-center justify-between border-b border-line pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-soft text-signal">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink">
                الخصائص النفسية
              </h3>
            </div>
            <CopyButton text={fullText} />
          </div>

          <dl className="grid gap-6 md:grid-cols-2">
            {traits.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl bg-paper-raised p-6 transition-colors hover:bg-signal-soft/60"
              >
                <dt className="font-mono text-[11px] uppercase tracking-widest text-brass">
                  {t.label}
                </dt>
                <dd className="mt-2 font-body text-[15px] leading-relaxed text-ink-soft">
                  {t.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
