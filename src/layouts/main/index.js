import { Link as ScrollLink } from "react-scroll";
import { useLocation, Outlet } from "react-router-dom";
// material
import {
  Box,
  Link,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@material-ui/core";
// components
import Logo from "../../components/Logo";
//
import MainNavbar from "./MainNavbar";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();

  return (
    <Box sx={{ background: "black" }}>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "#30cfbe",
          mt: 3,
          py: 5,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          textAlign: "center",
        }}
      >
        <Logo />
        <Typography color="white" sx={{ fontSize: "14px", mb: 5 }}>
          From the smooth brains of DegenLabs <br /> All Rights Reserved 2021
        </Typography>
        <Stack direction="row" spacing={3}>
          <Link href="/" target="_blank">
            <Box component="img" src="/images/discord.png" sx={{ width: 50 }} />
          </Link>
          <Link href="/" target="_blank">
            <Box component="img" src="/images/twitter.png" sx={{ width: 50 }} />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
