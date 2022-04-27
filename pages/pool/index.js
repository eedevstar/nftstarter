import { useState } from "react"
import UIcon from "components/common/UIcon"
import USelect from "components/common/USelect"
import PoolsGrid from "components/Pools/PoolsGrid"
import {
  Typography, OutlinedInput, InputAdornment, Stack, Select, MenuItem, Box, Grid, Chip
} from "@mui/material"
import UContainer from "components/common/UContainer"
import useDebounce from "hooks/useDebounce"

const Pools = (props) => {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('')
  const [access, setAccess] = useState('')

  // Debounce search term so that it only gives us latest value ...
  const debouncedSearchTerm = useDebounce(value, 500);

  const statusItems = [
    { value: 1, name: 'Live' },
    { value: 2, name: 'Upcoming' },
    { value: 3, name: 'Filled' },
  ]

  const accessItems = [
    { value: 1, name: 'Private' },
    { value: 2, name: 'Public' },
  ]

  return (
    <UContainer>
      <Box {...props}>
        <Typography variant="h3" sx={{ mb: 3 }}>All Pools</Typography>
        <Stack direction="row" justifyContent="space-between">
          <OutlinedInput
            id="outlined-adornment-amount"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search by Pool ID, Token name, etc"
            startAdornment={<InputAdornment position="start"><UIcon type="Search" width="20px" /></InputAdornment>}
            sx={{ width: 400 }}
            autoComplete="off"
            size="small"
          />
          <Stack direction="row" spacing={2} ml={2}>
            <USelect title="Status" items={statusItems} setSelectedValue={setStatus} />
            <USelect title="Access" items={accessItems} setSelectedValue={setAccess} />
          </Stack>
        </Stack>

        <PoolsGrid sx={{ mt: 5 }} filter={debouncedSearchTerm} />
      </Box>
    </UContainer>
  )
}

export default Pools
