import { useEffect, useState } from "react";
import { isSamsungInternet, isAndroidBrowser } from "../utils/browserDetection";
import "./SamsungBrowserNotice.css";

export default function SamsungBrowserNotice() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user is on Samsung Internet or problematic Android browsers
    if (isSamsungInternet() || isAndroidBrowser()) {
      // Only show if not previously dismissed
      const wasDismissed = localStorage.getItem('samsung-notice-dismissed');
      if (!wasDismissed) {
        setShow(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    localStorage.setItem('samsung-notice-dismissed', 'true');
  };

  if (!show || dismissed) {
    return null;
  }

  return (
    <div className="samsung-browser-notice">
      <button
        className="samsung-browser-notice-close"
        onClick={handleDismiss}
        aria-label="إغلاق"
      >
        ×
      </button>

      <div className="samsung-browser-notice-content">
        <div className="samsung-browser-notice-icon">
          ⚠
        </div>

        <div>
          <strong>
            للحصول على أفضل تجربة
          </strong>

          <p>
            يبدو أن المتصفح يقوم بتغيير
            ألوان الموقع بسبب الوضع الداكن الإجباري.
          </p>

          <p>
            للحصول على الألوان الصحيحة، أوقف خيار
            <strong> "Dark mode for web content" </strong>
            من إعدادات المتصفح.
          </p>
        </div>
      </div>
    </div>
  );
}