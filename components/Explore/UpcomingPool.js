import ExploreCard from "./ExploreCard"
import { Chip } from "@mui/material"
import UIcon from "components/common/UIcon"
import RowLabelValue from "components/common/RowLabelValue"
import { useRouter } from "next/router"

const UpcomingPool = (props) => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/pool/1")
  }
  return (
    <ExploreCard
      avatar={<UIcon type={props.avatar} width="56px" />}
      action={<Chip label={props.action.label} color={props.action.color} />}
      title={props.title}
      subheader={props.subheader}
      onClick={()=>handleClick()}
    >
      <RowLabelValue title="Total Raise" value={props.totalRaise} variant="h6" mt={1} />
      <RowLabelValue title="Access" value={props.access} mt={1} />
      <RowLabelValue title="Min Allocation:" value={props.min} mt={1} />
      <RowLabelValue title="Max Allocation:" value={props.max} mt={1} />
    </ExploreCard>
  )
}

export default UpcomingPool
