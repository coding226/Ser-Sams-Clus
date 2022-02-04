import PropTypes from "prop-types";
// material
import { useTheme } from "@material-ui/core/styles";
import { Box, Stack } from "@material-ui/core";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ background: "black", width: 120, height: 120, borderRadius: "50%" }}
    >
      <Box
        component="img"
        src="/images/logo.png"
        alt="logo"
        sx={{ width: 80, height: 80, mt: -2, ...sx }}
      />
    </Stack>
  );
}
