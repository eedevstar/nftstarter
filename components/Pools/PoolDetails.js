import { Box, Tab, Tabs, Grid, Typography } from "@mui/material"
import { useState } from "react"
import PoolDataGrid from "./PoolDataGrid"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AllocationGrid from "./AllocationGrid";
import { twoColumnsGridItem } from "theme/responsive"
import { getAddress } from 'utils'

const PoolDetails = () => {
  const [value, setValue] = useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const linksData = [
    { name: "Website", value: "phuture.com" },
    { name: "Whitepaper", value: "phuture.com/whitepaper" },
    { name: "Twitter", value: "twitter.com/phuture" },
  ]

  const poolData = [
    { name: "Token Distribution", value: "June 3rd 2021, 3:00 PM UTC" },
    { name: "Min. Allocation", value: "No Minimum" },
    { name: "Max. Allocation", value: "0.2104 ETH" },
    { name: "Min Swap Level", value: "45 ETH" },
  ]

  const tokenData = [
    { name: "Name & Symbol", value: "Phuture, PHTR" },
    { name: "Decimals", value: "18" },
    { name: "Address", value: getAddress("0xE923060c48266E6bA0993a8d214Fd64a5F103979", 7) },
    { name: "Total Supply", value: "100,000,000.0" },
  ]

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} sx={{ minHeight: '40px' }}
          TabIndicatorProps={{ style: { display: "none" } }}>
        <Tab label="Pool Details" value="1" />
        <Tab label="About the Project" value="2" />
        <Tab label="Your Allocations" value="3" />
      </TabList>
      <TabPanel value="1" px={0}>
        <Grid container spacing={5}>
          <Grid item {...twoColumnsGridItem}>
            <PoolDataGrid title="Pool Information" data={poolData} />
          </Grid>
          <Grid item {...twoColumnsGridItem}>
            <PoolDataGrid title="Token Information" data={tokenData} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="2" px={0}>
        <Grid container spacing={5}>
          <Grid item {...twoColumnsGridItem}>
            <PoolDataGrid title="Pool Information">
              <Box sx={{ height: '200px', overflowY: 'scroll' }}>
                <Typography
                  variant="body2"
                >
                  Phuture is a decentralised protocol built for the creation and investment of token based passive investment strategies in a Web3 environment.
                  Phuture introduces an open design philosophy for creating passive investment strategies, providing the tools for users to create new indices, or invest into existing ones created by the community. The Phuture Index Creator can support an array of index options including automated sector tracking and dynamic weighting methodologies.
                  Phuture’s aggregated design achieves scalability by allowing a single swap to rebalance multiple indices simultaneously. The protocol’s smart rebalancing engine calculates the optimal assets to rebalance and dynamically defines acceptable weight ranges to rebalance in. The cumulative result of this architecture is a platform that can support 100s of indices, whilst minimising the value leaked through rebalancing swaps.
                  Index investors can tap into the deepest sources of liquidity on the Ethereum ecosystem providing best execution and the broadest selection of assets. Phuture effectively separates trade execution during the minting process from the amount of liquidity held in an index fund. This ensures the same user experience regardless of index size and removes the cumbersome liquidity onboarding phase for new indices.
                </Typography>
              </Box>
            </PoolDataGrid>
          </Grid>
          <Grid item {...twoColumnsGridItem}>
            <PoolDataGrid title="Links" data={linksData} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="3" px={0}>
        <AllocationGrid />
      </TabPanel>
    </TabContext>
  )
}

export default PoolDetails
