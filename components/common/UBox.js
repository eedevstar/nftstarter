import { Box, alpha, useTheme } from "@mui/material"

const UBox = ({variant, noPadding, children}) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: variant==='outlined' ? 'transparent' : '#14264B',
        padding: noPadding ? 0 : '40px',
        border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
        borderRadius: '32px',
      }}
    >
      {children}
    </Box>
  )
}

export default UBox
