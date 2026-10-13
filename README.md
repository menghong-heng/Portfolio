# Heng Menghong - Personal Portfolio WebApp

[![Live Demo](https://img.shields.io/badge/Demo-Live_Site-0070e0?style=flat-square)](https://menghong-heng.github.io/Portfolio/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Automated_Deploy-2088FF?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/menghong-heng/Portfolio/actions)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

Live website: [https://menghong-heng.github.io/Portfolio/](https://menghong-heng.github.io/Portfolio/)

---

## Overview

This repository contains the source code for the personal developer and data science portfolio of Heng Menghong. The application presents academic milestones, industry experience, natural language processing projects, data engineering pipelines, and technical competencies in a clean, modern glassmorphic interface.

---

## Key Features

- **Glassmorphic Interface**: Modern responsive UI constructed using Tailwind CSS and accessible UI primitives.
- **Academic & Professional Profile**: Highlights dual-degree studies at the Institute of Technology of Cambodia (Data Science) and the Institute of Foreign Languages (English).
- **Startup & Project Showcase**: Features Akara (AI-powered Khmer typing assistant), end-to-end Cambodian job market ETL pipelines, and NLP classifiers.
- **Interactive Competency Matrix**: Categorized technical skills across data science, database engineering, BI tools, and software development.
- **Automated CI/CD**: Automatic build, asset bundling, and GitHub Pages deployment powered by GitHub Actions.

---

## Tech Stack and Architecture

- **Core Framework**: React 18 with TypeScript
- **Bundler & Development Server**: Vite
- **Styling**: Tailwind CSS with custom glassmorphism configuration
- **UI Components**: Radix UI primitives and Lucide icons
- **Deployment Target**: GitHub Pages (Base path configured to `/Portfolio/`)

---

## Project Structure

```
Portfolio/
|-- .github/workflows/
|   `-- deploy.yml                 GitHub Actions deployment workflow
|-- public/
|   |-- images/
|   |   `-- Heng_Menghong.png      Profile portrait asset
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- assets/                    Static images and logos
|   |-- components/
|   |   `-- ui/                    Glassmorphic cards, buttons, badges
|   |-- lib/
|   |   `-- utils.ts               Tailwind class merging utilities
|   |-- App.tsx                    Main single-page portfolio layout & content
|   |-- index.css                  Global Tailwind styles and theme tokens
|   `-- main.tsx                   React root entry point
|-- package.json
|-- tailwind.config.ts
|-- tsconfig.json
`-- vite.config.ts
```

---

## Local Development and Setup

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or pnpm package manager

### 1. Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/menghong-heng/Portfolio.git
cd Portfolio
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) in your browser to inspect the application.

### 3. Linting and Production Build

Validate TypeScript types, verify code styling, and generate optimized distribution files:

```bash
# Run ESLint validation
npm run lint

# Build optimized production bundle into dist/
npm run build
```

---

## Deployment Workflow

The repository is configured with a GitHub Actions workflow in `.github/workflows/deploy.yml`. 

Whenever changes are pushed to the `main` branch:
1. The workflow checks out the repository.
2. It sets up the Node.js environment and executes `npm ci`.
3. It compiles the project via `npm run build`.
4. It deploys the bundled `dist/` directory to GitHub Pages.

---

## Contact

- **Student**: Heng Menghong (ID: e20220258)
- **Institution**: Institute of Technology of Cambodia (ITC)
- **Email**: [heng.menghong.321@gmail.com](mailto:heng.menghong.321@gmail.com)
- **Portfolio**: [https://menghong-heng.github.io/Portfolio/](https://menghong-heng.github.io/Portfolio/)
- **GitHub**: [https://github.com/menghong-heng](https://github.com/menghong-heng)
- **Telegram**: [@menghong_hengg](https://t.me/menghong_hengg)
