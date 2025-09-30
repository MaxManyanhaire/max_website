# Maxwell's Portfolio

A modern, animated portfolio built with React, TypeScript, and Framer Motion.

## Features

- 🎨 Centralized theme configuration in `src/config/theme.ts`
- 🧩 Small, reusable components
- 📝 Easy project management via `src/data/projects.ts`
- ✨ Smooth scroll animations
- 🎭 Animated navigation transitions
- 📱 Fully responsive design
- 🎯 Clean, maintainable architecture

## Project Structure

\`\`\`
src/
├── components/
│   ├── about/          # About section components
│   ├── footer/         # Footer component
│   ├── navigation/     # Navigation components
│   ├── projects/       # Project card components
│   ├── sections/       # Main section components
│   └── ui/             # Reusable UI components
├── config/
│   └── theme.ts        # Centralized theme configuration
├── data/
│   ├── about.ts        # About section data
│   └── projects.ts     # Projects data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles
\`\`\`

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Build for production:
\`\`\`bash
npm run build
\`\`\`

## Customization

### Changing Colors

Edit `src/config/theme.ts` to change the entire color scheme:

\`\`\`typescript
export const theme = {
  colors: {
    background: "#3D4451",
    textPrimary: "#E2E8F0",
    // ... more colors
  },
}
\`\`\`

Or edit CSS variables in `src/styles/globals.css`:

\`\`\`css
:root {
  --background: 220 17% 25%;
  --foreground: 210 40% 96%;
  /* ... more variables */
}
\`\`\`

### Adding Projects

Add new projects to `src/data/projects.ts`:

\`\`\`typescript
export const projects: Project[] = [
  {
    id: "my-project",
    title: "My Project",
    subtitle: "Project Subtitle",
    description: "Project description...",
    image: "/my-project-image.jpg",
    imageAlt: "My project",
    layout: "left", // or "right"
  },
  // ... more projects
]
\`\`\`

### Updating About Section

Edit your story in `src/data/about.ts`:

\`\`\`typescript
export const timeline: TimelineItem[] = [
  {
    id: "today",
    title: "TODAY",
    description: "Your story...",
  },
  // ... more timeline items
]
\`\`\`

## Technologies

- React 18
- TypeScript
- Vite
- Framer Motion
- Tailwind CSS
- Lucide Icons

## License

MIT
