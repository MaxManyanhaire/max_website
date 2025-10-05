import React from "react";
import { Box } from "@mui/material";
import { colors } from "../../theme";
import { scrollBounce } from "../../utils/animations";

export const ScrollMouse: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        animation: `${scrollBounce} 2s ease-in-out infinite`,
        cursor: "pointer",
      }}
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
    >
      <Box
        sx={{
          width: "28px",
          height: "45px",
          border: `2px solid ${colors.text.secondary}`,
          borderRadius: "20px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          paddingTop: "8px",
        }}
      >
        <Box
          sx={{
            width: "4px",
            height: "8px",
            backgroundColor: colors.text.secondary,
            borderRadius: "2px",
            animation: `${scrollBounce} 1.5s ease-in-out infinite`,
          }}
        />
      </Box>
      <Box
        sx={{
          width: "2px",
          height: "12px",
          backgroundColor: colors.text.secondary,
          borderRadius: "1px",
        }}
      />
      <Box
        sx={{
          width: "0",
          height: "0",
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: `6px solid ${colors.text.secondary}`,
        }}
      />
    </Box>
  );
};
