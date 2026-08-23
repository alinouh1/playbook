import { useState } from "react";
import "./CopyButton.css";

export default function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  };

  return (
    <button
      onClick={onCopy}
      className={`copy-button ${className}`}
    >
      {copied ? "تم النسخ ✓" : "نسخ"}
    </button>
  );
}
