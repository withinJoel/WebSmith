//WebSmith.js
//Made with Love by Joel Jolly.

// Capture the <script> tag that loaded WebSmith.js
const websmithScriptTag = document.currentScript;

// Loader with callback
function createScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}

createScript("https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@main/Head/Head.js"); // Load Head.js
createScript("https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@main/Vercel/Vercel.js"); // Load Vercel.js
