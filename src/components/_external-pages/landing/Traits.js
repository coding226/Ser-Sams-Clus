import { useState } from "react";
import { motion } from "framer-motion";
import { styled } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@material-ui/core";
import { varWrapEnter, varFadeInRight } from "../../animate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import Card from "../../Card";
// ----------------------------------------------------------------------
SwiperCore.use([EffectCoverflow, Navigation]);

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[400],
  background: "url(/images/bg.png)",
  height: "100vh",
  borderBottom: "5px solid #30cfbe",
  backgroundSize: "cover",
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
  },
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const [age, setAge] = useState("Head");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 30, pb: 20 }}>
        <Stack direction="row" spacing={10}>
          <Stack alignItems="center">
            <FormControl sx={{ m: 1, minWidth: 120, mb: 4 }}>
              <Select
                value={age}
                onChange={handleChange}
                inputProps={{
                  sx: {
                    width: 160,
                    border: "3px solid #30cfbe",
                    color: "white",
                    fontSize: 20,
                    fontStyle: "italic",
                    py: 1,
                  },
                }}
              >
                <MenuItem value="Head">Head</MenuItem>
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Mouth">Mouth</MenuItem>
                <MenuItem value="Fur/Skin">Fur/Skin</MenuItem>
                <MenuItem value="Teeth">Teeth</MenuItem>
                <MenuItem value="Eyewear">Eyewear</MenuItem>
                <MenuItem value="Background">Background</MenuItem>
              </Select>
            </FormControl>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  sx={{ mb: 1 }}
                  value="All"
                  control={<Radio />}
                  label="All"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  value="Common"
                  control={<Radio />}
                  label="Common"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  value="Uncommon"
                  control={<Radio />}
                  label="Uncommon"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  value="Rare"
                  control={<Radio />}
                  label="Rare"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  value="Super Rare"
                  control={<Radio />}
                  label="Super Rare"
                />
                <FormControlLabel
                  sx={{ mb: 1 }}
                  value="Mythic"
                  control={<Radio />}
                  label="Mythic"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Stack flexGrow={1} alignItems="center">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={0}
              slidesPerView={3}
              slidesPerGroup={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                // slideShadows: true,
              }}
              navigation={true}
              style={{ width: 900 }}
            >
              {[...Array(13)].map((item, index) => (
                <SwiperSlide>
                  <Box
                    component="img"
                    src={`/images/apes/ape${index + 1}.jpg`}
                    sx={{ borderRadius: 2 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Box
              sx={{
                border: "3px solid #c6a890",
                padding: "3px",
                borderRadius: "16px",
                width: 400,
                mt: 7,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  background: "#c6a890",
                  borderRadius: "12px",
                  px: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontSize: "18px !important" }}
                  >
                    Baseball Cap
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="white"
                    sx={{ fontSize: "14px !important" }}
                  >
                    4.37% has this trait
                  </Typography>
                </Box>
                <Box sx={{ border: "1px solid white", height: "30px" }} />
                <Box>
                  <Typography
                    variant="h4"
                    color="white"
                    align="right"
                    sx={{ fontSize: "18px !important" }}
                  >
                    Head
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="white"
                    align="right"
                    sx={{ fontSize: "14px !important" }}
                  >
                    Common
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
