import { useState } from "react";
import { Typography, Slider, Box } from "@mui/material"
import RowLabelValue from "./RowLabelValue";

const USlider = ({title, val, min, max, ...rest}) => {
  const [value, setValue] = useState(parseInt(val))

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box {...rest}>
      <Typography variant="body1" sx={{mt: 1 }}>
        {title}
      </Typography>
      <Slider
        disabled
        aria-label="Volume"
        value={value}
        onChange={handleChange}
        color="success"
      />
      <RowLabelValue title={`${value}% ${min}`} value={max} mt="0" />
    </Box>
  )
}

export default USlider
