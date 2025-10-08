import { Box, Container, Grid } from "@mui/material";
import { ProjectHero } from "./ProjectHero";
import { SectionHeader } from "./SectionHeader";
import { TextSection } from "./TextSection";
import { InfoColumns } from "./InfoColumns";
import { DesignProcess } from "./DesignProcess";
import { ModuleCard } from "./ModuleCard";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StreamIcon from "@mui/icons-material/Stream";
import GroupIcon from "@mui/icons-material/Group";
import ContactsIcon from "@mui/icons-material/Contacts";
import { infoColumns } from "./data/infocolumns";
import { designSteps } from "./data/designsteps";
import pixelPixelDesktop from "../../../assets/images/pixel-pilot-desktop-app.svg";
import { motion } from "framer-motion";
import moduleDiagram from "../../../assets/images/module-diagram.svg";
import { ProjectNavigation } from "./ui/ProjectNavigation";
import { ScrollToTop } from "./ui/ScrollToTop";

export const ProjectView: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <ProjectHero
        imageUrl={pixelPixelDesktop}
        tagline="A unified platform to simplify funeral streaming operations."
      />

      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* Process Highlights */}
        <SectionHeader title="Process Highlights" />
        <TextSection
          title=""
          content="Muzungu Funeral Streaming Management System"
          highlightWords={[]}
        />

        {/* Challenge */}
        <TextSection
          title="Challenge"
          content="Mukasa's funeral streaming relied on scattered tools and manual processes. Bookings were error-prone, venue details disorganized, crew coordination chaotic, and memorial video time to deliver. The lack of a centralized system led to inefficiencies and inefficiencies, highlighting the need for a streamlined solution."
          highlightWords={[
            "scattered tools",
            "manual processes",
            "error-prone",
            "disorganized",
            "chaotic",
          ]}
        />

        {/* Opportunity */}
        <TextSection
          title="Opportunity"
          content="This challenge presented an opportunity to design a unified platform that would streamline operations, centralize venue and crew information, automate stream management, and make it faster to deliver meaningful memorial websites. The goal was to create an efficient tool while providing families with a unified, efficient digital process—helping study serve families faster and with greater care."
          highlightWords={[
            "unified platform",
            "streamline operations",
            "automate",
            "efficient",
          ]}
        />

        {/* Info Columns */}
        <InfoColumns columns={infoColumns} />

        {/* Design Process */}
        <SectionHeader title="My Design Process" />
        <DesignProcess steps={designSteps} />

        {/* Project Outcome */}
        <SectionHeader title="Project Outcome" />
        <TextSection
          title=""
          content="The Funeral Management System improved coordination across teams, reduced booking errors, and accelerated memorial content delivery. It transformed scattered manual workflows into a unified, efficient digital process—helping study serve families faster and with greater care."
          highlightWords={[
            "improved coordination",
            "reduced booking errors",
            "accelerated",
            "unified, efficient",
          ]}
        />

        {/* Module Diagram */}
        <SectionHeader title="Muzungu Core 4 Modules" />
        <TextSection
          title=""
          content="The Muzungu Management System is built around seven modules that work together to simplify the entire streaming process. This core study focuses on the four primary modules—Booking, Streams, Crew, and Contacts—that form the backbone of modules like Contacts, Gear, and CRM enhance coordination behind the scenes."
          highlightWords={[]}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 8,
              py: 4,
            }}
          >
            <Box
              component="img"
              src={moduleDiagram}
              alt="Muzungu Core Modules Architecture"
              sx={{
                width: "100%",
                maxWidth: "700px",
                height: "auto",
                filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))",
              }}
            />
          </Box>
        </motion.div>

        {/* Explore Modules */}
        <SectionHeader title="Explore the Modules" />
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <ModuleCard
              icon={<BookmarkIcon />}
              title="Booking Management"
              description="Streamlined booking process from inquiry to confirmation, managing all details."
              onViewCaseStudy={() => console.log("View Booking")}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <ModuleCard
              icon={<StreamIcon />}
              title="Streams Management"
              description="Efficiently manage live streaming setup, monitoring, and recording for services."
              onViewCaseStudy={() => console.log("View Streams")}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <ModuleCard
              icon={<GroupIcon />}
              title="Crew Management"
              description="Coordinate team assignments, schedules, and communication for seamless operations."
              onViewCaseStudy={() => console.log("View Crew")}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <ModuleCard
              icon={<ContactsIcon />}
              title="Contacts Management"
              description="Centralized database for managing client information and communication history."
              onViewCaseStudy={() => console.log("View Contacts")}
            />
          </Grid>
        </Grid>
      </Container>
      {/* Project Navigation */}
      {/* <ProjectNavigation
        nextProject={nextProject}
        previousProject={previousProject}
        onNavigate={onNavigate}
      /> */}

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </Box>
  );
};
