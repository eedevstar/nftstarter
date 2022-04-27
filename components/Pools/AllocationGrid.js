import {
  useTheme, alpha, Box, Grid, Typography
} from "@mui/material"
import { showOnlymdMedia } from "theme/responsive"
import AllocationGridRow from "./AllocationGridRow"

const AllocationGrid = (props) => {
  const theme = useTheme()
  const allocations = [
    {
      action: false,
      contribution: "0.180 ETH",
      date: "18 Jun, 07:23 AM",
      totalTokens: "60139 PHTR",
      withdrawn: "0 PHTR",
      available: "60139 PHTR",
    },
    {
      action: false,
      contribution: "0.180 ETH",
      date: "18 Jun, 07:23 AM",
      totalTokens: "60139 PHTR",
      withdrawn: "0 PHTR",
      available: "60139 PHTR",
    },
  ]

  return (
    <Box {...props}>
      <Box sx={{ border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`, borderRadius: 6 }}>
        <Grid container spacing={0} sx={{ py: 2, px: 2 }}>
          <Grid item xs={2} sm={2} md={2} display={showOnlymdMedia}>
            <Typography variant="body1">Action</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <Typography variant="body1">Contribution</Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} display={showOnlymdMedia}>
            <Typography variant="body1">Allocation Date</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <Typography variant="body1">Total Tokens</Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} display={showOnlymdMedia}>
            <Typography variant="body1">Withdrawn</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <Typography variant="body1">Available Now</Typography>
          </Grid>
        </Grid>
        {
          allocations.map((alc, idx) => (
            <AllocationGridRow key={idx} alc={alc} />
          ))
        }
      </Box>
    </Box>
  )
}

export default AllocationGrid
