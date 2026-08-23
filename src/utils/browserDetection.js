export function isSamsungInternet() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const userAgent = navigator.userAgent || "";

  // Check for Samsung Internet Browser
  return /SamsungBrowser/i.test(userAgent);
}

export function isAndroidBrowser() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const userAgent = navigator.userAgent || "";

  // Check for various Android browsers that may have dark mode issues
  return /Android/i.test(userAgent) && 
         (/SamsungBrowser/i.test(userAgent) || 
          /UCBrowser/i.test(userAgent) || 
          /MiuiBrowser/i.test(userAgent) ||
          /XiaoMi/i.test(userAgent) ||
          /HuaweiBrowser/i.test(userAgent));
}

export function getBrowserName() {
  if (typeof navigator === "undefined") {
    return "Unknown";
  }

  const userAgent = navigator.userAgent || "";

  if (/SamsungBrowser/i.test(userAgent)) return "Samsung Internet";
  if (/Chrome/i.test(userAgent) && !/Edge/i.test(userAgent)) return "Chrome";
  if (/Firefox/i.test(userAgent)) return "Firefox";
  if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) return "Safari";
  if (/Edge/i.test(userAgent)) return "Edge";
  if (/UCBrowser/i.test(userAgent)) return "UC Browser";
  if (/MiuiBrowser/i.test(userAgent)) return "MIUI Browser";
  if (/Opera/i.test(userAgent)) return "Opera";
  
  return "Unknown";
}