import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { colors } from "../../theme";
import { ScrollMouse } from "../../components/ScrollMouse";
import { AnimatedSection } from "../../components/AnimatedSection";

export const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: colors.background.gradient,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        pt: 10,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Gradient Line */}
        {/* <Box sx={{ mb: 8 }}>
          <GradientLine />
        </Box> */}

        {/* Hero Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 4,
          }}
        >
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <Typography
              variant="body1"
              sx={{
                color: "#CCCCCC",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
              }}
            >
              Hi, I'm Maxwell
            </Typography>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <Typography
              variant="h1"
              sx={{
                color: "#C4C9E3",
                maxWidth: "800px",
                fontSize: { xs: "2rem", md: "3.5rem" },
                lineHeight: 1.3,
                fontFamily: '"Mulish", sans-serif',
                fontWeight: 800,
              }}
            >
              Product Designer
              <br />
              Turning Complex Ideas
              <br />
              Into Simple, Meaningful
              <br />
              Products.
            </Typography>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.8}>
            <Box sx={{ mt: 6 }}>
              <ScrollMouse />
            </Box>
          </AnimatedSection>
        </Box>
      </Container>
    </Box>
  );
};
