import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface NotFoundProps {
  onNavigateHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigateHome }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "8rem", md: "12rem" },
                fontWeight: 700,
                color: "#CCCCCC",
                lineHeight: 1,
                mb: 2,
                textShadow: "0 0 40px rgba(127, 179, 213, 0.2)",
              }}
            >
              404
            </Typography>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: "1.5rem", md: "2.5rem" },
              }}
            >
              Page Not Found
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#8b9ba8",
                mb: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              The page you're looking for doesn't exist or has been moved. Let's
              get you back on track.
            </Typography>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                startIcon={<HomeIcon />}
                onClick={onNavigateHome}
                sx={{
                  color: "#CCCCCC",
                  borderColor: "#CCCCCC",
                  boxShadow: 0,
                  backgroundColor: "#0D101C80",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 2,
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Go Home
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
