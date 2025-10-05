import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { theme } from "../../theme";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  caseStudyLink?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  delay?: number;
  layout?: "left" | "right";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layout = "left",
  delay = 0,
}) => {
  const {
    title,
    subtitle,
    description,
    image,
    imageAlt = "Project image",
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: layout === "left" ? "row" : "row-reverse",
          },
          gap: { xs: 4, md: 8 },
          alignItems: "center",
          mb: 8,
        }}
      >
        {/* Image */}
        <Box
          sx={{
            flex: { xs: "1", md: "0 0 45%" },
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={image}
            alt={imageAlt}
            sx={{
              width: "100%",
              height: "460px",
              borderRadius: 3,
            }}
          />
        </Box>

        {/* Details */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h4"
            sx={{ color: theme.palette.text.primary, fontWeight: 600, mb: 1 }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.text.secondary, mb: 3 }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              mb: 4,
              maxWidth: "600px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.secondary,
              boxShadow: 0,
              backgroundColor: "#0D101C80",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "uppercase",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              "&:hover": {
                borderColor: theme.palette.text.primary,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            Case Study
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};
