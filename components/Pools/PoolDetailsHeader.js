import { Grid, Typography, Stack, Button } from "@mui/material"
import UIcon from "components/common/UIcon"
import USlider from "components/common/USlider"
import RowLabelValue from "components/common/RowLabelValue"
import UBox from "components/common/UBox"
import { twoColumnsGridItem } from "theme/responsive"

const PoolDetailsHeader = ({setOpen}) => {
  const handleViewEtherscan = () => {

  }
  return (
    <Grid container spacing={5} sx={{ mb: 8 }}>
      <Grid item {...twoColumnsGridItem}>
        <Stack direction="column" spacing={1.5} alignItems={{ xs: "center", sm: "center", md: "flex-start" }}>
          <UIcon type="Phuture" width="80px" />
          <Typography variant="h3" pt={2}>Phuture Finanace</Typography>
          <Typography variant="body1">
            0xE923060c48266E6bA0993a8d214Fd64a5F103979
          </Typography>
          <Stack direction="row" alignItems="center" pt={1.5} spacing={1} display={{ xs: "none", sm: "none", md: "flex" }}>
            <UIcon type="Analog" width="24px" />
            <Typography variant="body1" mt={1}>Published 8 days ago</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={{ xs: 4.25, sm: 4.25, md: 2.5 }} mt={4.5}>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{ width: "150px", flexGrow: { xs: 1, sm: 1, md: 0 } }}
          >
            Join Pool
          </Button>
          <Button
            variant="outlined"
            sx={{ flexGrow: { xs: 1, sm: 1, md: 0 } }}
            onClick={() => handleViewEtherscan()}
          >
            View Etherscan
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" mt={4} spacing={1} display={{ xs: "flex", sm: "flex", md: "none" }}>
          <UIcon type="Analog" width="24px" />
          <Typography variant="body1" mt={1}>Published 8 days ago</Typography>
        </Stack>
      </Grid>
      <Grid item {...twoColumnsGridItem}>
        <UBox>
          <RowLabelValue title="Swap Amount" value="1 ETH = 9506.00 PHTR" variant="body2" />
          <RowLabelValue title="833333.00 PHTR" titleVariant="h4" value="88ETH" mt={0.5} variant="body2" />
          <Typography variant="body1" mt={2.5}>Closes in</Typography>
          <Typography variant="h4" mt={0.5}>12h 50m 56s</Typography>
          <USlider title="Swap Amount" val="98" min="(Min. 51%)" max="4/500000" mt={2.5} />
        </UBox>
      </Grid>
    </Grid>
  )
}

export default PoolDetailsHeader
