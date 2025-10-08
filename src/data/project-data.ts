import type { ProjectData } from "../components/ProjectCard";
import pixelPilotMobileApp from "../assets/images/pixel-pilot-mobile-app.svg";
import pixelPilotDesktopApp from "../assets/images/pixel-pilot-desktop-app.svg";

export const projects: ProjectData[] = [
  {
    id: "1",
    title: "Pixel Pilot Desktop App",
    subtitle: "Muzukuru Funeral Streaming",
    description:
      "Pixel Pilot Is A Crew Companion App That Streamlines Funeral And Memorial Live-Streams. It Brings Camera Setups, Graphics, Roles, And Checklists Into One Place, Making Every Production Smooth And Coordinated.",
    image: pixelPilotDesktopApp,
    caseStudyLink: "/projects/1", // ✅ internal link
  },
  {
    id: "2",
    title: "Pixel Pilot Mobile App",
    subtitle: "Muzukuru Funeral Streaming",
    description:
      "Pixel Pilot Is A Crew Companion App That Streamlines Funeral And Memorial Live-Streams. It Brings Camera Setups, Graphics, Roles, And Checklists Into One Place, Making Every Production Smooth And Coordinated.",
    image: pixelPilotMobileApp,
    caseStudyLink: "/projects/2", // ✅ internal link
  },
];
