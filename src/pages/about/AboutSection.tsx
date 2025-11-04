import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../theme";
import { AnimatedSection } from "../../components/AnimatedSection";
import { timelineData } from "../../data/timeline-data";
import { bentoImages } from "../../data/about-images";

export const AboutSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: colors.background.gradient,
        py: 12,
      }}
    >
      <Container maxWidth="md">
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          {" "}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
              gridTemplateRows: { md: "1fr 1fr" },
              gap: 2,
              maxWidth: "600px",
              height: "400px",
              mb: 8,
            }}
          >
            {/* Left Tall Image (spans two rows) */}
            <Box
              component="img"
              src={bentoImages[0]}
              alt="Left Tall"
              sx={{
                width: "100%",
                height: { xs: "300px", md: "100%" },
                objectFit: "cover",
                borderRadius: 3,
                gridRow: { md: "1 / span 2" },
                gridColumn: "1 / 2",
              }}
            />

            {/* Top Right Image */}
            <Box
              component="img"
              src={bentoImages[1]}
              alt="Top Right"
              sx={{
                width: "100%",
                height: { xs: "200px", md: "200px" },
                objectFit: "cover",
                borderRadius: 3,
                gridRow: "1 / 2",
                gridColumn: { md: "2 / 3" },
              }}
            />

            {/* Bottom Right Small Image */}
            <Box
              component="img"
              src={bentoImages[2]}
              alt="Bottom Right"
              sx={{
                width: "100%",
                height: { xs: "200px", md: "200px" },
                objectFit: "cover",
                borderRadius: 3,
                gridRow: "2 / 3",
                gridColumn: { md: "2 / 3" },
              }}
            />
          </Box>
        </AnimatedSection>

        {/* About Title */}
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <Typography
            variant="h2"
            sx={{
              color: "#CCCCCC",
              mb: 6,
              fontWeight: 600,
            }}
          >
            About
          </Typography>
        </AnimatedSection>

        {/* Timeline */}
        <Box sx={{ mb: 12 }}>
          {timelineData.map((item, index) => (
            <AnimatedSection
              key={item.title}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#7C818D",
                    fontSize: "22px",
                    letterSpacing: "0.1px",
                    display: "block",
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#CCCCCC",
                    lineHeight: 1.8,
                    maxWidth: "700px",
                  }}
                >
                  {item.content}
                </Typography>
              </Box>
            </AnimatedSection>
          ))}
        </Box>

        {/* Say Hi Section */}
        <AnimatedSection animation="fadeInUp">
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                color: "#CCCCCC",
                mb: 2,
                fontWeight: 600,
              }}
            >
              Say Hi
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#C4C9E3",
                mb: 2,
              }}
            >
              If You'd Like To Connect, Collaborate, Or Just Say Hi:
            </Typography>
            <Typography
              component="a"
              href="mailto:maxwell.manyanhaire@gmail.com"
              sx={{
                color: "#C4C9E3",
                textDecoration: "none",
                fontSize: "1.1rem",
                "&:hover": {
                  color: colors.accent.main,
                },
              }}
            >
              maxwell.manyanhaire@gmail.com
            </Typography>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};
