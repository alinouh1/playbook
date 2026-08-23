import { useState, useEffect } from "react";
import html2pdf from 'html2pdf.js';
import TopBar from "../components/TopBar";
import SectionHeader from "../components/SectionHeader";
import CopyButton from "../components/CopyButton";
import { FaChartLine, FaBullseye, FaLightbulb, FaMobileAlt, FaUser, FaUsers, FaGraduationCap, FaBriefcase, FaDollarSign, FaBuilding, FaMapMarkerAlt, FaSadTear, FaBrain, FaCreditCard, FaQuestion, FaGem } from "react-icons/fa";
import { MdInsights, MdVerified } from "react-icons/md";
import "./Home.css";

const stations = [
  { id: "positioning", code: "01", title: "التموضع", desc: "UVP والهوية الاستراتيجية" },
  { id: "goals", code: "02", title: "الأهداف", desc: "Business · Marketing · Content" },
  { id: "audience", code: "03", title: "الجمهور", desc: "خريطة الجمهور والمسار" },
  { id: "plan", code: "04", title: "خطة النشر", desc: "تقويم من D-9 حتى الإطلاق" },
];

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

const goals = [
  {
    icon: <FaChartLine />,
    title: "Business Goals",
    items: [
      "تحقيق نمو ملموس في الإيرادات خلال 12 شهر.",
      "توسيع الحضور في أسواق جديدة (الخليج).",
    ],
  },
  {
    icon: <FaBullseye />,
    title: "Marketing Goals",
    items: [
      "بناء علامة قوية تعكس القيمة الحقيقية للخدمات.",
      "توليد leads مؤهلة من خلال محتوى استراتيجي.",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Content Goals",
    items: [
      "إنتاج محتوى يثبت الخبرة والقيادة الفكرية.",
      "تحويل المحتوى إلى مسار واضح للتحول (conversion).",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "Social Media Goals",
    items: [
      "بناء مجتمع متفاعل من أصحاب الأعمال وصناع القرار.",
      "توجيه الزيارات للموقع الرئيسي لتعميق التفاعل الاستراتيجي.",
    ],
  },
];

const painPoints = [
  "Lack of clear, scalable marketing strategy",
  "Low or inconsistent ROI from previous campaigns",
  "Agencies that only execute without delivering results",
  "Weak brand positioning in competitive markets (local & regional)",
  "Difficulty reaching cross-border or GCC markets effectively",
  "Limited internal marketing expertise",
];

const buyingBehavior = {
  decisionProcess: [
    "Evaluates multiple agencies, with focus on value, expertise, and proven results",
    "Interested in agencies that understand regional market dynamics",
  ],
  triggersToBuy: [
    "Clear demonstration of strategy and business understanding",
    "Case studies showing measurable growth in both Egypt and GCC",
    "Ability to scale campaigns regionally",
  ],
  objections: [
    "Will this work outside Egypt?",
    "Is the ROI worth it for cross-border campaigns?",
  ],
  loyaltyPotential: [
    "High, if results are consistent and agency provides clear strategic guidance",
    "Likely to recommend to regional peers",
  ],
};

const strategicContentPillars = [
  {
    number: "01",
    title: "Educational & Strategy Content",
    purpose: "Position Growth Station as a strategic authority by educating the audience on how real, results-driven marketing works.",
    contentFocus: [
      "Simplifying complex marketing concepts into actionable insights",
      "Explaining frameworks, strategies, and growth methodologies",
      "Teaching business owners how to think beyond execution",
    ],
    examples: [
      "Why posting daily won't grow your business",
      "The difference between marketing strategy & content execution",
      "Step-by-step growth frameworks",
    ],
    value: "Builds credibility from zero, establishes thought leadership, and shifts the audience mindset toward strategy-first marketing.",
  },
  {
    number: "02",
    title: "Strategic Thinking & Analysis",
    purpose: "Demonstrate expertise by showcasing how Growth Station thinks, analyzes, and solves real marketing challenges.",
    contentFocus: [
      "Breaking down successful & failed campaigns",
      "Analyzing brands (Egypt & GCC)",
      "Explaining the 'why' behind results",
    ],
    examples: [
      "Why this brand is dominating the Saudi market",
      "What this campaign did wrong (and how to fix it)",
      "Reverse-engineering successful brands",
    ],
    value: "Builds authority without needing clients, proves strategic depth, and positions the agency as a problem-solver—not just a service provider.",
  },
  {
    number: "03",
    title: "Market & Growth Insights",
    purpose: "Establish Growth Station as a regional expert with deep understanding of both Egyptian and GCC markets.",
    contentFocus: [
      "Market trends and shifts",
      "Differences between Egypt & GCC audiences",
      "Business growth opportunities and challenges",
    ],
    examples: [
      "Key differences between Egyptian & UAE consumers",
      "Top growth opportunities for brands in Saudi Arabia",
      "Industry-specific insights",
    ],
    value: "Strengthens regional positioning, attracts higher-quality clients, and builds trust with businesses looking to scale beyond borders.",
  },
  {
    number: "04",
    title: "Proof & Authority Building",
    purpose: "Gradually build trust and credibility through visible proof of expertise—even without heavy case studies.",
    contentFocus: [
      "Frameworks & proprietary methodologies",
      "Behind-the-scenes processes",
      "Early wins, experiments, and insights",
      "Thought process over just results",
    ],
    examples: [
      "How we build a marketing strategy from scratch",
      "Our client onboarding process",
      "Before/After (even if small wins)",
    ],
    value: "Bridges the gap of missing case studies, builds trust over time, and prepares the audience for conversion.",
  },
];

const marketingFunnel = [
  {
    number: "01",
    stage: "Awareness",
    description: "Introduce Growth Station & its value through educational content, targeting ambitious business owners in Egypt & GCC. Builds credibility and brand recognition.",
  },
  {
    number: "02",
    stage: "Engagement",
    description: "Convert awareness into trust by sharing methodology, mini case studies, and insights. Encourages interactions via DMs, comments, and consultations.",
  },
  {
    number: "03",
    stage: "Conversion",
    description: "Turn qualified leads into clients with strategic service packages, trial consultations, and proposals. Focus on measurable ROI and closing deals.",
  },
  {
    number: "04",
    stage: "Retention & Loyalty",
    description: "Ensure repeat business and referrals through continuous value, performance reports, and exclusive insights. Strengthen long-term partnerships.",
  },
];

const demographics = [
  {
    icon: <FaUser />,
    label: "Age",
    value: "25 – 45 years",
  },
  {
    icon: <FaUsers />,
    label: "Gender",
    value: "Male & Female",
  },
  {
    icon: <FaGraduationCap />,
    label: "Education",
    value: "University graduates or higher",
  },
  {
    icon: <FaBriefcase />,
    label: "Occupation",
    value: "Business Owners, Founders / Co-founders, Marketing Managers, Managing Directors",
  },
  {
    icon: <FaDollarSign />,
    label: "Income Level",
    value: "Medium to high income, capable of investing in professional marketing services",
  },
  {
    icon: <FaBuilding />,
    label: "Business Type",
    value: "Small to Medium-sized Businesses (SMBs), Established startups with validated products/services",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Egypt: Cairo (Nasr City, New Cairo, Heliopolis, Maadi), Alexandria, 6th of October | GCC: Saudi Arabia, UAE, Kuwait",
  },
];

const traits = [
  {
    icon: <MdInsights />,
    label: "Mindset",
    value: "طموح، موجّه للنمو، ومركّز على النتائج.",
  },
  {
    icon: <MdVerified />,
    label: "Core Values",
    value: "توسّع الأعمال ونمو الإيرادات، حضور علامة قوي، احترافية ومصداقية.",
  },
  {
    icon: <FaLightbulb />,
    label: "Interests",
    value: "تطوير الأعمال، اتجاهات التسويق، التوسّع خارج السوق المحلي.",
  },
  {
    icon: <FaChartLine />,
    label: "Attitude Towards Marketing",
    value: "يقدّر التوجيه الاستراتيجي أكتر من التنفيذ وحده، ومنفتح على الابتكار اللي بيحقق ROI حقيقي.",
  },
  {
    icon: <FaUser />,
    label: "Personality",
    value: "صانع قرار تحت الضغط، حريص على الوقت والكفاءة، ومنفتح على شراكات إقليمية عابرة للحدود.",
  },
];

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

const contentCalendar = [
  {
    number: "01",
    type: "Grid",
    caption: "Growth Station Logo + Brand Identity",
    tov: "Logo + Growth Station",
    reference: "Reference",
    objective: "Awareness",
    imagePlaceholder: true,
    linkPlaceholder: false,
  },
  {
    number: "02",
    type: "Reel",
    caption: "Stay Tuned .. link",
    link: "https://www.instagram.com/reels/Cous8R1uSPr/",
    objective: "Awareness",
    imagePlaceholder: true,
    linkPlaceholder: true,
  },
  {
    number: "03",
    type: "Post",
    caption: "Your success partner should be Growth Station",
    tov: "Our Slogan",
    reference: "Your success partner should be Growth Station",
    objective: "Awareness",
    imagePlaceholder: true,
    linkPlaceholder: false,
  },
  {
    number: "04",
    type: "Post",
    caption: "لو انت اللي بتكتب وتصور وتعمل المونتاج ؟\nيبقى أكيد فيه حاجة غلط ..\nخليها علينا وإدي العيش لخبزه\nإن كل اللي براندك محتاجه — موجود في مكان واحد",
    tov: "SCRIPT",
    tovLink: "https://docs.google.com/document/d/1TbTe-yyqFmNc_w6xfLLZ_hQTbaI4XugRUM5cmRtvzCs/edit?tab=t.0",
    in: "هنعمل cover لكل الريلز اللي هتنزل على الأكونت",
    reference: "Your success partner should be Growth Station",
    objective: "Awareness",
    imagePlaceholder: false,
    linkPlaceholder: false,
  },
  {
    number: "05",
    type: "Reel",
    caption: "الماركتينج في مصر مش رفاهية ! ده \" أداة بقاء \"\nوالتسويق الصحيح هو اللي بيحول الزحمة لفرص ، والمنافسة لسيطرة",
    tov: "SCRIPT",
    tovLink: "https://docs.google.com/document/d/1uGEj0n3pvINcVe2dYBTKv52enpru8bzicT9mlptnIqM/edit?tab=t.0",
    reference: "objective : Educational & Awareness",
    objective: "Educational & Awareness",
    imagePlaceholder: false,
    linkPlaceholder: false,
  },
  {
    number: "06",
    type: "Carousel",
    caption: "خدعوك فقالوا ..",
    slides: [
      "إزاي توصل من 10 آلاف لـ 100 ألف متابع",
      "بجد ! هم قالولك إن الموضوع بالبساطة دي؟",
      "الحقيقة إن دي خدعة كبيرة . لو كانت بالسهولة دي ، كان كل اللي وعده درع المليون",
      "\"إنفلونسر\" ماشي في الشارع دلوقتي بقى",
      "شركات الماركتينج ببيعلك الوهم تحت مسمى \" النمو السريع \" بيوهومك إن فيه \" زرار سحري \" أو \" تركية معينة \" هتخلي حسابك ينفجر في أسبوع",
      "الحقيقة المرة ؟ المتابعين اللي بييجوا بضغط زرار هم اللي بييدفعوا حسابك لأبد . الخوارزميات مش غبية؛ هي بدور على تفاعل حقيقي مش أرقام ميتة",
      "لو عايز تكبر بجد وبشكل منطقي ؟ في المعادلة بسيطة :\nقيمة حقيقية تحل مشكلة ✅\nاستمرار مرضية لجمهورك ✅\nفهم دقيق لللي جمهورك محتاجه فعلاً مش اللي أنت عايز تقوله✅",
      "objective : Awareness & Educational\nلو عايز تبني إمبراطورية مجرد رقم على الشاشة، بطل تدور على السهل ..\nاعمل فولو لو عايز تعرف إزاي تبني جمهور حقيقي بيشتري منك مش بس\nبيتفجر عليك\nخدعوك فقالوا ..",
    ],
    tov: "لو عايز تبني إمبراطورية مجرد رقم على الشاشة، بطل تدور على السهل ..\nاعمل فولو لو عايز تعرف إزاي تبني جمهور حقيقي بيشتري منك مش بس\nبيتفجر عليك",
    reference: "objective : Awareness & Educational",
    objective: "Awareness & Educational",
    imagePlaceholder: false,
    linkPlaceholder: false,
  },
  {
    number: "07",
    type: "Reel",
    caption: "في العصر الحالي .. اللي بيعرف يوصل للناس هو اللي بيكسب\nف لو عايز تبني بيزنيس حقيقي ! لازم تبني \" براند \" في عقول الناس الأول .\nاعمل فولو عشان تعرف أسرار البيزنز اللي مبيقولوهاش ليك في الكتب.",
    tov: "Script",
    tovLink: "https://docs.google.com/document/d/1EVPHiatS6hquICoNSvr5MhBAWpA_Ac_6ka7fUT0RDYU/edit?tab=t.0",
    reference: "objective : Educational",
    objective: "Educational",
    imagePlaceholder: false,
    linkPlaceholder: false,
  },
  {
    number: "08",
    type: "Reel",
    caption: "تفتكرليه Gen_Z عامليين مشاكل في الشغل ؟",
    tov: "Script",
    tovLink: "https://docs.google.com/document/d/1ELj9kru61xYtjYnQssJdlrA7gisXHlhoGxh-V7OJkN8/edit?tab=t.0",
    reference: "objective : Educational",
    objective: "Educational",
    imagePlaceholder: false,
    linkPlaceholder: false,
  },
  {
    number: "09",
    type: "Reel",
    caption: "السوق بقى زحمة ؟\nالكل بقيد بعضه ؟\nهقولك إزاي تخرج برا الزحمة دي في 60 ثانية",
    tov: "Script",
    tovLink: "https://docs.google.com/document/d/1zGs6X3s1Itd70Jb0ZcCGTTyho4U7Q-Ww0DgyBOTBYuQ/edit?tab=t.0",
    reference: "objective : Educational",
    objective: "Educational",
    imagePlaceholder: false,
    linkPlaceholder: false,
  },
  {
    number: "10",
    type: "Post",
    caption: "تم تفعيل وضع : بعد العيد\nوكل سنة وانتو طيبين",
    in: "تنشر قبل العيد ب كذا يوم",
    tov: "بعد العيد",
    imagePlaceholder: true,
    showReferenceLabel: false,
    linkPlaceholder: false,
  },
  {
    number: "11",
    type: "Reel",
    caption: "عيدكم مبارك\nأعاده الله علينا وعليكم باليمن والبركات",
    in: "نبدل شخصية الرجل بالكاركتر بتاعنا",
    imagePlaceholder: true,
    showReferenceLabel: false,
    linkPlaceholder: false,
  },
  {
    number: "12",
    type: "Reel",
    caption: "انسى كورسات الماركتينج ..\nالفراعنة هم اللي اختاروا الـ Viral Content",
    tov: "Script",
    tovLink: "https://docs.google.com/document/d/1tUPLPn-aXY6hJnhSLLLzq-MUGzZsP9I101H_DLmsLpo/edit?tab=t.0",
    reference: "objective : Educational",
    objective: "Educational",
    imagePlaceholder: false,
    linkPlaceholder: false,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFunnelStage, setActiveFunnelStage] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const [activeCalendarItem, setActiveCalendarItem] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const fullText = traits.map((t) => `${t.label}: ${t.value}`).join(" | ");

  useEffect(() => {
    const handleScroll = () => {
      const pillars = document.querySelectorAll("div[id^='pillar-']");
      const calendarItems = document.querySelectorAll("div[id^='calendar-']");
      const scrollPosition = window.scrollY + 150;

      pillars.forEach((pillar, index) => {
        const pillarTop = pillar.offsetTop;
        const pillarHeight = pillar.offsetHeight;
        if (scrollPosition >= pillarTop && scrollPosition < pillarTop + pillarHeight) {
          setActivePillar(index);
        }
      });

      calendarItems.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;
        if (scrollPosition >= itemTop && scrollPosition < itemTop + itemHeight) {
          setActiveCalendarItem(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const element = document.getElementById('content-calendar');
      const opt = {
        margin: 10,
        filename: 'Growth-Station-Content-Calendar.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('حدث خطأ أثناء إنشاء PDF');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleCopySection = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('تم نسخ المحتوى!');
    });
  };

  return (
    <>
      <TopBar 
        eyebrow="Growth Station · Launch Playbook · 2026" 
        title="لوحة الانطلاق"
        onPrint={handlePrint}
        onDownloadPDF={handleDownloadPDF}
        isGeneratingPDF={isGeneratingPDF}
      />

      {/* Hero — framed like a departures board: one confident line, one destination */}
      <section className="fade-up hero-section">
        <p className="hero-eyebrow">
          Next departure · Egypt &amp; GCC
        </p>
        <h1 className="hero-title">
          Growth Station هي شريك علامة ونمو،{" "}
          <span className="text-ink-soft">مش وكالة تنفيذ عادية</span>
        </h1>
        <p className="hero-description">
          نتغلغل جوا أعمال عملائنا لبناء علامات تجارية قوية، وتحقيق نمو
          مستدام وملموس — استراتيجية الأول، وتنفيذ يترتب عليها.
        </p>
        <div className="hero-buttons">
          <a
            href="#goals"
            className="hero-button-primary"
          >
            راجع الأهداف الاستراتيجية
          </a>
        </div>
        <div className="hero-tags">
          {["الإطلاق: Cairo", "growthstation.com", "Strategy: Rana Eltorky"].map(
            (t) => (
              t === "growthstation.com" ? (
                <a
                  key={t}
                  href="https://growthstationco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-tag hero-tag-link"
                >
                  {t}
                </a>
              ) : (
                <span
                  key={t}
                  className="hero-tag"
                >
                  {t}
                </span>
              )
            )
          )}
        </div>
      </section>
      <div className="home-container">


        {/* Who is Growth Station */}
        <section className="fade-up about-section">
          <div className="about-header">
            <div>
              <h2 className="about-title">
                مين هي Growth Station؟
              </h2>
              <p className="about-eyebrow">
                Our story &amp; mission
              </p>
            </div>
            <CopyButton
              text="Growth Station is a Cairo-based digital marketing agency built on strategy before execution."
            />
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                <span className="text-signal font-bold">Growth Station</span>{" "}
                وكالة تسويق رقمي مقرها القاهرة، مبنية على مبدأ واحد غير قابل
                للتفاوض:{" "}
                <span className="text-ink font-bold font-italic">
                  الاستراتيجية الأول، والتنفيذ بعدها
                </span>
                .
              </p>
              <p>
                إحنا مش بيت إنتاج بينشر محتوى وبس. إحنا{" "}
                <span className="text-ink font-bold">شريك علامة ونمو</span> —
                حليف استراتيجي يتغلغل جوا أعمال عملائنا لبناء علامات قوية
                وتحقيق نمو cقيقي وقابل للقياس.
              </p>
            </div>
            <div className="about-card">
              <p>
                انطلقنا من مدينة نصر، القاهرة، ونخدم الشركات الصغيرة
                والمتوسطة والـ startups الطموحة في{" "}
                <span className="text-signal font-semibold">مصر ودول الخليج</span>.
              </p>
              <p>
                هدفنا نسد الفجوة بين الوكالات اللي بتنفذ بس، والتسويق
                الاستراتيجي اللي شركات مصر والخليج محتاجاه فعلاً عشان تكبر
                وتقود السوق.
              </p>
            </div>
          </div>
        </section>

        {/* Station 01: Positioning */}
        <section id="positioning" className="fade-up positioning-section">
          <SectionHeader
            code="01"
            eyebrow="Our core DNA"
            title="التموضع - Unique Value Proposition (UVP)"
          />

          <div className="positioning-container">
            <div className="positioning-grid">
            <div className="positioning-main">
              <div className="uvp-box">
                <div className="uvp-copy-wrapper">
                  <CopyButton
                    text={uvpText}
                    className="!border-ink-line !bg-transparent !text-paper/70 hover:!text-paper"
                  />
                </div>
                <p className="uvp-text">
                  <span className="text-brass font-bold">Growth Station</span>{" "}
                  is not just another marketing agency. We are a{" "}
                  <span className="text-paper font-bold">
                    Brand &amp; Growth Partner
                  </span>{" "}
                  that seamlessly integrates strategy, execution, and
                  measurable outcomes to drive sustainable business growth. We
                  empower companies in Egypt and the GCC to scale, strengthen
                  their brand positioning, and achieve consistent ROI.
                </p>
              </div>
            </div>

            <div className="positioning-pillars">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="pillar-card"
                >
                  <span className="text-2xl">{p.icon}</span>
                  <h4 className="pillar-title">
                    {p.title}
                  </h4>
                  <p className="pillar-desc">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            </div>

            <div className="quote-section">
            <span
              aria-hidden
              className="quote-mark"
            >
              "
            </span>
            <p className="quote-text">
              Strategy before execution.{" "}
              <span className="text-signal">Growth beyond borders.</span>
            </p>
          </div>
          </div>
        </section>

        {/* Station 02: Goals */}
        <section id="goals" className="fade-up goals-section">
          <SectionHeader
            code="02"
            eyebrow="Business, marketing, content & social"
            title="الأهداف الاستراتيجية"
          />

          <div className="goals-container">
            <div className="goals-grid">
              {goals.map((g) => (
                <div key={g.title} className="goal-card">
                  <div className="goal-header">
                    <div className="goal-icon">{g.icon}</div>
                    <button 
                      onClick={() => handleCopySection(`${g.title}\n\n${g.items.join('\n')}`)} 
                      className="section-copy-button"
                      title="نسخ"
                    >
                      نسخ
                    </button>
                  </div>
                  <div className="goal-content">
                    <h4 className="goal-title">{g.title}</h4>
                    <ul className="goal-list">
                      {g.items.map((item) => (
                        <li key={item} className="goal-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Station 03: Audience */}
        <section id="audience" className="fade-up audience-section">
          <SectionHeader
            code="03"
            eyebrow="Target audience profile"
            title="الجمهور المستهدف (Deep Level)"
          />

          <div className="audience-container">
            <div className="audience-content">
              {/* Demographics Box - Right */}
              <div className="audience-box">
                <div className="audience-box-header">
                  <span className="audience-box-icon"><FaUser /></span>
                  <h3 className="audience-box-title">Demographics</h3>
                  <span className="audience-box-eyebrow">DEMOGRAPHICS</span>
                  <button 
                    onClick={() => handleCopySection(demographics.map(d => `${d.label}: ${d.value}`).join('\n'))} 
                    className="section-copy-button"
                    title="نسخ"
                  >
                    نسخ
                  </button>
                </div>
                <table className="audience-table">
                  <thead>
                    <tr>
                      <th>Icon</th>
                      <th>Label</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demographics.map((d) => (
                      <tr key={`demo-${d.label}`}>
                        <td>
                          <span className="audience-table-icon">{d.icon}</span>
                        </td>
                        <td>
                          <div className="audience-table-label">{d.label}</div>
                        </td>
                        <td>
                          <div className="audience-table-value">{d.value}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Psychographics Box - Left */}
              <div className="audience-box">
                <div className="audience-box-header">
                  <span className="audience-box-icon"><FaBrain /></span>
                  <h3 className="audience-box-title">Psychographics</h3>
                  <span className="audience-box-eyebrow">PSYCHOGRAPHICS</span>
                  <CopyButton text={fullText} />
                </div>
                <table className="audience-table">
                  <thead>
                    <tr>
                      <th>Icon</th>
                      <th>Label</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {traits.map((t) => (
                      <tr key={`trait-${t.label}`}>
                        <td>
                          <span className="audience-table-icon">{t.icon}</span>
                        </td>
                        <td>
                          <div className="audience-table-label">{t.label}</div>
                        </td>
                        <td>
                          <div className="audience-table-value">{t.value}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Station 04: Pain Points */}
        <section id="pain-points" className="fade-up pain-points-section">
          <SectionHeader
            code="04"
            eyebrow="Pain Points & Buying Behavior"
            title="نقاط الألم وسلوك الشراء"
          />

          <div className="pain-points-container">
            <div className="pain-points-header">
              <span className="pain-points-icon"><FaSadTear /></span>
              <h3 className="pain-points-title">Pain Points</h3>
            </div>

            <div className="pain-points-grid">
              {painPoints.map((point, index) => (
                <div key={point} className="pain-point-card">
                  <div className="pain-point-header">
                    <div className="pain-point-number">{index + 1}</div>
                    <button 
                      onClick={() => handleCopySection(point)} 
                      className="section-copy-button"
                      title="نسخ"
                    >
                      نسخ
                    </button>
                  </div>
                  <div className="pain-point-content">
                    <span className="pain-point-text">{point}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pain-insight">
              <div className="pain-insight-icon"><FaLightbulb /></div>
              <div className="pain-insight-label">Core Pain Insight</div>
              <div className="pain-insight-text">
                "I want growth that works locally and regionally — not just more ads."
              </div>
            </div>

            <div className="buying-behavior-section">
              <div className="buying-behavior-header">
                <span className="buying-behavior-icon"><FaCreditCard /></span>
                <h3 className="buying-behavior-title">Buying Behavior</h3>
                <button 
                  onClick={() => handleCopySection(`Buying Behavior\n\nDecision Process:\n${buyingBehavior.decisionProcess.join('\n')}\n\nTriggers to Buy:\n${buyingBehavior.triggersToBuy.join('\n')}\n\nObjections:\n${buyingBehavior.objections.join('\n')}`)} 
                  className="section-copy-button"
                  title="نسخ"
                >
                  نسخ
                </button>
              </div>

              <div className="buying-behavior-grid">
                <div className="buying-behavior-card">
                  <div className="buying-behavior-card-header">
                    <span className="buying-behavior-card-icon"><FaChartLine /></span>
                    <h4 className="buying-behavior-card-title">Decision Process</h4>
                    <button 
                      onClick={() => handleCopySection(`Decision Process\n\n${buyingBehavior.decisionProcess.join('\n')}`)} 
                      className="section-copy-button"
                      title="نسخ"
                    >
                      نسخ
                    </button>
                  </div>
                  <div className="buying-behavior-list">
                    {buyingBehavior.decisionProcess.map((item) => (
                      <div key={item} className="buying-behavior-item">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="buying-behavior-card">
                  <div className="buying-behavior-card-header">
                    <span className="buying-behavior-card-icon"><FaBullseye /></span>
                    <h4 className="buying-behavior-card-title">Triggers to Buy</h4>
                    <button 
                      onClick={() => handleCopySection(`Triggers to Buy\n\n${buyingBehavior.triggersToBuy.join('\n')}`)} 
                      className="section-copy-button"
                      title="نسخ"
                    >
                      نسخ
                    </button>
                  </div>
                  <div className="buying-behavior-list">
                    {buyingBehavior.triggersToBuy.map((item) => (
                      <div key={item} className="buying-behavior-item">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="buying-behavior-card">
                  <div className="buying-behavior-card-header">
                    <span className="buying-behavior-card-icon"><FaQuestion /></span>
                    <h4 className="buying-behavior-card-title">Objections</h4>
                    <button 
                      onClick={() => handleCopySection(`Objections\n\n${buyingBehavior.objections.join('\n')}`)} 
                      className="section-copy-button"
                      title="نسخ"
                    >
                      نسخ
                    </button>
                  </div>
                  <div className="buying-behavior-list">
                    {buyingBehavior.objections.map((item) => (
                      <div key={item} className="buying-behavior-item">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="buying-behavior-card">
                  <div className="buying-behavior-card-header">
                    <span className="buying-behavior-card-icon"><FaGem /></span>
                    <h4 className="buying-behavior-card-title">Loyalty Potential</h4>
                  </div>
                  <div className="buying-behavior-list">
                    {buyingBehavior.loyaltyPotential.map((item) => (
                      <div key={item} className="buying-behavior-item">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Station 05: Marketing Funnel */}
        <section id="marketing-funnel" className="fade-up marketing-funnel-section">
          <SectionHeader
            code="05"
            eyebrow="Customer Journey"
            title="Marketing Funnel"
          />

          <div className="marketing-funnel-container">
            <div className="marketing-funnel-header">
              <div className="marketing-funnel-header-content">
                <h3 className="marketing-funnel-title">Marketing Funnel</h3>
                <p className="marketing-funnel-subtitle">Customer Journey</p>
              </div>
              <button 
                onClick={() => handleCopySection(`Marketing Funnel - Customer Journey\n\n${marketingFunnel.map((item, index) => `Stage ${item.number}: ${item.stage}\n${item.description}`).join('\n\n')}`)} 
                className="section-copy-button"
                title="نسخ"
              >
                نسخ
              </button>
            </div>

            <div className="marketing-funnel-grid">
              {marketingFunnel.map((item, index) => (
                <div 
                  key={item.number} 
                  id={`funnel-${index}`}
                  className="funnel-card"
                >
                  <div className="funnel-card-header">
                    <div className="funnel-stage-number">Stage {item.number}</div>
                    <button 
                      onClick={() => handleCopySection(`Stage ${item.number}: ${item.stage}\n\n${item.description}`)} 
                      className="section-copy-button"
                      title="نسخ"
                    >
                      نسخ
                    </button>
                  </div>
                  <h4 className="funnel-stage-title">{item.stage}</h4>
                  <p className="funnel-stage-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Station 06: Strategic Content Pillars */}
        <section id="strategic-pillars" className="fade-up strategic-pillars-section">
          <SectionHeader
            code="06"
            eyebrow="Content Strategy"
            title="Strategic Content Pillars"
          />

          <div className="strategic-pillars-container">
            <div className="strategic-pillars-header">
              <div className="strategic-pillars-header-content">
                <h3 className="strategic-pillars-title">Strategic Content Pillars</h3>
                <p className="strategic-pillars-subtitle">Content Strategy</p>
              </div>
              <button 
                onClick={() => handleCopySection(`Strategic Content Pillars - Content Strategy\n\n${strategicContentPillars.map((pillar) => `Pillar ${pillar.number}: ${pillar.title}\nPurpose: ${pillar.purpose}\nContent Focus:\n${pillar.contentFocus.join('\n')}\nExamples:\n${pillar.examples.join('\n')}\nValue: ${pillar.value}`).join('\n\n')}`)} 
                className="section-copy-button"
                title="نسخ"
              >
                نسخ
              </button>
            </div>

            <div className="strategic-pillars-content">
              <div className="strategic-pillars-pagination">
                {strategicContentPillars.map((pillar, index) => (
                  <button
                    key={pillar.number}
                    className={`pillar-number-btn ${activePillar === index ? "active" : ""}`}
                    onClick={() => {
                      setActivePillar(index);
                      const element = document.getElementById(`pillar-${index}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                  >
                    {pillar.number}
                  </button>
                ))}
              </div>

              <div className="strategic-pillars-grid">
                {strategicContentPillars.map((pillar, index) => (
                  <div 
                    key={pillar.number} 
                    id={`pillar-${index}`}
                    className={`pillar-card ${activePillar === index ? "highlighted" : ""}`}
                  >
                    <div className="pillar-header">
                      <div className="pillar-number">{pillar.number}</div>
                      <button 
                        onClick={() => handleCopySection(`Pillar ${pillar.number}: ${pillar.title}\n\nPurpose: ${pillar.purpose}\n\nContent Focus:\n${pillar.contentFocus.join('\n')}\n\nExamples:\n${pillar.examples.join('\n')}\n\nValue: ${pillar.value}`)} 
                        className="section-copy-button"
                        title="نسخ"
                      >
                        نسخ
                      </button>
                    </div>
                    <h4 className="pillar-title">{pillar.title}</h4>

                    <div className="pillar-section">
                      <div className="pillar-section-label">Purpose</div>
                      <div className="pillar-section-content">{pillar.purpose}</div>
                    </div>

                    <div className="pillar-section">
                      <div className="pillar-section-label">Content Focus</div>
                      <ul className="pillar-list">
                        {pillar.contentFocus.map((item) => (
                          <li key={item} className="pillar-list-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pillar-section">
                      <div className="pillar-section-label">Examples</div>
                      <ul className="pillar-list">
                        {pillar.examples.map((item) => (
                          <li key={item} className="pillar-list-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pillar-value">
                      <div className="pillar-value-label">Value</div>
                      <div className="pillar-value-text">{pillar.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="strategic-note">
              <div className="strategic-note-title">Strategic Note (Important)</div>
              <p className="strategic-note-text">
                This pillar structure is designed to: Replace lack of portfolio with strong thinking, Build authority before scale, Attract high-quality clients, not random leads. Growth Station doesn't sell marketing … it sells strategic thinking.
              </p>
            </div>
          </div>
        </section>

        {/* Station 07: Content Calendar */}
        <section id="content-calendar" className="fade-up content-calendar-section">
          <SectionHeader
            code="07"
            eyebrow="Growth Station"
            title="Content Calendar"
          />

          <div className="content-calendar-container">
            <div className="content-calendar-header">
              <div className="content-calendar-header-content">
                <h3 className="content-calendar-title">Content Calendar</h3>
                <p className="content-calendar-subtitle">Growth Station</p>
              </div>
              <button 
                onClick={() => handleCopySection(`Content Calendar - Growth Station\n\n${contentCalendar.map((item) => `Item ${item.number} - ${item.type}\nCaption: ${item.caption}\nIN: ${item.in}\nTOV: ${item.tov}\nReference: ${item.reference}\nObjective: ${item.objective}`).join('\n\n')}`)} 
                className="section-copy-button"
                title="نسخ"
              >
                نسخ
              </button>
            </div>

            <div className="content-calendar-body">
              {/* Sticky numbers row */}
              <div className="content-calendar-pagination">
                {contentCalendar.map((item, index) => (
                  <button
                    key={item.number}
                    className={`calendar-number-btn ${activeCalendarItem === index ? "active" : ""}`}
                    onClick={() => {
                      setActiveCalendarItem(index);
                      const el = document.getElementById(`calendar-scroll-box`);
                      const card = document.getElementById(`calendar-${index}`);
                      if (el && card) {
                        el.scrollTo({ top: card.offsetTop - 24, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.number}
                  </button>
                ))}
              </div>

              {/* Scrollable cards box */}
              <div
                id="calendar-scroll-box"
                className="content-calendar-scroll-box"
                onScroll={(e) => {
                  const box = e.currentTarget;
                  let closest = 0;
                  let minDist = Infinity;
                  contentCalendar.forEach((_, i) => {
                    const card = document.getElementById(`calendar-${i}`);
                    if (!card) return;
                    const dist = Math.abs(card.offsetTop - box.scrollTop);
                    if (dist < minDist) { minDist = dist; closest = i; }
                  });
                  setActiveCalendarItem(closest);
                }}
              >
                {contentCalendar.map((item, index) => (
                  <div
                    key={item.number}
                    id={`calendar-${index}`}
                    className={`calendar-card ${activeCalendarItem === index ? "highlighted" : ""}`}
                  >
                    <div className="calendar-card-header">
                      <div className="calendar-number">{item.number}</div>
                      <div className="calendar-type">{item.type}</div>
                      <button onClick={() => handleCopyCard(item)} className="calendar-copy-button" title="نسخ المحتوى">
                        نسخ
                      </button>
                    </div>

                    <div className="calendar-section">
                      <div className="calendar-section-label">Caption</div>
                      <div className="calendar-caption">
                        {item.caption ? item.caption.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        )) : <p>No caption</p>}
                      </div>
                    </div>

                    {item.slides && (
                      <div className="calendar-section">
                        <div className="calendar-section-label">Slides</div>
                        <div className="calendar-slides">
                          {item.slides.map((slide, i) => (
                            <div key={i} className="calendar-slide">
                              <span className="slide-number">{i + 1}</span>
                              <span className="slide-text">{slide}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.in && (
                      <div className="calendar-section">
                        <div className="calendar-section-label">IN</div>
                        <div className="calendar-in">
                          {item.in.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.tov && (
                      <div className="calendar-section">
                        <div className="calendar-section-label">TOV</div>
                        <div className="calendar-tov">
                          {item.tovLink ? (
                            <a href={item.tovLink} target="_blank" rel="noopener noreferrer" className="calendar-tov-link">
                              <span className="calendar-tov-text">{item.tov}</span>
                              <span className="calendar-tov-icon">📄</span>
                            </a>
                          ) : (
                            item.tov.split('\n').map((line, i) => (
                              <p key={i}>{line}</p>
                            ))
                          )}
                        </div>
                      </div>
                    )}

                    {item.link && (
                      <div className="calendar-section">
                        <div className="calendar-section-label">Link</div>
                        <div className="calendar-link">
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="calendar-link-button">
                            <span className="calendar-link-icon">🔗</span>
                            <span className="calendar-link-text">Open Link</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {item.imagePlaceholder && (
                      <div className="calendar-section">
                        {item.showReferenceLabel !== false && (
                          <div className="calendar-section-label">Reference</div>
                        )}
                        <div className="calendar-reference-placeholder">
                          <div className="placeholder-icon">📷</div>
                          <div className="placeholder-text">Image Reference</div>
                        </div>
                      </div>
                    )}

                    {item.objective && (
                      <div className="calendar-section">
                        <div className="calendar-section-label">Objective</div>
                        <div className="calendar-objective">{item.objective}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
