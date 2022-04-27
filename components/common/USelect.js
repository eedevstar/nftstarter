import {
  useTheme, alpha, Select, MenuItem
} from '@mui/material'
import { useState } from 'react';

const USelect = ({title, items, setSelectedValue}) => {
  const theme = useTheme()

  const [value, setValue] = useState(0)

  const handleChange = (e) => {
    setValue(e.target.value)
    setSelectedValue(e.target.value)
  }

  return (
    <Select
      value={value}
      onChange={(e) => handleChange(e)}
      sx={{ width: 150 }}
      size="small"
      MenuProps={{
        PaperProps: {
          sx: {
            borderRadius: '0 0 20px 20px',
            border: `1px solid ${alpha(theme.palette.success.main, 0.6)}`,
            backgroundColor: theme.palette.secondary.main,
          }
        }
      }}
    >
      <MenuItem key={0} value={0}>{title}</MenuItem>
      {
        items.map((item, idx) => (
          <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
        ))
      }
    </Select>
  )
}

export default USelect
