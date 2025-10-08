import { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import { Navbar } from "./pages/navigation/Navbar";
import { HeroSection } from "./pages/home/HeroSection";
import { ProjectsSection } from "./pages/home/ProjectsSection";
import { AboutSection } from "./pages/about/AboutSection";
import Footer from "./pages/footer/FooterSection";
import CustomCursor from "./components/ui/CustomCursor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ProjectView } from "./pages/projects/mms/ProjectView";
import { NotFound } from "./components/ui/404";

// Layout for pages with Navbar (children only)
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box component="main" sx={{ flex: 1 }}>
    {children}
  </Box>
);

// Layout for pages without Navbar (children only)
const BlankLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box component="main" sx={{ flex: 1 }}>
    {children}
  </Box>
);

const MainContent = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: "work" | "about";
  setActiveSection: any;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Show Navbar only on home/about
  const showNavbar = location.pathname === "/";

  return (
    <>
      {showNavbar && (
        <Navbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              {activeSection === "work" ? (
                <>
                  <HeroSection />
                  <ProjectsSection />
                </>
              ) : (
                <AboutSection />
              )}
            </MainLayout>
          }
        />

        <Route
          path="/projects/1"
          element={
            <BlankLayout>
              <ProjectView />
            </BlankLayout>
          }
        />

        <Route
          path="*"
          element={
            <BlankLayout>
              <NotFound onNavigateHome={() => navigate("/")} />
            </BlankLayout>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState<"work" | "about">("work");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomCursor />
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default,
          }}
        >
          {/* Main Content (routes + conditional Navbar) */}
          <MainContent
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* Footer always visible */}
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
