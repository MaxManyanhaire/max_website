import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { theme } from "../../theme";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  image,
  imageAlt = "Project image",
  delay = 0,
}) => {
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
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 8 },
          alignItems: "center",
          mb: 8,
        }}
      >
        {/* Project Image */}
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
              height: "auto",
              borderRadius: 3,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Box>

        {/* Project Details */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              mb: 3,
              fontWeight: 400,
            }}
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
            variant="outlined"
            sx={{
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.secondary,
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
