import React from "react";
import { Box } from "@mui/material";
import { colors } from "../../theme";
import { gradientShift } from "../../utils/animations";

export const GradientLine: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "2px",
        background: colors.background.heroGradient,
        backgroundSize: "200% 100%",
        animation: `${gradientShift} 3s ease infinite`,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-4px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "10px",
          background:
            "radial-gradient(ellipse at center, rgba(226, 232, 240, 0.3) 0%, transparent 70%)",
          filter: "blur(8px)",
        },
      }}
    />
  );
};
