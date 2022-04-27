import { Box, Button, Stack, Typography } from "@mui/material"

const bgGradientRed = {
  content: '" "',
  position: 'absolute',
  width: '800px',
  height: '800px',
  top: '-20%',
  right: '-20%',
  zIndex: -1,
  background: 'radial-gradient(50% 50% at 50% 50%, rgba(224, 53, 53, 0.2) 0%, rgba(224, 53, 53, 0) 100%)',
}

const bgGradientGreen = {
  content: '" "',
  position: 'absolute',
  width: '800px',
  height: '800px',
  top: '10px',
  left: '-20%',
  zIndex: -1,
  background: 'radial-gradient(50% 50% at 50% 50%, rgba(59, 204, 93, 0.2) 0%, rgba(59, 204, 93, 0) 100%)',
}

const Banner = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', '&:before': bgGradientGreen, '&:after': bgGradientRed }}>
      <Stack alignItems='center' spacing={20} py={20}>
        <Typography variant='h2' align='center'>Bringing Light to Projects</Typography>
        <Button variant="contained">Connect Wallet</Button>
      </Stack>
    </Box>
  )
}

export default Banner
