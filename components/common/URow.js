import { Stack } from "@mui/material"

const URow = ({children, ...rest}) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="flex-end" {...rest}>
      {children}
    </Stack>
  )
}

export default URow