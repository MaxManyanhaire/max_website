import type React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ProjectNavigationProps {
  nextProject?: {
    title: string;
    slug: string;
  };
  previousProject?: {
    title: string;
    slug: string;
  };
  onNavigate?: (slug: string) => void;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  nextProject,
  previousProject,
  onNavigate,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#1a2530",
        borderTop: "1px solid #3a4a55",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* Previous Project */}
            {previousProject ? (
              <Box
                sx={{
                  flex: 1,
                  width: { xs: "100%", md: "auto" },
                }}
              >
                <Button
                  startIcon={<ArrowBackIcon />}
                  onClick={() => onNavigate?.(previousProject.slug)}
                  sx={{
                    color: "#8b9ba8",
                    textTransform: "none",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    p: 3,
                    borderRadius: 2,
                    width: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#2a3a45",
                      color: "#7fb3d5",
                      transform: "translateX(-4px)",
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#8b9ba8",
                      fontSize: "0.75rem",
                      mb: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Previous Project
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "inherit",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {previousProject.title}
                  </Typography>
                </Button>
              </Box>
            ) : (
              <Box sx={{ flex: 1 }} />
            )}

            {/* Center Divider */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: "1px",
                height: "60px",
                bgcolor: "#3a4a55",
              }}
            />

            {/* Next Project */}
            {nextProject ? (
              <Box
                sx={{
                  flex: 1,
                  width: { xs: "100%", md: "auto" },
                }}
              >
                <Button
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => onNavigate?.(nextProject.slug)}
                  sx={{
                    color: "#8b9ba8",
                    textTransform: "none",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    p: 3,
                    borderRadius: 2,
                    width: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#2a3a45",
                      color: "#7fb3d5",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#8b9ba8",
                      fontSize: "0.75rem",
                      mb: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Next Project
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "inherit",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {nextProject.title}
                  </Typography>
                </Button>
              </Box>
            ) : (
              <Box sx={{ flex: 1 }} />
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
