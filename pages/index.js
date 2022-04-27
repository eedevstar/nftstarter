import {
  Typography, Box, Grid, Stack, Button
} from '@mui/material'
import Banner from 'components/Explore/Banner'
import UpcomingPool from 'components/Explore/UpcomingPool'
import FeaturedPool from 'components/Explore/FeaturedPool'
import { useRouter } from 'next/router'
import { showOnlymdMedia } from 'theme/responsive'

export default function Home() {
  const router = useRouter()

  const handleViewAllClick = () => {
    router.push("/pool")
  }

  const upcomingPools = [
    {
      avatar: 'Polytrade',
      action: { label: 'in 1 day', color: 'error' },
      title: 'Polytrade',
      subheader: '',
      totalRaise: '$204K',
      access: 'Private',
      min: '0',
      max: '$300',
    },
    {
      avatar: 'Phuture',
      action: { label: 'in 3 days', color: 'error' },
      title: 'Phuture Finance',
      subheader: '',
      totalRaise: '$90K',
      access: 'Private',
      min: '0',
      max: '$550',
    },
    {
      avatar: 'Paralink',
      action: { label: 'in 1 day', color: 'error' },
      title: 'Paralink',
      subheader: '',
      totalRaise: '$204K',
      access: 'Private',
      min: '0',
      max: '$300',
    }
  ]

  const featuredPools = [
    {
      avatar: 'Phuture',
      action: { label: 'Filled', color: 'info' },
      title: 'Phuture Finance',
      subheader: '1ETH = 9506.00 PHTR',
      totalRaise: '88 ETH',
      slider: { val: 80, min: '(Min. 51%)', max: '4/500000' },
      access: 'Private',
      parts: '500',
      max: '0.1204',
    },
    {
      avatar: 'Drops',
      action: { label: 'Filled', color: 'info' },
      title: 'Drops A',
      subheader: '1ETH = 9506.00 PHTR',
      totalRaise: '37 ETH',
      slider: { val: 100, min: '(Min. 51%)', max: '4/500000' },
      access: 'Private',
      parts: '500',
      max: '0.1204',
    },
    {
      avatar: 'Phuture',
      action: { label: 'Filled', color: 'info' },
      title: 'Phuture Finance',
      subheader: '1ETH = 9506.00 PHTR',
      totalRaise: '88 ETH',
      slider: { val: 80, min: '(Min. 51%)', max: '4/500000' },
      access: 'Private',
      parts: '500',
      max: '0.1204',
    },
    {
      avatar: 'Drops',
      action: { label: 'Filled', color: 'info' },
      title: 'Drops A',
      subheader: '1ETH = 9506.00 PHTR',
      totalRaise: '37 ETH',
      slider: { val: 100, min: '(Min. 51%)', max: '4/500000' },
      access: 'Private',
      parts: '500',
      max: '0.1204',
    },
    {
      avatar: 'Phuture',
      action: { label: 'Filled', color: 'info' },
      title: 'Phuture Finance',
      subheader: '1ETH = 9506.00 PHTR',
      totalRaise: '88 ETH',
      slider: { val: 80, min: '(Min. 51%)', max: '4/500000' },
      access: 'Private',
      parts: '500',
      max: '0.1204',
    },
    {
      avatar: 'Drops',
      action: { label: 'Filled', color: 'info' },
      title: 'Drops A',
      subheader: '1ETH = 9506.00 PHTR',
      totalRaise: '37 ETH',
      slider: { val: 100, min: '(Min. 51%)', max: '4/500000' },
      access: 'Private',
      parts: '500',
      max: '0.1204',
    },
  ]

  return (
    <Box>
      <Banner />
      <Typography variant='h3' mb={5}>Upcoming Pools</Typography>
      <Grid container spacing={2}>
        {
          upcomingPools.map((item, idx) => (
            <Grid
              item
              key={idx}
              xs={12}
              sm={6}
              md={4}
              display={idx > 1 && showOnlymdMedia}
            >
              <UpcomingPool  {...item} />
            </Grid>
          ))
        }
      </Grid>

      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={5} mt={18} >
        <Typography variant='h3'>Featured Pools</Typography>
        <Button variant="outlined" onClick={handleViewAllClick}>View All</Button>
      </Stack>

      <Grid container spacing={2}>
        {
          featuredPools.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <FeaturedPool  {...item} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
