import React from "react";
import { Box, Container } from "@mui/material";
import { colors } from "../../theme";
import { ProjectCard } from "../../components/ProjectCard";
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
    </Box>
  );
};
