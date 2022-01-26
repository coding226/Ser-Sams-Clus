// material
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// components
import { Traits } from "../components/_external-pages/landing";
import Card from "../components/Card";

// ----------------------------------------------------------------------

const RootStyle = styled(Box)({
  // height: '100%'
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  // backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle id="move_top">
      <ContentStyle>
        <Traits />
      </ContentStyle>
    </RootStyle>
  );
}
