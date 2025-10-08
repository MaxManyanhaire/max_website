import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ModuleCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onViewCaseStudy?: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  icon,
  title,
  description,
  onViewCaseStudy,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <Box
        sx={{
          borderRadius: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            bgcolor: "#00C2CB40", // teal-like blue for icon bg
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff", // icon color white
            mb: 2,
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            fontFamily: "'Source Code Pro', monospace",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "#ffffff",
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Source Code Pro', monospace",
            fontSize: "0.85rem",
            color: "#B0C4D8",
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>

        <Button
          onClick={onViewCaseStudy}
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
          View Case Study
        </Button>
      </Box>
    </motion.div>
  );
};
