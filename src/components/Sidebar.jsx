import { useState, useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import "./Sidebar.css";
import logoDark from "../assets/logo-dark.png";

const stops = [
  { to: "#", code: "00", label: "المحطة الرئيسية", en: "Overview" },
  { to: "#positioning", code: "01", label: "التموضع", en: "Positioning" },
  { to: "#goals", code: "02", label: "الأهداف الاستراتيجية", en: "Goals" },
  { to: "#audience", code: "03", label: "الجمهور والمسار", en: "Audience" },
  { to: "#pain-points", code: "04", label: "نقاط الألم", en: "Pain Points" },
  { to: "#marketing-funnel", code: "05", label: "Marketing Funnel", en: "Marketing Funnel" },
  { 
    to: "#strategic-pillars", 
    code: "06", 
    label: "Strategic Pillars", 
    en: "Strategic Pillars",
    subItems: [
      { to: "#pillar-0", code: "01", label: "Educational & Strategy", en: "Educational & Strategy" },
      { to: "#pillar-1", code: "02", label: "Strategic Thinking", en: "Strategic Thinking" },
      { to: "#pillar-2", code: "03", label: "Market & Growth", en: "Market & Growth" },
      { to: "#pillar-3", code: "04", label: "Proof & Authority", en: "Proof & Authority" },
    ]
  },
  { 
    to: "#content-calendar", 
    code: "07", 
    label: "Content Calendar", 
    en: "Content Calendar",
    subItems: [
      { to: "#calendar-0", code: "01", label: "Grid", en: "Grid" },
      { to: "#calendar-1", code: "02", label: "Reel", en: "Reel" },
      { to: "#calendar-2", code: "03", label: "Post", en: "Post" },
      { to: "#calendar-3", code: "04", label: "Post", en: "Post" },
      { to: "#calendar-4", code: "05", label: "Reel", en: "Reel" },
      { to: "#calendar-5", code: "06", label: "Carousel", en: "Carousel" },
      { to: "#calendar-6", code: "07", label: "Reel", en: "Reel" },
      { to: "#calendar-7", code: "08", label: "Reel", en: "Reel" },
      { to: "#calendar-8", code: "09", label: "Reel", en: "Reel" },
      { to: "#calendar-9", code: "10", label: "Post", en: "Post" },
      { to: "#calendar-10", code: "11", label: "Reel", en: "Reel" },
      { to: "#calendar-11", code: "12", label: "Reel", en: "Reel" },
    ]
  },
];

export default function Sidebar({ isOpen, closeSidebar }) {
  const [activeSection, setActiveSection] = useState("");
  const [activeSubItem, setActiveSubItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id^='pillar-']");
      const triggerPoint = window.innerHeight * 0.4; // 40% from top

      let current = "";
      let currentSub = "";
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          const sectionId = section.getAttribute("id");
          if (sectionId.startsWith("pillar-")) {
            currentSub = sectionId;
            current = "strategic-pillars";
          } else {
            current = sectionId;
            currentSub = "";
          }
        }
      });

      // Content Calendar is a special case since its sub-items are in a scroll box
      const calendarSection = document.getElementById("content-calendar");
      if (calendarSection) {
        const rect = calendarSection.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          current = "content-calendar";
          // Find which calendar item is visible in its scroll box
          const scrollBox = document.getElementById("calendar-scroll-box");
          if (scrollBox) {
            const cards = scrollBox.querySelectorAll("div[id^='calendar-']");
            let minDist = Infinity;
            cards.forEach(card => {
              const dist = Math.abs(card.offsetTop - scrollBox.scrollTop);
              if (dist < minDist) {
                minDist = dist;
                currentSub = card.getAttribute("id");
              }
            });
          }
        }
      }

      setActiveSection(current);
      setActiveSubItem(currentSub);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Also listen to the calendar scroll box to update sub-items
    const scrollBox = document.getElementById("calendar-scroll-box");
    if (scrollBox) {
      scrollBox.addEventListener("scroll", handleScroll);
    }

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollBox) scrollBox.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Mobile Close Button */}
      <button 
        className="md:hidden absolute top-4 left-4 p-2 text-ink z-50 bg-paper rounded-full shadow-sm border border-line"
        onClick={closeSidebar}
      >
        <FiX size={20} />
      </button>

      <div className="sidebar-header">
        <img src={logoDark} alt="Growth Station Logo" className="sidebar-logo-image" />
      </div>

      {/* Station line — each nav item is a stop on the rail */}
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {stops.map((s) => {
            const sectionId = s.to.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={s.to} className="sidebar-nav-item">
                <a
                  href={s.to}
                  className={`sidebar-nav-link ${isActive ? "active" : ""}`}
                >
                  {isActive && <FiCheck className="sidebar-active-check" />}
                  <span className="flex flex-col">
                    <span className="sidebar-nav-code">
                      {s.code}
                    </span>
                    <span className="sidebar-nav-label">
                      {s.en}
                    </span>
                  </span>
                </a>
                {s.subItems && (
                  <ul className="sidebar-sub-nav-list">
                    {s.subItems.map((sub) => {
                      const subItemId = sub.to.replace("#", "");
                      const isSubActive = activeSubItem === subItemId;
                      return (
                        <li key={sub.to} className="sidebar-sub-nav-item">
                          <a
                            href={sub.to}
                            className={`sidebar-sub-nav-link ${isSubActive ? "active" : ""}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(sub.to.replace("#", ""));
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              }
                            }}
                          >
                            {isSubActive && <FiCheck className="sidebar-sub-active-check" />}
                            <span className="sidebar-sub-nav-code">
                              {sub.code}
                            </span>
                            <span className="sidebar-sub-nav-label">
                              {sub.en}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <p className="sidebar-footer-text">
          Strategy: Rana Eltorky
          <br />
          growthstation.com
        </p>
      </div>
    </aside>
  );
}
