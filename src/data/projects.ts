/**
 * Projects data configuration
 * Add new projects here to automatically display them in the portfolio
 */

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  layout: "left" | "right"
}

export const projects: Project[] = [
  {
    id: "pixel-pilot-1",
    title: "Pixel Pilot Mobile App",
    subtitle: "Muzukuru Funeral Streaming",
    description:
      "Pixel Pilot Is A Crew Companion App That Streamlines Funeral And Memorial Live-Streams. It Brings Camera Setups, Graphics, Roles, And Checklists Into One Place, Making Every Production Smooth And Coordinated.",
    image: "/mobile-app-funeral-streaming-interface.jpg",
    imageAlt: "Pixel Pilot mobile app interface",
    layout: "left",
  },
  {
    id: "pixel-pilot-2",
    title: "Pixel Pilot Mobile App",
    subtitle: "Muzukuru Funeral Streaming",
    description:
      "Pixel Pilot Is A Crew Companion App That Streamlines Funeral And Memorial Live-Streams. It Brings Camera Setups, Graphics, Roles, And Checklists Into One Place, Making Every Production Smooth And Coordinated.",
    image: "/desktop-app-funeral-streaming-dashboard.jpg",
    imageAlt: "Pixel Pilot desktop interface",
    layout: "right",
  },
  {
    id: "pixel-pilot-3",
    title: "Pixel Pilot Mobile App",
    subtitle: "Muzukuru Funeral Streaming",
    description:
      "Pixel Pilot Is A Crew Companion App That Streamlines Funeral And Memorial Live-Streams. It Brings Camera Setups, Graphics, Roles, And Checklists Into One Place, Making Every Production Smooth And Coordinated.",
    image: "/mobile-app-funeral-streaming-login.jpg",
    imageAlt: "Pixel Pilot mobile login screen",
    layout: "left",
  },
]
