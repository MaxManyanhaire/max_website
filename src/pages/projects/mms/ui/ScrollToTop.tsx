import React, { useState, useEffect } from "react";
import { Box, Zoom } from "@mui/material";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={isVisible}>
      <Box
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          zIndex: 1000,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          userSelect: "none",
        }}
      >
        <Box
          sx={{
            fontSize: "2rem",
            animation: "bounce 1.5s infinite",
          }}
        >
          ☝️
        </Box>
        <Box
          sx={{
            fontSize: "0.8rem",
            color: "#ffffff",

            px: 1.5,
            py: 0.5,
            borderRadius: "12px",

            fontWeight: 500,
            letterSpacing: "0.03em",
          }}
        >
          Scroll to top
        </Box>
      </Box>
    </Zoom>
  );
};
