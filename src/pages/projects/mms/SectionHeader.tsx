import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            mb: subtitle ? 1 : 0,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body2"
            sx={{
              color: "#8b9ba8",
              fontSize: "0.9rem",
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
};
