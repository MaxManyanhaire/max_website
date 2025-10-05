import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import { Navbar } from "./pages/navigation/Navbar";
import { HeroSection } from "./pages/home/HeroSection";
import { ProjectsSection } from "./pages/home/ProjectsSection";
import { AboutSection } from "./pages/about/AboutSection";
import Footer from "./pages/footer/FooterSection";

function App() {
  const [activeSection, setActiveSection] = useState<"work" | "about">("work");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // ensures footer sticks to bottom
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* Navbar */}
        <Navbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Main content */}
        <Box component="main" sx={{ flex: 1 }}>
          {activeSection === "work" ? (
            <>
              <HeroSection />
              <ProjectsSection />
            </>
          ) : (
            <AboutSection />
          )}
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
