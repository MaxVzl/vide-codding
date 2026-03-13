# GEMINI.md - Instructional Context for `vide-codding`

## Project Overview
`vide-codding` is a modern web application built with **Next.js 16.1.6** using the **App Router** architecture. It leverages **React 19**, **TypeScript**, and **Tailwind CSS 4** for building a fast and scalable user interface.

### Key Technologies
- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4, Radix UI, Shadcn, Lucide React (via @remixicon/react)
- **Type Safety:** TypeScript
- **Linting:** ESLint 9 (with Next.js and TypeScript configurations)
- **Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`, `tw-animate-css`

### Architecture
- **`src/app/`**: Contains the application's routes and layouts (Next.js App Router).
- **`public/`**: Static assets like logos and icons.
- **Root Files**: Configuration for Next.js, Tailwind, ESLint, and TypeScript.

---

## Building and Running
The project uses **pnpm** as the package manager (as indicated by `pnpm-lock.yaml`).

### Key Commands
- **Development Server:** `pnpm dev`
- **Build for Production:** `pnpm build`
- **Start Production Server:** `pnpm start`
- **Linting:** `pnpm lint`

---

## Development Conventions

### Coding Style & Patterns
- **Next.js App Router:** Follow the convention of placing routes and layouts within `src/app/`.
- **TypeScript:** Strict type safety is encouraged.
- **Styling:** Use Tailwind CSS 4 utility classes for all styling needs. Utilize `clsx` and `tailwind-merge` for conditional and merged classes.
- **Components:** Leverage Radix UI and Shadcn patterns for UI components to ensure accessibility and consistent design.
- **Fonts:** Geist and Geist Mono fonts are pre-configured via `next/font`.

### Testing Practices
- **TODO:** No explicit testing framework (e.g., Jest, Vitest, Playwright) is currently configured in `package.json`. When adding tests, ensure they are integrated into the pnpm scripts.

### Linting & Formatting
- **ESLint:** The project uses ESLint 9 with `eslint-config-next`. Run `pnpm lint` to ensure code quality.

---

## Usage for Gemini CLI
When interacting with this project:
1.  **Prioritize App Router Patterns:** Use `page.tsx`, `layout.tsx`, and `loading.tsx` within `src/app/`.
2.  **Tailwind CSS 4:** Be aware of Tailwind 4's features and potential differences from earlier versions.
3.  **Component Architecture:** Suggest or create components that align with Radix UI/Shadcn standards already present in the dependencies.
4.  **Verification:** Always run `pnpm build` or `pnpm lint` after making significant changes to ensure compatibility and correctness.
