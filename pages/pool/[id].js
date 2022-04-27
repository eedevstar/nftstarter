import UContainer from "components/common/UContainer"
import PoolDetails from "components/Pools/PoolDetails"
import { useState } from "react"
import JoinDailog from "components/Pools/JoinDialog"
import PoolDetailsHeader from "components/Pools/PoolDetailsHeader"

const Pool = () => {
  const [open, setOpen] = useState(false)
  const handleClose = (value) => {
    setOpen(false);
  }

  return (
    <UContainer>
      <PoolDetailsHeader setOpen={setOpen} />
      <PoolDetails />
      <JoinDailog open={open} onClose={handleClose} />
    </UContainer>
  )
}

export default Pool
