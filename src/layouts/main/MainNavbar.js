import { useState, useRef, useEffect } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
// material
import { alpha, styled } from "@material-ui/core/styles";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  Stack,
  Hidden,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  MenuList,
  MenuItem,
  Drawer,
  IconButton,
  Typography,
  Link,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
// components
import Logo from "../../components/Logo";
import { Link as ScrollLink } from "react-scroll";

// ----------------------------------------------------------------------

const APP_BAR_DESKTOP = 120;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_DESKTOP,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  // background: "transparent",
  zIndex: 1500,
  backdropFilter: "blur(6px)",
  // WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha("#1d0c47", 0.4),
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent", zIndex: 1500 }}>
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>

          <Box sx={{ flexGrow: 1 }} />
          <div>
            <Button
              variant="contained"
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              sx={{ backgroundColor: "#30cfbe", color: "#150d29" }}
            >
              Connect Wallet
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper sx={{ background: "#150d29" }}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                        sx={{ width: 1 }}
                      >
                        <MenuItem onClick={handleClose}>Phantom</MenuItem>
                        <MenuItem onClick={handleClose}>Sollet</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <Box sx={{ ml: 3 }}>
            <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
              {drawerOpen ? (
                <CloseIcon color="white" />
              ) : (
                <MenuIcon color="white" />
              )}
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{ sx: { width: "100%", flexDirection: "row" } }}
            >
              <Box flexGrow={1} sx={{ background: "#1d0c47" }} />
              <Box flexGrow={1} sx={{ background: "#30cfbe" }} />
              <Box sx={{ background: "#150d29", px: 30 }}>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                  sx={{ mt: 30, textAlign: "center", color: "white" }}
                >
                  <ScrollLink
                    to="about"
                    spy
                    smooth
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "white", cursor: "pointer" }}
                    >
                      About
                    </Typography>
                  </ScrollLink>
                  <ScrollLink
                    to="roadmap"
                    spy
                    smooth
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "white", cursor: "pointer" }}
                    >
                      Utility & Roadmap
                    </Typography>
                  </ScrollLink>
                  <ScrollLink
                    to="rarity"
                    spy
                    smooth
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "white", cursor: "pointer" }}
                    >
                      Rarity
                    </Typography>
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    spy
                    smooth
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "white", cursor: "pointer" }}
                    >
                      Academy Traits
                    </Typography>
                  </ScrollLink>
                  <ScrollLink
                    to="faq"
                    spy
                    smooth
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "white", cursor: "pointer" }}
                    >
                      Faq
                    </Typography>
                  </ScrollLink>
                  <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
                    <Link href="/" target="_blank">
                      <Box
                        component="img"
                        src="/images/discord.png"
                        sx={{ width: 50 }}
                      />
                    </Link>
                    <Link href="/" target="_blank">
                      <Box
                        component="img"
                        src="/images/twitter.png"
                        sx={{ width: 50 }}
                      />
                    </Link>
                  </Stack>
                  <Link href="/terms" sx={{color: 'white', fontStyle: 'italic', fontSize: '16px', cursor: 'pointer'}}>Terms & Conditions</Link>
                </Stack>
              </Box>
            </Drawer>
          </Box>
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
