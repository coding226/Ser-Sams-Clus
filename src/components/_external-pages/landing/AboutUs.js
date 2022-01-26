// material
import { styled } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'
import { AwesomeButton } from 'react-awesome-button'
import Card from '../../Card'
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

const Cards = [
  {
    avatar: '/images/team/beach.jpg',
    name: 'John Doe',
    bio: 'CEO',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/chart.jpg',
    name: 'Michelle',
    bio: 'CTO',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/CZ.jpg',
    name: 'Jane Doe',
    bio: 'CTO',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/desert.jpg',
    name: 'Harry',
    bio: 'Developer',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/matrix.jpg',
    name: 'Harry',
    bio: 'Developer',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/minecraft.jpg',
    name: 'Harry',
    bio: 'Developer',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/mountain.jpg',
    name: 'Harry',
    bio: 'Developer',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/snow large.jpg',
    name: 'Harry',
    bio: 'Developer',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/space.jpg',
    name: 'Harry',
    bio: 'Developer',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
  {
    avatar: '/images/team/tank.jpg',
    name: 'Harry',
    bio: 'Developer',
    twitter: 'https://twitter.com/soldiersofsol',
    telegram: '',
    description:
      'Harry, who also goes by Sententi, is a big nerd and programmer. Harry grew up playing Runescape and made his first computer by selling Runescape gold. Harry got his start in the gaming industry via creating trading marketplaces for MMOs and other games',
  },
]

export default function LandingMinimalHelps() {
  return (
    <RootStyle>
      <Box sx={{ px: { xs: 3, md: 24 } }}>
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                textAlign: 'center',
                mb: 4,
                fontSize: 100,
                fontFamily: 'ThunderBolt2',
                fontWeight: 700,
              }}
            >
              About Us
            </Typography>
            <Typography variant="h3" sx={{ mb: 4 }}>
              The SOL-diers team is a collective group of friends all with
              complementary skill-sets. Crypto is our passion and we believe
              NFTs are a huge part of the crypto space. Meet the team below!
              This is just the beginning...
            </Typography>
          </MotionInView>
        </Box>
      </Box>

      <Grid container sx={{ px: { xs: 3, md: 20 } }} spacing={8}>
        {Cards.map((item, index) => (
          <Grid key={index} item xs={12} md={4} justifyContent="center">
            <Card {...item} />
          </Grid>
        ))}
      </Grid>
    </RootStyle>
  )
}
