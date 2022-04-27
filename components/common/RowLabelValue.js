import { Stack, Typography } from "@mui/material";

const RowLabelValue = ({title, value, titleVariant, variant, ...rest}) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="flex-end" {...rest} >
      <Typography variant={titleVariant || "body1"}>
        {title}
      </Typography>
      <Typography variant={variant || "body1"}>
        {value}
      </Typography>
    </Stack>
  )
}

export default RowLabelValue;
