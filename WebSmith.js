// WebSmith.js
// Made with Love by Joel Jolly.

// Capture the <script> tag that loaded WebSmith.js
const websmithScriptTag = document.currentScript;

// Loader with callback
function createScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    if (callback) script.onload = callback;
    document.head.appendChild(script);
}

// Step 1: Load Head.js
createScript(
    "https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@main/Head/Head.js",
    () => {
        // Step 2: Load user's script
        const userScriptPath = websmithScriptTag.getAttribute("data-websmith");

        if (userScriptPath) {
            createScript(userScriptPath, () => {
                // ✅ Step 3: Load vercel.js
                createScript(
                    "https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@main/Vercel/Vercel.js"
                );
            });
        } else {
            // fallback if no user script
            createScript(
                "https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@main/Vercel/Vercel.js"
            );
        }
    }
);
