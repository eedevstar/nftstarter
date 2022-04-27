import UBox from "components/common/UBox"
import RowLabelValue from "components/common/RowLabelValue"
import { Box, alpha, useTheme } from "@mui/material"

const PoolDataGrid = ({title, data, children}) => {
  const theme = useTheme()
  return (
    <UBox variant="outlined" noPadding>
      <RowLabelValue title={title} value="" sx={{ px: 3, py: 3 }} />
      {
        !!data && data.map((item, idx) => (
          <RowLabelValue
            key={idx} title={item.name}
            value={item.value}
            px={3}
            py={3}
            sx={{ borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}` }}
          />
        ))
      }
      {
        children && (
          <Box
            px={3}
            py={3}
            sx={{ borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}`}}
          >
            {children}
          </Box>
        )
      }
    </UBox>
  )
}

export default PoolDataGrid
