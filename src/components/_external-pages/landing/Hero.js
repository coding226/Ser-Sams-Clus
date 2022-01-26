import { motion } from "framer-motion";
import { styled } from "@material-ui/core/styles";
import { Box, Container, Typography, Stack } from "@material-ui/core";
import { varWrapEnter, varFadeInRight } from "../../animate";

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[400],
  background: "url(/images/bg.png)",
  height: '100vh',
  borderBottom: '5px solid #30cfbe',
  backgroundSize: "cover",
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
  },
}));

const ContentStyle = styled((props) => (
  <Stack spacing={5} justifyContent="space-between" {...props} />
))(({ theme }) => ({
  zIndex: 10,
  margin: "auto",
  textAlign: "center",
  position: "relative",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    margin: "unset",
    textAlign: "left",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(25),
  },
}));

const Title = styled((props) => <Typography {...props} />)(() => ({
  fontSize: "10rem",
  lineHeight: 1,
  fontFamily: "ThunderBolt2",
  textFillColor: "transparent",
  backgroundClip: "text !important",
  background: "url(/images/text-pattern.png)",
  fontWeight: 700,
  textAlign: "center",
  textTransform: "uppercase",
  // color: 'black',
  // textShadow:
  //   '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Box
                component="img"
                src="/images/apeintosh.png"
                alt="logo"
                sx={{ mx: "auto", maxWidth: 520, width: 0.5 }}
              />
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
