import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import { Navbar } from "./pages/navigation/Navbar";
import { HeroSection } from "./pages/home/HeroSection";
import { ProjectsSection } from "./pages/home/ProjectsSection";
import { AboutSection } from "./pages/about/AboutSection";

function App() {
  const [activeSection, setActiveSection] = useState<"work" | "about">("work");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        {activeSection === "work" ? (
          <>
            <HeroSection />
            <ProjectsSection />
          </>
        ) : (
          <AboutSection />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
