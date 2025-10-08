import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface DesignProcessProps {
  steps: ProcessStep[];
}

export const DesignProcess: React.FC<DesignProcessProps> = ({ steps }) => {
  return (
    <Box sx={{ mb: 8 }}>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "#00C2CB40",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {step.icon || (
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#ffffff",
                        fontWeight: 400,
                      }}
                    >
                      {step.number}
                    </Typography>
                  )}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1rem",
                    mb: 1,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#8b9ba8",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
