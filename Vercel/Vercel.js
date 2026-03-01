if (window.location.hostname.includes('vercel.app')) {
  
  // --- 1. Initialize Web Analytics Queue ---
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };

  // --- 2. Load Web Analytics Script ---
  var analyticsScript = document.createElement('script');
  analyticsScript.src = "/_vercel/insights/script.js";
  analyticsScript.defer = true;
  document.head.appendChild(analyticsScript);

  // --- 3. Load Speed Insights Script ---
  var speedScript = document.createElement('script');
  speedScript.src = "/_vercel/speed-insights/script.js";
  speedScript.defer = true;
  document.head.appendChild(speedScript);
}
