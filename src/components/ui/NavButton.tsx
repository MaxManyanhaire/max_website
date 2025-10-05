import React from "react";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { colors } from "../../theme";

interface NavButtonProps extends ButtonProps {
  active?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  active,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      sx={{
        backgroundColor: active ? colors.text.primary : colors.primary.main,
        color: active ? colors.primary.dark : colors.text.primary,
        px: 3,
        py: 1,
        borderRadius: "24px",
        textTransform: "none",
        fontWeight: 500,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          backgroundColor: active ? colors.text.primary : colors.primary.light,
          transform: "translateY(-2px)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          transition: "left 0.5s",
        },
        "&:hover::before": {
          left: "100%",
        },
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};
