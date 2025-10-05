import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { colors } from "../../theme";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
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
      <Container maxWidth="lg">
        {/* Bento Grid Images */}
        <AnimatedSection animation="fadeInUp">
          <Grid container spacing={2} sx={{ mb: 8 }}>
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                component="img"
                src={bentoImages[0]}
                alt="About 1"
                sx={{
                  width: "100%",
                  height: { xs: "200px", md: "400px" },
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                component="img"
                src={bentoImages[1]}
                alt="About 2"
                sx={{
                  width: "100%",
                  height: { xs: "200px", md: "400px" },
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                component="img"
                src={bentoImages[2]}
                alt="About 3"
                sx={{
                  width: "100%",
                  height: { xs: "200px", md: "300px" },
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                component="img"
                src={bentoImages[3]}
                alt="About 4"
                sx={{
                  width: "100%",
                  height: { xs: "200px", md: "300px" },
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </Grid>
          </Grid>
        </AnimatedSection>

        {/* About Title */}
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <Typography
            variant="h2"
            sx={{
              color: colors.text.primary,
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
                    color: colors.text.muted,
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    mb: 2,
                    display: "block",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.text.secondary,
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
                color: colors.text.primary,
                mb: 2,
                fontWeight: 600,
              }}
            >
              Say Hi
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                mb: 2,
              }}
            >
              If You'd Like To Connect, Collaborate, Or Just Say Hi:
            </Typography>
            <Typography
              component="a"
              href="mailto:maxwell.manyanhaire@gmail.com"
              sx={{
                color: colors.text.primary,
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
