import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@mui/material/styles";

type CursorType = "default" | "pointer" | "text" | "image";

const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

const CustomCursor: React.FC = () => {
  const theme = useTheme();

  const [enabled, setEnabled] = useState<boolean>(!isTouchDevice());

  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [isActive, setIsActive] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 36 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 36 });

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(pointer: coarse)");
      const handler = (e: MediaQueryListEvent) => {
        setEnabled(!e.matches);
      };
      try {
        mq.addEventListener?.("change", handler);
      } catch {
        mq.addListener?.(handler);
      }
      setEnabled(!mq.matches);
      return () => {
        mq.removeEventListener?.("change", handler);
      };
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) {
        setCursorType("default");
        setIsActive(false);
        return;
      }

      const el = target.closest?.(
        "[data-cursor], a, button, [role='button'], input, textarea"
      );

      if (!el) {
        setCursorType("default");
        setIsActive(false);
        return;
      }

      const data = (el as HTMLElement).getAttribute?.("data-cursor");
      if (data === "pointer") {
        setCursorType("pointer");
        setIsActive(true);
        return;
      }
      if (data === "text") {
        setCursorType("text");
        setIsActive(true);
        return;
      }
      if (data === "image") {
        setCursorType("image");
        setIsActive(true);
        return;
      }

      const tag = (el as HTMLElement).tagName;
      if (
        tag === "A" ||
        tag === "BUTTON" ||
        (el as HTMLElement).getAttribute?.("role") === "button"
      ) {
        setCursorType("pointer");
        setIsActive(true);
        return;
      }
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        (el as HTMLElement).getAttribute?.("role") === "textbox"
      ) {
        setCursorType("text");
        setIsActive(true);
        return;
      }

      setCursorType("default");
      setIsActive(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onHover);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onHover);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const baseSize = 18;
  const pointerSize = 48;
  const textSize = 14;
  const imageSize = 56;

  const accent = theme.palette.primary.main;
  const fg =
    theme.palette.mode === "dark"
      ? theme.palette.text.primary
      : theme.palette.text.primary;
  const ringColor = fg;
  const fillColor = accent;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        pointerEvents: "none",
        zIndex: 9999,
        width: pointerSize,
        height: pointerSize,
        translateX: `-${pointerSize / 2}px`,
        translateY: `-${pointerSize / 2}px`,

        willChange: "transform",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 36 }}
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{
          display: "block",
        }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke={ringColor}
          strokeWidth={2}
          style={{
            transformOrigin: "50% 50%",
          }}
          animate={{
            scale:
              cursorType === "pointer"
                ? 1.15
                : cursorType === "image"
                ? 1.2
                : 1,
            opacity: cursorType === "default" ? 0.9 : 0.95,
          }}
          transition={{ type: "spring", stiffness: 600, damping: 40 }}
        />

        <motion.circle
          cx="50"
          cy="50"
          r="10"
          fill={fillColor}
          initial={{ scale: 0 }}
          animate={{
            scale: cursorType === "pointer" ? 1 : 0,
            opacity: cursorType === "pointer" ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 600, damping: 40 }}
        />

        <motion.rect
          x="48.5"
          y="30"
          width="3"
          height="40"
          rx="1"
          fill={fillColor}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: cursorType === "text" ? 1 : 0,
            opacity: cursorType === "text" ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 700, damping: 40 }}
        />

        <motion.path
          d="M40 35 L60 50 L40 65 Z"
          fill={fillColor}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: cursorType === "image" ? 1 : 0,
            opacity: cursorType === "image" ? 1 : 0,
            rotate: cursorType === "image" ? 0 : 0,
          }}
          transition={{ type: "spring", stiffness: 700, damping: 40 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default CustomCursor;
