import React from "react";
import { Box, Container } from "@mui/material";
import { colors } from "../../theme";
import { ProjectCard } from "../../components/ui/ProjectCard";

// Easy to update project data - just add new projects here
export const projectsData: ProjectData[] = [
  {
    id: "1",
    title: "Pixel Pilot Mobile App",
    subtitle: "Muzukuru Funeral Streaming",
    description:
      "Pixel Pilot Is A Crew Companion App That Streamlines Funeral And Memorial Live-Streams. It Brings Camera Setups, Graphics, Roles, And Checklists Into One Place, Making Every Production Smooth And Coordinated.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2013%20%26%2014%20-%208-xDwqWTYd0zc6y4jVB3tYDY2AGdkgsN.png",
    caseStudyLink: "#",
  },
  // Add more projects here following the same structure
];

export const ProjectsSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: colors.background.gradient,
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            layout={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </Container>
    </Box>
  );
};
