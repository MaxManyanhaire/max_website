import React from "react";
import { IconButton } from "@mui/material";
import { colors } from "../../theme";
import type { IconButtonProps } from "@mui/material";

export const SocialIcon: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <IconButton
      {...props}
      sx={{
        backgroundColor: colors.primary.main,
        color: colors.text.primary,
        width: 44,
        height: 44,
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: colors.accent.main,
          transform: "translateY(-4px) scale(1.1)",
        },
        ...props.sx,
      }}
    >
      {children}
    </IconButton>
  );
};
