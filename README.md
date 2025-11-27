# Formal Letter of Intent (LOI) Generator

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-FormalLetter.doodax.com-indigo?style=for-the-badge&logo=rocket)](https://FormalLetter.doodax.com)
[![Powered By](https://img.shields.io/badge/Powered_By-HSINI_MOHAMED-blue?style=for-the-badge&logo=github)](https://github.com/hsinidev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A professional, AI-powered web application designed to generate customizable Letter of Intent (LOI) templates for business acquisitions, employment offers, and real estate transactions. 

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Google Gemini 2.5 AI**, featuring a stunning, immersive multi-colored galaxy-themed interface.

## ✨ Key Features

- **AI-Enhanced Drafting:** Leverages Google's Gemini 2.5 Flash model to professionally polish legal text.
- **Dynamic Templates:** Specialized logic for:
  - 🏢 **Business Acquisitions (M&A)** - Asset/Stock purchase structures.
  - 🤝 **Employment Offers** - Compensation packages and contingencies.
  - 🏠 **Real Estate Purchases** - Property details and inspection periods.
- **Immersive UI/UX:** 
  - Deep space multi-layer parallax background.
  - Interactive nebula animations and starfields.
  - Glassmorphism design system for a modern, friendly feel.
- **SEO Powerhouse:** 
  - Fully structured Schema.org JSON-LD.
  - 3,500+ word integrated SEO guide.
  - Optimized meta tags and OpenGraph data.
- **Compliance Ready:** Integrated modal system for Terms, Privacy, and DMCA notices with user acknowledgement flows.

## 🚀 Live Demo

Access the live application here:
[**doodax.com**](https://doodax.com/tools/letter-of-intent/index.html)

## 📂 Project Structure

```bash
/
├── components/          # React UI Components
│   ├── Footer.tsx       # Global footer with legal modal triggers
│   ├── Layout.tsx       # Core wrapper containing Galaxy CSS animations
│   ├── LegalModal.tsx   # Two-step caution/content modal system
│   └── LOIGenerator.tsx # Main form logic and Gemini AI integration
├── lib/
│   └── LOITemplate.ts   # Base Typescript templates for legal documents
├── public/              # Static Assets & SEO Files
│   ├── favicon.svg      # Vector branding
│   ├── robots.txt       # Crawler directives
│   └── sitemap.xml      # Search engine indexing map
├── utils/
│   └── SeoArticle.tsx   # Expandable, SEO-rich content module
├── App.tsx              # Application entry point & state management
├── index.html           # HTML5 boilerplate, Tailwind CDN, Import Maps
├── metadata.json        # Project configuration
└── README.md            # Documentation
```

## 🛠 Tech Stack

- **Frontend:** React 18.3.1 (Stable), TypeScript
- **Styling:** Tailwind CSS (via CDN), Custom CSS Keyframes
- **AI:** Google GenAI SDK (`@google/genai`)
- **Icons:** Lucide React
- **Build/Runtime:** ES Modules via browser (No bundler required for this setup)

## 👨‍💻 Author

**HSINI MOHAMED**
- Website: [doodax.com](https://doodax.com)
- GitHub: [@hsinidev](https://github.com/hsinidev)
- Email: hsini.web@gmail.com

---
*© 2024 Doodax. All Rights Reserved.*
