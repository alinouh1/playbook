import "./SectionHeader.css";

export default function SectionHeader({ code, title, eyebrow }) {
  return (
    <div className="section-header">
      <div className="section-header-code">
        {code}
      </div>
      <div className="section-header-content">
        <h2 className="section-header-title">{title}</h2>
        <p className="section-header-eyebrow">{eyebrow}</p>
      </div>
    </div>
  );
}
