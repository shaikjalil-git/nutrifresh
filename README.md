# 🌿 NutriFresh — Personalized Dietary Planning & Recipes Hub

<div align="center">
  <img src="nutrifresh/public/nutrifresh_banner.png" alt="NutriFresh Brand Banner" width="100%" style="border-radius: 24px; margin-bottom: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.15);" />

  <p align="center">
    <strong>A premium, responsive, state-of-the-art dietary application built with Next.js 16, React 19, Tailwind CSS v4, and Firebase.</strong>
  </p>

  <p align="center">
    <a href="#-key-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-folder-structure">Folder Structure</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-netlify-deployment">Deployment</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2.4-%2361DAFB?style=for-the-badge&logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0.0-%2338B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/TypeScript-5.0-%233178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Firebase-%23FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  </p>
</div>

---

## 📖 Overview

**NutriFresh** is a next-generation dietary web application designed to simplify healthy living and meal planning. Rather than offering generic, one-size-fits-all suggestions, NutriFresh actively **personalizes the entire user experience**. 

From the moment you sign up, an advanced **Onboarding Wizard** collects your dietary preferences (e.g., Vegan, Keto, Gluten-Free) and health metrics to formulate customized daily caloric and macronutrient targets. It then serves a beautifully tailored dashboard complete with dynamic water tracking, real-time macro analytics, interactive meal logging, and a gourmet curated Recipe Hub.

---

## ✨ Key Features

### 1. 🧙‍♂️ Intelligent Onboarding Wizard
* **Personalized Profiles:** Gathers target goals, weight, height, activity level, and dietary styles.
* **Smart Computations:** Automatically calculates ideal daily caloric targets and perfect macro balances (Protein, Carbs, Fats) based on the user's specific health goals.
* **Interactive UI:** Smooth multi-step wizard animated with **Framer Motion** for a seamless, gaming-like sign-up flow.

### 2. 📊 Dynamic Feed & Dashboard
* **Tailored Recommendations:** Displays localized breakfast, lunch, and dinner suggestions matching the user's exact dietary profile.
* **Caloric & Hydration Trackers:** 
  * Real-time interactive calories bar.
  * Interactive **8-cup water logger** with beautiful micro-animations.
* **Today's Pick:** Curated featured recipes updated daily, complete with an interactive "Match Percentage" based on the user's profile.

### 3. 🍳 Gourmet Recipes Explorer
* **Dietary Filtering:** Seamlessly filter recipes by categories like *Vegan*, *Keto*, *Breakfast*, *High Protein*, or *Quick & Easy*.
* **Interactive Portions Scaling:** Automatically adjusts ingredient measurements dynamically based on the number of servings requested!
* **Detailed Nutrition Breakdown:** Displays exact calories, macro distributions, and key vitamins per serving.
* **Favorites System:** Save recipes in real-time with an elegant animated heart interaction.

### 4. 📈 Interactive Nutrition Tracking
* **Progress Analytics:** Renders elegant, interactive visual charts using **Recharts** to analyze historical protein, carb, and fat intake.
* **Hydration Trends:** Visual graphs of weekly water consumption.
* **Calorie Balance:** Quick-glance charts displaying calories eaten vs. burned.

### 5. 🔐 Advanced Security & Auth Gate
* **Dual Auth Modes:** Secure sign-in utilizing **Firebase Authentication** for email/password and single-click **Google Sign-In**.
* **Protected Routes:** Context-driven `AuthGate` wrapper prevents unauthenticated access to dashboards, profile settings, and trackers, redirecting users to a sleek login interface.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | High-performance React application shell, routing, and optimization. |
| **Library** | [React 19](https://react.dev/) | Component architecture, state hooks, and client interfaces. |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS | Modern, ultra-fast design utility classes and tailored design tokens. |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Cinematic page transitions, sliding tab indicators, and wizard steps. |
| **Database & Auth** | [Firebase Core & Auth](https://firebase.google.com/) | Live user authentication (Google & Email) and profile synchronization. |
| **Data Viz** | [Recharts](https://recharts.org/) | Gorgeous visual charts for nutrition history and calorie breakdowns. |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent vector icon pack. |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) | Ultra-smooth state validation inside the Onboarding Wizard. |

---

## 📂 Folder Structure

The repository is organized into a main monorepo structure containing the Netlify configurations and the `nutrifresh` frontend application:

```text
RECIPE-APP/
├── netlify.toml                # Netlify deployment rules (Next.js subdirectory)
└── nutrifresh/                 # Main Frontend Project
    ├── public/                 # Static assets, logos, and branding banners
    ├── src/
    │   ├── app/                # Next.js App Router (Pages & Layouts)
    │   │   ├── profile/        # User Profile Management Page
    │   │   ├── recipes/        # Recipes Page & Dynamic Detail View [id]
    │   │   ├── tracking/       # Nutrition Data Tracking & Graphs
    │   │   ├── layout.tsx      # Main layout component
    │   │   ├── page.tsx        # Homepage / Dashboard Feed Page
    │   │   └── globals.css     # Global styles & Tailwind configuration
    │   ├── components/         # Reusable Custom UI Components
    │   │   ├── OnboardingWizard.tsx  # Multi-step onboarding form
    │   │   ├── AuthGate.tsx    # Protected route gate & Login screen
    │   │   ├── Navbar.tsx      # Premium navigation sidebar/header
    │   │   └── PageTransition.tsx    # Framer Motion page wrapper
    │   ├── context/            # React Global Context
    │   │   └── AuthContext.tsx # Firebase Auth & Firestore Profile context
    │   ├── lib/                # Static data & configuration
    │   │   ├── data.ts         # Gourmet recipe database & mock progress
    │   │   └── firebase.ts     # Firebase client configuration
    │   └── types/              # TypeScript declarations
    ├── tsconfig.json           # TS rules & path aliases
    ├── tailwind.config.ts      # Tailwind styling modifications
    └── package.json            # Scripts & project dependencies
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites
* [Node.js](https://nodejs.org/) (v20+ recommended)
* [npm](https://www.npmjs.com/) or another package manager (Yarn, pnpm, Bun)

### 1. Clone the Repository
```bash
git clone https://github.com/shaikjalil-git/nutrifresh.git
cd nutrifresh
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file inside the `nutrifresh/` directory and populate it with your Firebase configuration values:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

### 4. Run the Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

### 5. Build for Production
To generate a fully optimized build of the Next.js application:
```bash
npm run build
npm run start
```

---

## 🌐 Netlify Deployment

This project is fully ready for deployment on **Netlify** using the provided `netlify.toml` file at the root. The repository is preconfigured to build from the subdirectory:

* **Build Command:** `npm run build`
* **Base Directory:** `nutrifresh`
* **Publish Directory:** `nutrifresh/.next`
* **Plugins Used:** `@netlify/plugin-nextjs` for server-side functions and route redirects.

---

## 🤝 Contributing
Contributions, suggestions, and bug reports are welcome! Feel free to open issues or submit pull requests.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/shaikjalil-git">Shaik Jalil</a></p>
</div>