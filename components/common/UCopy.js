import UIcon from "./UIcon"
import { ClickAwayListener, Tooltip, Box, Fab } from "@mui/material"
import { useState } from "react";

const UCopy = ({address}) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  }

  const handleTooltipOpen = () => {
    setOpen(true);

    navigator.clipboard.writeText(address)
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Box>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Copied"
        >
          <Fab onClick={handleTooltipOpen} color="primary">
            <UIcon type="Copy" width="20px" />
          </Fab>
        </Tooltip>
      </Box>
    </ClickAwayListener>
  )
}

export default UCopy
