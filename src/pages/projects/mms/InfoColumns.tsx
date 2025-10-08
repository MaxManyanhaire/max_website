import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface InfoItem {
  label: string;
  value: string | string[];
}

interface InfoColumnsProps {
  columns: {
    title: string;
    items: InfoItem[];
  }[];
}

export const InfoColumns: React.FC<InfoColumnsProps> = ({ columns }) => {
  return (
    <Grid container spacing={4} sx={{ mb: 6 }}>
      {columns.map((column, colIndex) => (
        <Grid size={{ xs: 12, md: 4 }} key={colIndex}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: colIndex * 0.2, duration: 0.6 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: { xs: "0.9rem", md: "1rem" },
                mb: 2,
              }}
            >
              {column.title}
            </Typography>
            <Box>
              {column.items.map((item, itemIndex) => (
                <Box key={itemIndex} sx={{ mb: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#8b9ba8",
                      fontSize: "0.85rem",
                      mb: 0.5,
                    }}
                  >
                    {item.label}
                  </Typography>
                  {Array.isArray(item.value) ? (
                    item.value.map((val, valIndex) => (
                      <Typography
                        key={valIndex}
                        variant="body2"
                        sx={{
                          color: "#b8c5d0",
                          fontSize: "0.9rem",
                        }}
                      >
                        {val}
                      </Typography>
                    ))
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#b8c5d0",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.value}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};
