import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box, Button, Typography, Stack, Fab, useTheme,
} from '@mui/material'
import UIcon from 'components/common/UIcon'
import { getAddress } from 'utils'
import UCopy from 'components/common/UCopy'
import ULink from 'components/common/ULink'

const Header = ({ handleDrawerToggle }) => {
  const [connect, setConnect] = useState(false)
  const router = useRouter()
  const theme = useTheme()

  const handleAllPools = () => {
    router.push('/pool')
  }

  const handleHome = () => {
    router.push('/')
  }

  const handleConnectWallet = () => {
    setConnect(true)
  }

  const address = '0xe338923874239874289326f9'

  const allPoolsBgColor = router.pathname === "/pool"? theme.palette.secondary.main: "transparent"

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
      <Stack direction='row' alignItems='center' spacing={2}>
        <ULink href="/">
          <UIcon type='LogoIcon' />
          <Typography variant='h6' display={{ xs: 'none', sm: 'none', md: 'block' }}>CEX Starter</Typography>
        </ULink>

        <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
          <Button variant="outlined" onClick={handleAllPools} sx={{ backgroundColor: `${allPoolsBgColor}` }}>All Pools</Button>
        </Box>
      </Stack>

      <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
        <Button variant="outlined" onClick={handleAllPools} sx={{ backgroundColor: `${allPoolsBgColor}` }}>All Pools</Button>
      </Box>

      {
        !connect && (
          <Box>
            <Button onClick={() => handleConnectWallet()} variant="contained">Connect Wallet</Button>
          </Box>
        )
      }
      {
        connect && (
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6">0 ETH</Typography>
            <Fab color="secondary">
              <UIcon type="Eth" width="20px" />
            </Fab>
            <Box>&nbsp;</Box>
            <Typography variant="h6">{getAddress(address, 3)}</Typography>
            <UCopy address={address} />
          </Stack>
        )
      }
    </Stack>
  )
}

export default Header
