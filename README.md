# Portfolio Website for Bablu Kumar

![Portfolio]

## Table of Contents
- [Overview](#overview)
- [User Preferences](#user-preferences)
- [System Architecture](#system-architecture)
- [External Dependencies](#external-dependencies)
- [Getting Started](#getting-started)
- [License](#license)
- [Contact](#contact)

## Overview

This is a modern, professional personal portfolio website for Bablu Kumar, a Full-Stack Developer and Open Source Enthusiast.  
It features a React + TypeScript frontend using Tailwind CSS and Shadcn UI, along with a Node.js/Express backend.  
The app showcases skills, projects, experience, and includes contact via EmailJS.  
Designed to be fully responsive with dark/light modes, smooth animations, and excellent performance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- React 18 with TypeScript for type safety
- Tailwind CSS & Shadcn UI for theming and accessible components
- Framer Motion for animations
- React Query for state management
- Wouter for routing
- Light/Dark theme support with system detection

### Backend
- Node.js + Express.js with TypeScript
- In-memory storage (future db integration ready)
- PostgreSQL session store with connect-pg-simple
- Vite-powered development server with hot reload

### Configuration & Database
- Centralized JSON config for portfolio data
- Shared TypeScript schemas & Zod validations
- Drizzle ORM with Neon serverless PostgreSQL
- Migrations managed by Drizzle Kit

### UI/UX
- Modular React components with Tailwind CSS responsive design
- Radix UI primitives for accessibility
- Performance optimizations like lazy loading and code splitting

### Development Workflow
- Vite for build and dev server
- ESLint for code quality
- Hot module replacement and error overlay

## External Dependencies

- React 18, Express.js, TypeScript, Vite
- Drizzle ORM, Neon Database, connect-pg-simple
- Tailwind CSS, Shadcn UI, Framer Motion, Lucide React icons
- React Hook Form, Zod, EmailJS, React Query, and more

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create `.env` file or configure environment variables (see `.env.example`)
4. Run the development server: `npm run dev`
5. Open http://localhost:3000 (or the configured port) in your browser

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or collaboration, reach out:

- Email: [bk596572@gmail.com]
- GitHub: (https://github.com/bablukup/Portfolio)
- LinkedIn: (https://www.linkedin.com/in/bablukup/)

---

> Built with ❤️ by Bablu Kumar

