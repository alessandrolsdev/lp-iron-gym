# LP Iron Gym

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

LP Iron Gym is a high-performance, modern landing page built for fitness centers and gyms. The project leverages **React**, **Vite**, and **Tailwind CSS** to deliver a fully responsive, animated, and visually appealing experience with a sleek dark-mode aesthetic.

---

## 🚀 Features

- **Modern Tech Stack**: Built with React 19 and Vite for extremely fast HMR and optimized builds.
- **Premium UI/UX**: Custom animations using Framer Motion and smooth scrolling with Lenis.
- **Tailwind Styling**: Highly customized Tailwind CSS configuration tailored for an energetic, gym-focused dark theme.
- **Responsive Design**: Flawlessly adapts to mobile, tablet, and desktop screens.

---

## 🛠️ Installation & Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm`, `yarn`, or `pnpm` installed on your machine.

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd lp-iron-gym
   ```

2. **Install dependencies**:
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will be running at [http://localhost:5173/](http://localhost:5173/)*

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the application for production in the `dist` folder.
- `npm run lint` - Lints the codebase using ESLint to enforce code quality.
- `npm run preview` - Previews the production build locally.

---

## 📁 Project Structure

```
├── public/              # Static assets (images, icons, etc.)
├── src/                 # Source files
│   ├── assets/          # Internal assets like CSS or images
│   ├── components/      # Reusable React components (Buttons, Animations, etc.)
│   ├── layout/          # Global layout components (Navbar, Footer, etc.)
│   ├── sections/        # Main landing page sections (Hero, Classes, Features, etc.)
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Application entry point
│   ├── index.css        # Global CSS and Tailwind directives
├── .gitignore           # Ignored files for Git
├── eslint.config.js     # Linter configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite bundler configuration
```

---

## 🏛️ Architecture & Best Practices

This project adheres to **Senior-Level Patterns and Best Practices**:
- **Component Modularity**: UI sections and isolated logic are broken down into self-contained components.
- **Propriedary Styling**: Centralized styling utilities utilizing `clsx` and `tailwind-merge` (`cn` utility functions).
- **Code Documentation**: Key modules and components are documented using standard **JSDoc** for better intellisense and developer onboarding.
- **Performance**: Optimized rendering using modern React patterns and Vite’s aggressive code splitting for production.

---

## ©️ License

**Copyright © 2026 Nexus Eleva.**

This project is proprietary and confidential. It belongs to **Nexus Eleva**. Unauthorized copying, modification, or distribution of this software is strictly prohibited. For business inquiries, please contact Nexus Eleva.
