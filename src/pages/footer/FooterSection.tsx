import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import { FaBehance } from "react-icons/fa";

const MotionBox = motion(Box);

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1E212B",
        color: "#B0B3C0",
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Social Icons */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        sx={{ display: "flex", gap: 2, mb: 4 }}
      >
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          sx={{
            backgroundColor: "#2A2D36",
            color: "#B0B3C0",
            "&:hover": { backgroundColor: "#343741" },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          href="https://behance.net"
          target="_blank"
          sx={{
            backgroundColor: "#2A2D36",
            color: "#B0B3C0",
            "&:hover": { backgroundColor: "#343741" },
          }}
        >
          <FaBehance />
        </IconButton>

        <IconButton
          href="https://github.com/MaxManyanhaire"
          target="_blank"
          sx={{
            backgroundColor: "#2A2D36",
            color: "#B0B3C0",
            "&:hover": { backgroundColor: "#343741" },
          }}
        >
          <InstagramIcon />
        </IconButton>
      </MotionBox>

      {/* Footer Text */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#B0B3C0",
            textAlign: "center",
            fontFamily: "'IBM Plex Mono', monospace",
            fontStyle: "italic",
          }}
        >
          Crafted with love & a salted rim margarita.
        </Typography>
      </MotionBox>
    </Box>
  );
};

export default Footer;
