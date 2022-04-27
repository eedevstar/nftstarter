import UIcon from "components/common/UIcon"

import {
  useTheme, alpha, Typography, Stack, Box, Grid, Chip
} from "@mui/material"
import USliderMin from "components/common/USliderMin"
import { useRouter } from "next/router"
import { showOnlymdMedia } from "theme/responsive"

const PoolsGrid = ({filter, ...rest}) => {
  const router = useRouter()
  const theme = useTheme()

  const handlePoolClick = () => {
    router.push("/pool/1")
  }

  let pools = [
    {
      avatar: "Phuture",
      name: "huture Finance",
      ratio: "1 ETH = 9506.06 PHTR",
      status: { label: 'in 1 day', color: 'error' },
      progress: 10,
      access: "Private",
    },
    {
      avatar: "Polytrade",
      name: "Polytrade",
      ratio: "1 ETH = 9506.06 PHTR",
      status: { label: '· Live', color: 'primary' },
      progress: 100,
      access: "Private",
    },
    {
      avatar: "Paralink",
      name: "Paralink",
      ratio: "1 ETH = 9506.06 PHTR",
      status: { label: 'Filled', color: 'info' },
      progress: 80,
      access: "Private",
    },
    {
      avatar: "Phuture",
      name: "Phuture Finance",
      ratio: "1 ETH = 9506.06 PHTR",
      status: { label: '· Live', color: 'primary' },
      progress: 100,
      access: "Private",
    },
    {
      avatar: "Drops",
      name: "Drops A",
      ratio: "1 ETH = 9506.06 PHTR",
      status: { label: 'Filled', color: 'info' },
      progress: 80,
      access: "Private",
    },
  ]

  pools = pools.filter(e => e.name.indexOf(filter) != -1)

  if(pools.length === 0) {
    return (
      <Stack alignItems="center" py={20} spacing={3.5}>
        <Typography variant="h2" align="center">
          No results found
        </Typography>
        <Typography variant="body2" align="center" sx={{ maxWidth: "430px" }}>
          We couldn’t find what you’re looking for, check your spelling or try another search query
        </Typography>
      </Stack>
    )
  }

  return (
    <Box {...rest}>
      <Box sx={{ border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`, borderRadius: 6 }}>
        <Grid container spacing={0} sx={{ py: 2, px: 2 }}>
          <Grid item xs={4} sm={4} md={3}>
            <Typography variant="body1">Pool Name</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <Typography variant="body1">Ratio</Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography variant="body1">Status</Typography>
          </Grid>
          <Grid item xs={3} display={showOnlymdMedia}>
            <Typography variant="body1">Progress</Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={1}>
            <Typography variant="body1">Access</Typography>
          </Grid>
        </Grid>
        {
          pools.map((pool, idx) => (
            <Grid
              container
              key={idx}
              spacing={0}
              alignItems="center"
              onClick={handlePoolClick}
              sx={{
                py: 2,
                px: 2,
                borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  cursor: 'pointer'
                }
              }}
            >
              <Grid item xs={4} sm={4} md={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <UIcon type={pool.avatar} />
                  <Typography variant="body1">{pool.name}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={4} sm={4} md={3}>
                  <Typography variant="body1">{pool.ratio}</Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Chip label={pool.status.label} color={pool.status.color} />
              </Grid>
              <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block' }}>
                <USliderMin val={pool.progress} />
              </Grid>
              <Grid item xs={2} sm={2} md={1}>
                <Typography variant="body1">{pool.access}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} mt={2} display={{ xs: 'block', sm: 'block', md: 'none' }}>
                <USliderMin val={pool.progress} />
              </Grid>
            </Grid>
          ))
        }
      </Box>
    </Box>
  )
}

export default PoolsGrid
