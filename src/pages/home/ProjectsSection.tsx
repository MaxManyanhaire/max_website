import React from "react";
import { Box, Container } from "@mui/material";
import { colors } from "../../theme";
import { ProjectCard } from "../../components/ui/ProjectCard";
import { projects } from "../../data/project-data";

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
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            layout={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </Container>
    </Box>
  );
};
