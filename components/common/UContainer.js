import { Box } from "@mui/material"

const bgGradientBlueBefore = {
  content: '" "',
  position: 'absolute',
  width: '700px',
  height: '700px',
  top: '10px',
  left: '-10%',
  zIndex: -1,
  background: 'radial-gradient(50% 50% at 50% 50%, rgba(53, 101, 224, 0.3) 0%, rgba(53, 101, 224, 0) 100%)',
}
const bgGradientBlueAfter = {
  content: '" "',
  position: 'absolute',
  width: '800px',
  height: '800px',
  top: '-30%',
  right: '-20%',
  zIndex: -1,
  background: 'radial-gradient(50% 50% at 50% 50%, rgba(53, 101, 224, 0.3) 0%, rgba(53, 101, 224, 0) 100%)',
}

const UContainer = ({children}) => {
  return (
    <Box sx={{ width: "100%", mt: 7.5, "&:before": bgGradientBlueBefore, "&:after": bgGradientBlueAfter }}>
      {children}
    </Box>
  )
}

export default UContainer
