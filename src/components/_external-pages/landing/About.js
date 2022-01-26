import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

// material
import { styled } from "@material-ui/core/styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";

import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Stack,
  Divider,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from "@material-ui/core";
//
import { varFadeInUp, MotionInView, varFadeInDown } from "../../animate";
import Card from "../../Card";

SwiperCore.use([Autoplay]);

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15),
  },
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  marginBottom: theme.spacing(3),
  backgroundColor: "rgb(46, 25, 100)",
  transition: "all 0.5s",

  borderRadius: 25,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: "1.5rem", color: "white" }} />}
    {...props}
  />
))(({ theme }) => ({
  padding: "1% 3%",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  // flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function LandingMinimalHelps() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <RootStyle>
      <Box sx={{ px: { xs: 3, md: 24 } }}>
        <Box sx={{ mb: { xs: 10, md: 10 } }} id="about">
          <MotionInView variants={varFadeInUp}>
            <Stack
              direction="row"
              alignItems="flex-end"
              sx={{
                background: "url('/images/bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "75px",
                backgroundPosition: "50%",
              }}
            >
              <Box
                component="img"
                src="/images/welcome.png"
                sx={{ transform: "translateX(-7.5%)" }}
              />
              <Box sx={{ py: 5, pr: 8 }}>
                <Typography variant="h1">WELCOME!</Typography>
                <Typography variant="body1" sx={{ mt: 5 }}>
                  Our mission here at the academy is simple: Take 10,000 of the
                  smoothest brained apes, put them all in one location and let
                  the mayhem ensue.
                </Typography>
                <Typography variant="body1" sx={{ mt: 3 }}>
                  The academy was founded on the principles of friendship
                  making, crayon eating and absolute, unregulated, deplorable,
                  degenerate behaviour. Welcome fellow apes, to the Degenerate
                  Ape Academy.
                </Typography>
                <Typography variant="h3" sx={{ mt: 3 }}>
                  ENROLLMENT FEE: 6◎
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Maximum Toly number: 6,969
                </Typography>
              </Box>
            </Stack>
          </MotionInView>
        </Box>

        {/* <Swiper
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {[...Array(13)].map((item, index) => (
            <SwiperSlide>
              <Card src={`/images/apes/ape${index + 1}.jpg`} />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <Box sx={{ mb: { xs: 10, md: 10 }, mt: 10 }} id="roadmap">
          <MotionInView variants={varFadeInUp}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{
                background: "url('/images/bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "75px",
                backgroundPosition: "50%",
                padding: "2% 4%",
                position: "relative",
              }}
            >
              <Box sx={{ py: 5, pr: 8, width: 0.8 }}>
                <Typography variant="h1">UTILITY & ROADMAP</Typography>
                <Typography variant="body1" sx={{ mt: 5 }}>
                  Minting a Degenerate Ape acts as your enrollment to the most
                  prestigious Academy apes have ever built. While you’re a
                  student, you will have access to all that the academy has to
                  offer currently, and in the future.
                </Typography>
                <Typography variant="body1" sx={{ mt: 3 }}>
                  Access to the academy means more than just bragging rights to
                  those uneducated, less sophisticated apes. We have made it our
                  goal to make sure utility is always offered to all our
                  students. This utility will be modest at first but will expand
                  over time as we continue to build.
                </Typography>
                <Typography variant="body1" sx={{ mt: 3 }}>
                  We are building the academy not just for you, but also with
                  you. Click below to see our roadmap for the near and longer
                  term future.
                </Typography>
                <Typography variant="body1" sx={{ mt: 3 }}>
                  We hope you have your crayons ready.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    background: "#30cfbe",
                    fontSize: 40,
                    borderRadius: "25px",
                    px: 6,
                    py: 2,
                    mt: 5,
                  }}
                >
                  VISIT ROADMAP
                </Button>
              </Box>

              <Box
                component="img"
                src="/images/banana.png"
                sx={{
                  position: "absolute",
                  maxWidth: "600px!important",
                  height: "80%",
                  width: "auto",
                  right: "-8%",
                  top: "-6%",
                }}
              />
            </Stack>
          </MotionInView>
        </Box>

        <Divider sx={{ border: "2px solid #30cfbe", my: 10 }} />

        <Stack direction="row" id="rarity">
          <Stack
            justifyContent="flex-start"
            alignItems="center"
            flex={1}
            sx={{
              background: "url('/images/bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "75px",
              backgroundPosition: "50%",
              padding: "2% 4%",
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography variant="h1">TRAIT RARITY</Typography>
            <Typography variant="body1" sx={{ mt: 5 }}>
              All apes are equal, but some apes are more equal than others.
              That’s why we’ve established a trait rarity system to tell which
              of our students are likely destined for greatness.
            </Typography>
            <Typography variant="body1" sx={{ mt: 5 }}>
              There are 137 total traits in the academy and these have been
              categorized into a tier based system (seen on the right). Traits
              are ranked from ‘common’ all the way through to ‘mythic’ and each
              rank has a corresponding % chance of being minted. All of the
              Academy’s traits and their rarity % can be viewed over in our
              ‘traits’ section. Click below to check them out.
            </Typography>
            <Button
              component={RouterLink}
              to="/trait"
              variant="contained"
              sx={{
                color: "white",
                background: "#30cfbe",
                fontSize: 40,
                borderRadius: "25px",
                px: 6,
                py: 2,
                mt: 5,
              }}
            >
              VIEW TRAITS
            </Button>
          </Stack>
          <Stack flex={1} alignItems="flex-end">
            <Stack
              justifyContent="space-between"
              sx={{ width: 0.8, height: 1 }}
            >
              <Box
                sx={{
                  border: "3px solid #c6a890",
                  padding: "1.5%!important",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  color="white"
                  align="center"
                  sx={{
                    background: "#c6a890",
                    borderRadius: "12px",
                    padding: "5%",
                    fontSize: 30,
                  }}
                >
                  COMMON
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "3px solid #73b6e9",
                  padding: "1.5%!important",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  color="white"
                  align="center"
                  sx={{
                    background: "#73b6e9",
                    borderRadius: "12px",
                    padding: "5%",
                    fontSize: 30,
                  }}
                >
                  UNCOMMON
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "3px solid #fae187",
                  padding: "1.5%!important",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  color="white"
                  align="center"
                  sx={{
                    background: "#fae187",
                    borderRadius: "12px",
                    padding: "5%",
                    fontSize: 30,
                  }}
                >
                  RARE
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "3px solid #ec8c9d",
                  padding: "1.5%!important",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  color="white"
                  align="center"
                  sx={{
                    background: "#ec8c9d",
                    borderRadius: "12px",
                    padding: "5%",
                    fontSize: 30,
                  }}
                >
                  SUPER RARE
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "3px solid #40daca",
                  padding: "1.5%!important",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  color="white"
                  align="center"
                  sx={{
                    background: "#40daca",
                    borderRadius: "12px",
                    padding: "5%",
                    fontSize: 30,
                  }}
                >
                  MYTHIC
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ border: "2px solid #30cfbe", my: 10 }} />

        <Typography
          id="faq"
          variant="h1"
          align="center"
          sx={{ fontSize: "120px !important", mb: 5 }}
        >
          FAQ'<sup>s</sup>
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h4">Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Collapsible Group Item #3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ border: "2px solid #30cfbe", my: 10 }} />

        <Typography
          variant="h1"
          sx={{ fontSize: "120px !important", mb: 5 }}
          align="center"
        >
          TEAM
        </Typography>

        <Stack direction="row" spacing={5}>
          <Box sx={{ flex: 1 }}>
            <Card
              src={`/images/apes/ape1.jpg`}
              sx={{ boxShadow: "-12px 11px 23px 3px rgb(0 0 0 / 75%)", mb: 3 }}
            />
            <Typography variant="h3" align="center">
              @MONOLIFF
            </Typography>
            <Typography align="center">Art & Design</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Card
              src={`/images/apes/ape8.jpg`}
              sx={{ boxShadow: "-12px 11px 23px 3px rgb(0 0 0 / 75%)", mb: 3 }}
            />
            <Typography variant="h3" align="center">
              @GOLD
            </Typography>
            <Typography align="center">Project Management</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Card
              src={`/images/apes/ape8.jpg`}
              sx={{ boxShadow: "-12px 11px 23px 3px rgb(0 0 0 / 75%)", mb: 3 }}
            />
            <Typography variant="h3" align="center">
              @GOLDENDEV
            </Typography>
            <Typography align="center">Development</Typography>
          </Box>
        </Stack>
      </Box>
    </RootStyle>
  );
}
