import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import type { Theme } from "@mui/material";
import type { SxProps } from "@mui/material";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?:
    | "fadeInUp"
    | "fadeIn"
    | "scaleIn"
    | "slideInLeft"
    | "slideInRight";
  delay?: number;
  duration?: number;
  sx?: SxProps<Theme>;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  sx = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
    };

    switch (animation) {
      case "fadeInUp":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
        };
      case "fadeIn":
        return baseStyles;
      case "scaleIn":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(0.9)",
        };
      case "slideInLeft":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(-30px)",
        };
      case "slideInRight":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(30px)",
        };
      default:
        return baseStyles;
    }
  };

  return (
    <Box ref={sectionRef} sx={{ ...getAnimationStyles(), ...sx }}>
      {children}
    </Box>
  );
};
