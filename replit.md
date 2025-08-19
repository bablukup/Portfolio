# Portfolio Website for Bablu Kumar

## Overview

This is a modern, professional personal portfolio website built for Bablu Kumar, a Full-Stack Developer and Open Source Enthusiast. The project is structured as a full-stack application with a React + TypeScript frontend using Tailwind CSS and Shadcn UI components, alongside a Node.js/Express backend. The application features dynamic content loading from a centralized configuration file, smooth animations with Framer Motion, and a fully responsive design with dark/light mode support.

The portfolio showcases skills, projects, experience, and provides contact functionality through EmailJS integration. It's designed to be deployed on Replit with a focus on performance, accessibility, and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and better development experience
- **Styling**: Tailwind CSS with custom CSS variables for theming and Shadcn UI component library for consistent, accessible components
- **Animations**: Framer Motion for smooth page transitions, scroll-triggered animations, and interactive hover effects
- **State Management**: React Query (TanStack Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider supporting light/dark mode with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Storage**: In-memory storage implementation with interfaces for future database integration
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (future-ready)
- **Development**: Vite integration for hot module replacement and development server

### Configuration Management
- **Dynamic Content**: Centralized JSON configuration file (`config/portfolio.json`) containing all personal information, skills, projects, experience, and social links
- **Type Safety**: Shared TypeScript schemas between frontend and backend for data validation
- **Asset Management**: Static assets served through Vite with optimized bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL adapter for type-safe database operations
- **Schema**: Shared schema definitions with Zod validation for runtime type checking
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment

### UI/UX Design Patterns
- **Component Architecture**: Modular React components with consistent prop interfaces
- **Responsive Design**: Mobile-first approach using Tailwind CSS breakpoints
- **Accessibility**: Radix UI primitives for accessible component foundations
- **Performance**: Lazy loading, code splitting, and optimized asset delivery
- **Animation Strategy**: Intersection Observer API for scroll-triggered animations with performance optimization

### Build and Development Workflow
- **Build Tool**: Vite for fast development and optimized production builds
- **Type Checking**: TypeScript with strict mode for compile-time error detection
- **Code Quality**: ESLint configuration with consistent formatting rules
- **Development Server**: Hot module replacement with error overlay for enhanced developer experience

## External Dependencies

### Core Frameworks and Libraries
- **React 18** - Frontend framework with concurrent features
- **Express.js** - Backend web framework for Node.js
- **TypeScript** - Static type checking and enhanced IDE support
- **Vite** - Build tool and development server

### Database and ORM
- **Drizzle ORM** - Type-safe database toolkit with PostgreSQL support
- **Neon Database** - Serverless PostgreSQL database service
- **connect-pg-simple** - PostgreSQL session store for Express sessions

### UI and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Radix UI based component library
- **Framer Motion** - Animation library for React
- **Lucide React** - Icon library with consistent styling

### Form Handling and Validation
- **React Hook Form** - Performant form library with validation
- **Zod** - Schema validation library
- **@hookform/resolvers** - Validation resolvers for React Hook Form

### Communication and Email
- **EmailJS** - Client-side email service for contact forms
- **React Query** - Data fetching and state management library

### Development and Deployment
- **Replit** - Cloud development and deployment platform
- **PostCSS** - CSS processing with Autoprefixer
- **date-fns** - Date manipulation library for consistent formatting

### Utility Libraries
- **clsx** - Conditional className utility
- **class-variance-authority** - Component variant utility
- **nanoid** - URL-safe unique string ID generator