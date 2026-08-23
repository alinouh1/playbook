import "./TopBar.css";

export default function TopBar({ title, eyebrow, onPrint, onDownloadPDF, isGeneratingPDF }) {
  return (
    <header className="topbar">
      <div className="topbar-content">
        <p className="topbar-eyebrow">
          {eyebrow}
        </p>
        <h2 className="topbar-title">{title}</h2>
      </div>
      <div className="topbar-buttons">
        <button 
          onClick={onDownloadPDF} 
          className="topbar-button-primary"
          disabled={isGeneratingPDF}
        >
          {isGeneratingPDF ? 'جاري إنشاء PDF...' : 'المحتوى الجاهز'}
        </button>
        <button onClick={onPrint} className="topbar-button-secondary">
          طباعة
        </button>
      </div>
    </header>
  );
}
