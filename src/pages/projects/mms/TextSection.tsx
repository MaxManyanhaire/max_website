import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface TextSectionProps {
  title: string;
  content: string;
  highlightWords?: string[];
}

export const TextSection: React.FC<TextSectionProps> = ({
  title,
  content,
  highlightWords = [],
}) => {
  const renderContent = () => {
    if (highlightWords.length === 0) return content;

    let result = content;
    highlightWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      result = result.replace(regex, "<strong>$1</strong>");
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontSize: { xs: "1rem", md: "1.2rem" },
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#b8c5d0",
            lineHeight: 1.8,
            fontSize: { xs: "0.9rem", md: "1rem" },
            "& strong": {
              color: "#fff",
              fontWeight: 600,
            },
          }}
        >
          {renderContent()}
        </Typography>
      </Box>
    </motion.div>
  );
};
