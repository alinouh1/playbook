import TopBar from "../components/TopBar.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import CopyButton from "../components/CopyButton.jsx";

const pillars = [
  {
    icon: "🧭",
    title: "Strategy-driven",
    desc: "كل حملة بتبدأ بخطة نمو مصممة خصيصًا للعميل.",
  },
  {
    icon: "📊",
    title: "Measurable",
    desc: "تركيز على النتائج الحقيقية، مش الأرقام الشكلية.",
  },
  {
    icon: "🌍",
    title: "Regional",
    desc: "خبرة عميقة في أسواق مصر ودول الخليج.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "نمو طويل المدى، مش مهام منفصلة قصيرة الأجل.",
  },
];

const uvpText =
  "Growth Station is not just another marketing agency. We are a Brand & Growth Partner that seamlessly integrates strategy, execution, and measurable outcomes to drive sustainable business growth. We empower companies in Egypt and the GCC to scale, strengthen their brand positioning, and achieve consistent ROI.";

export default function Positioning() {
  return (
    <>
      <TopBar eyebrow="Station 01" title="التموضع" />
      <div className="mx-auto max-w-5xl space-y-10 px-8 py-14">
        <SectionHeader
          code="01"
          eyebrow="Our core DNA"
          title="Unique Value Proposition (UVP)"
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-[28px] border-2 border-ink bg-ink p-10 text-paper">
              <div className="mb-6 flex justify-end">
                <CopyButton
                  text={uvpText}
                  className="!border-ink-line !bg-transparent !text-paper/70 hover:!text-paper"
                />
              </div>
              <p className="font-body text-[22px] leading-relaxed">
                <span className="font-bold text-brass">Growth Station</span>{" "}
                is not just another marketing agency. We are a{" "}
                <span className="font-bold text-paper">
                  Brand &amp; Growth Partner
                </span>{" "}
                that seamlessly integrates strategy, execution, and
                measurable outcomes to drive sustainable business growth. We
                empower companies in Egypt and the GCC to scale, strengthen
                their brand positioning, and achieve consistent ROI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:col-span-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-6 text-center transition-colors hover:border-brass"
              >
                <span className="text-2xl">{p.icon}</span>
                <h4 className="mt-3 font-display font-bold text-ink">
                  {p.title}
                </h4>
                <p className="mt-1.5 font-body text-sm text-ink-soft">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative py-10 text-center">
          <span
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-8xl text-brass/15"
          >
            “
          </span>
          <p className="relative z-10 font-display text-3xl italic text-ink md:text-4xl">
            Strategy before execution.{" "}
            <span className="text-signal">Growth beyond borders.</span>
          </p>
        </div>
      </div>
    </>
  );
}
