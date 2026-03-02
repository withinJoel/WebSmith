# WebSmith  
* ✨ A tiny helper library to reduce repetitive HTML `<head>` boilerplate.  
* Made with 💖 by Joel Jolly.

# 🚀 About
* WebSmith is a lightweight utility that automatically injects essential `<head>` tags into your webpage — including meta tags, SEO information, icons, scripts, stylesheets, and more.
* Instead of manually adding `<meta>`, `<link>`, and `<script>` tags every time, WebSmith handles everything through a simple configuration object.
* Perfect for personal projects, prototypes, and simple apps that don’t need a huge frontend framework.

# ✨ Features
* Auto-generates common SEO meta tags  
* Supports Open Graph & Twitter metadata  
* Adds favicon, manifest, stylesheets & scripts  
* Loads user script after initializing the head  
* No dependencies — pure vanilla JavaScript  
* Plug-and-play with **one script tag**

## 📦 Installation
* Just drop one script in your HTML:

```html
<script src="your-app.js"></script>
```

## 🧠 Usage
* In your your-app.js:
* Note: Any field is optional — WebSmith automatically fills defaults.
```
// WebSmith Version
const WEB_SMITH_VERSION = "v2.0.2";

Head({
    appName: "My Cool App",
    appDescription: "A simple demo using WebSmith",
    appKeywords: "websmith, html, meta, boilerplate",
    appAuthor: "Joel Jolly",
    authorSocialHandle: "@Withinjoel",
    appLogo: "/assets/logo.png",
    appStyle: "/assets/style.css",
    appScript: "/assets/app.js",
    appManifest: "/manifest.json"
});

// Utils
function createScriptElement(srcElement, onload) {
    const script = document.createElement("script");
    script.src = srcElement;
    if (onload) script.onload = onload;
    document.head.appendChild(script);
}

// Script Loader
createScriptElement(`https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@${WEB_SMITH_VERSION}/Head/Head.js`, () => Head(headConfig));
createScriptElement(`https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@${WEB_SMITH_VERSION}/Vercel/Vercel.js`);
```
# 🤝 Contributing
* Want to improve WebSmith? PRs are welcome!

# 🔧 Support Me
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-orange?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/withinjoel)
---
Made with 💖 by Joel Jolly.
