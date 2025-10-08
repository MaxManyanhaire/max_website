import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Module {
  name: string;
  position: { x: number; y: number };
}

interface ModuleDiagramProps {
  centerModule: string;
  modules: Module[];
}

export const ModuleDiagram: React.FC<ModuleDiagramProps> = ({
  centerModule,
  modules,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "400px", md: "500px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 8,
      }}
    >
      {/* Center Module */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            width: { xs: 140, md: 180 },
            height: { xs: 140, md: 180 },
            borderRadius: "50%",
            bgcolor: "#1a2530",
            border: "3px solid #4a5f6f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              px: 2,
            }}
          >
            {centerModule}
          </Typography>
        </Box>
      </motion.div>

      {/* Surrounding Modules */}
      {modules.map((module, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          style={{
            position: "absolute",
            left: `${module.position.x}%`,
            top: `${module.position.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              width: { xs: 80, md: 100 },
              height: { xs: 80, md: 100 },
              borderRadius: "50%",
              bgcolor: "#2a3a45",
              border: "2px solid #4a5f6f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#3a4a55",
                transform: "scale(1.1)",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#b8c5d0",
                fontWeight: 500,
                textAlign: "center",
                fontSize: { xs: "0.75rem", md: "0.85rem" },
                textTransform: "uppercase",
                px: 1,
              }}
            >
              {module.name}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};
