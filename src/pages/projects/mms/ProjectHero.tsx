import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ProjectHeroProps {
  imageUrl: string;
  tagline: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  imageUrl,
  tagline,
}) => {
  return (
    <Box
      sx={{
        py: 2,
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            component="img"
            src={imageUrl}
            alt="Project mockup"
            sx={{
              width: "100%",
              maxWidth: "900px",
              height: "auto",
              mx: "auto",
              display: "block",
              mb: 2,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#8b9ba8",
              textAlign: "center",
              fontFamily: "Sacramento, cursive",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
            }}
          >
            "{tagline}"
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};
