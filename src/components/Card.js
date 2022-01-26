import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------

export default function Card({ src, sx }) {
  return (
    <Box
      component="img"
      src={src}
      sx={{ borderRadius: "60px", border: "3px solid #30cfbe", ...sx }}
    />
  );
}
