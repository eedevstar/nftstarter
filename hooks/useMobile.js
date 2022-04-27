import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function useMobile(breakpoint) {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down(breakpoint))
}
