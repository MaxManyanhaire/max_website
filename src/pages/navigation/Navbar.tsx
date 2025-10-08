import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Container,
} from "@mui/material";
import { colors } from "../../theme";
import { NavButton } from "../../components/NavButton";
import { MenuIcon, CloseIcon } from "../../assets/icons/icons";
import profilePhoto from "../../assets/images/profile-photo.png";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: "work" | "about";
  onSectionChange: (section: "work" | "about") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionChange = (section: "work" | "about") => {
    onSectionChange(section);
    setMobileOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "transparent" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: 2,
            px: { xs: 2, md: 6 },
          }}
        >
          {/* Logo */}
          <Avatar
            src={profilePhoto}
            alt="Maxwell"
            sx={{
              width: 48,
              height: 48,
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              backgroundColor: "#0D101C",
              borderRadius: "28px",
              padding: "6px",
            }}
          >
            <NavButton
              active={activeSection === "work"}
              onClick={() => handleSectionChange("work")}
            >
              work
            </NavButton>
            <NavButton
              active={activeSection === "about"}
              onClick={() => handleSectionChange("about")}
            >
              about
            </NavButton>
          </Box>

          {/* Desktop Right Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            <Box
              component="a"
              href="mailto:maxwell.manyanhaire@gmail.com"
              sx={{
                color: "#CCCCCC",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: colors.accent.main,
                },
              }}
            >
              email <ArrowUpRight />
            </Box>
            <Box
              component="a"
              href="/resume.pdf"
              target="_blank"
              sx={{
                color: "#CCCCCC",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: "0.9rem",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: colors.accent.main,
                },
              }}
            >
              resume <ArrowUpRight />
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: colors.text.primary,
            }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: colors.background.paper,
            width: "70%",
            maxWidth: "300px",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: colors.text.primary, mb: 3 }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem>
              <NavButton
                fullWidth
                active={activeSection === "work"}
                onClick={() => handleSectionChange("work")}
              >
                work
              </NavButton>
            </ListItem>
            <ListItem>
              <NavButton
                fullWidth
                active={activeSection === "about"}
                onClick={() => handleSectionChange("about")}
              >
                about
              </NavButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};
