import { useState } from "react";
import { Navigation } from "./components/navigation/NavigationBar";

export type Section = "work" | "about";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("work");

  return (
    <div
      className="min-h-screen bg-cover "
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portfolio-bg-6YNeSiuhlBJS2Xv3g74NHcIC7aLPBf.svg')",
      }}
    >
      <div className="relative z-10">
        <Navigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* {activeSection === "work" ? (
          <>
            <HeroSection />
            <ProjectsSection />
          </>
        ) : (
          <AboutSection />
        )}

        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
