# Achilleas Leivadiotis - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring smooth animations, dark mode support, and showcasing various projects and technical skills.

## 🚀 Live Demo
[View Portfolio](https://achilleasleivadiotis.com)

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.4 with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React & Simple Icons CDN
- **UI Components:** Custom built with Radix UI primitives
- **Deployment:** Vercel

## ✨ Features

- **Responsive Design:** Fully responsive across all devices
- **Dark Mode:** Automatic theme detection with manual toggle
- **Smooth Animations:** Framer Motion for page transitions and micro-interactions
- **Project Showcases:** Interactive cards with detailed project information
- **Technology Stack Display:** Visual representation of technical skills
- **GitHub Integration:** Real-time GitHub stats and contribution graph
- **PDF Downloads:** Resume and project reports available for download
- **Media Integration:** Video demonstrations and image galleries

## 📁 Project Structure

```
achilleas-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main landing page
│   │   ├── about/page.tsx        # About page with detailed background
│   │   ├── layout.tsx            # Root layout with providers
│   │   └── globals.css           # Global styles and Tailwind config
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero section with animated intro
│   │   │   ├── Skills.tsx        # Skills showcase with categories
│   │   │   ├── GitHubStats.tsx   # GitHub statistics display
│   │   │   └── ContactButtons.tsx # Contact information and links
│   │   ├── ui/
│   │   │   ├── card.tsx          # Reusable card component
│   │   │   ├── button.tsx        # Button variants
│   │   │   └── badge.tsx         # Badge component for tags
│   │   └── ThemeProvider.tsx     # Theme context provider
│   └── lib/
│       └── utils.ts               # Utility functions
├── public/
│   ├── Resume_Achilleas_Leivadiotis.pdf
│   ├── Thesis_AchilleasLeivadiotis.pdf
│   ├── detection.png             # Contrail detection visualization
│   ├── media1.mp4                # Tracking algorithm demonstration
│   └── Draft_Report__Group_1_.pdf # MEP automation project report
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/achilleas-portfolio.git
cd achilleas-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## 🎨 Customization Guide

### Personalizing Content

1. **Update Personal Information:**
   - Edit `src/components/sections/Hero.tsx` for name and tagline
   - Modify `src/app/page.tsx` for projects and experiences

2. **Add Your Projects:**
   - Projects are defined in `src/app/page.tsx` 
   - Follow the existing project card structure
   - Add project images/videos to the `public` folder

3. **Update Skills:**
   - Technology categories are in the main page component
   - Icons are fetched from Simple Icons CDN

4. **Styling:**
   - Global styles in `src/app/globals.css`
   - Tailwind config in `tailwind.config.ts`
   - Color scheme uses Tailwind's default palette with custom gradients

### Key Components to Modify

- **Hero Section:** Personal introduction and animated text
- **Projects Grid:** Showcase your work with interactive cards
- **Technology Stack:** Visual display of technical skills
- **Thesis Showcase:** Detailed project presentation with metrics
- **Contact Section:** Links to social profiles and contact methods

## 📝 Environment Variables

Create a `.env.local` file for any API keys or configuration:

```env
# Add any API keys or configuration here
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import repository in Vercel
3. Deploy with default Next.js settings

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## 📄 License

Feel free to use this code as a template for your own portfolio. If you do use it, a link back to this repo would be appreciated!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

**Achilleas Leivadiotis**
- GitHub: [@achilleas](https://github.com/yourusername)
- LinkedIn: [Achilleas Leivadiotis](https://linkedin.com/in/achilleas-leivadiotis)
- Email: contact@achilleas.dev

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- All open-source contributors whose packages made this possible

---

Built with ❤️ using Next.js and TypeScript