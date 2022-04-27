import UIcon from "components/common/UIcon"
import {
  alpha, useTheme, Typography, Stack, Grid, Button, Fab, Box
} from "@mui/material"
import { showOnlymdMedia } from "theme/responsive"
import { useState } from "react"

const AllocationGridRow = ({alc, ...rest}) => {
  const theme = useTheme()
  const [open, setOpen] = useState()

  const handleClaim = () => {

  }

  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems="center"
        sx={{ py: 2, px: 2, borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}` }}
        {...rest}
      >
        <Grid item xs={2} sm={2} md={2} display={showOnlymdMedia}>
          <Button variant="contained" onClick={()=>handleClaim()}>Claim</Button>
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
            <Typography variant="body1">{alc.contribution}</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} display={showOnlymdMedia}>
            <Typography variant="body1">{alc.date}</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
            <Typography variant="body1">{alc.totalTokens}</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} display={showOnlymdMedia}>
            <Typography variant="body1">{alc.withdrawn}</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1">{alc.available}</Typography>
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
              <Fab color="primary">
                <UIcon type="Download" width="13.5px" />
              </Fab>
            </Box>
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
              {
                !open && (
                  <Fab color="info" onClick={()=>setOpen(true)}>
                    <UIcon type="Down" width="10px" />
                  </Fab>
                )
              }
              {
                open && (
                  <Fab color="info" onClick={()=>setOpen(false)}>
                    <UIcon type="Up" width="10px" />
                  </Fab>
                )
              }
            </Box>
          </Stack>
        </Grid>
      </Grid>
      {
        open && (
          <Grid
            container
            spacing={0}
            alignItems="center"
            sx={{ py: 2, px: 2, borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}` }}
          >
            <Grid item xs={4}>
              <Typography variant="body1">Allocation Date</Typography>
              <Typography variant="body1">{alc.date}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">Withdrawn</Typography>
              <Typography variant="body1">{alc.withdrawn}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">Status</Typography>
              <Typography variant="body1">Claimed</Typography>
            </Grid>
          </Grid>
        )
      }
    </>
  )
}

export default AllocationGridRow
