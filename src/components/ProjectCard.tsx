import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const {
    title,
    subtitle,
    description,
    image,
    imageAlt = "Project image",
    caseStudyLink,
  } = project;

  const handleCaseStudyClick = () => {
    if (caseStudyLink) {
      navigate(caseStudyLink);
    } else {
      console.warn("No case study link provided.");
    }
  };

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
            md: "row",
          },
          gap: { xs: 4, md: 8 },
          alignItems: "center",
          mb: 8,
        }}
      >
        {/* Details */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h4"
            sx={{ color: "#CCCCCC", fontWeight: 600, mb: 1 }}
          >
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: "#CCCCCC", mb: 3 }}>
            {subtitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#CCCCCC",
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
            onClick={handleCaseStudyClick}
            sx={{
              color: "#CCCCCC",
              borderColor: "#CCCCCC",
              boxShadow: 0,
              backgroundColor: "#0D101C80",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "uppercase",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              "&:hover": {
                borderColor: "#CCCCCC",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            Case Study
          </Button>
        </Box>
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
              height: "500px",
              borderRadius: 3,
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};
