import { useState } from "react";
import { Typography, Slider, Stack } from "@mui/material"

const USliderMin = (props) => {
  const [value, setValue] = useState(props.val)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Stack direction="row" alignItems="center" spacing={1} pr={{ xs: 0, sm: 0, md: 5 }}>
      <Typography variant="body1">{`${value}%`}</Typography>
      <Slider
        disabled
        sx={{ flexGrow: 1, ml: 1 }}
        aria-label="Volume"
        value={value}
        onChange={handleChange}
        color="success"
      />
    </Stack>
  )
}

export default USliderMin
