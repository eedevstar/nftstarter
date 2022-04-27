import ExploreCard from "./ExploreCard"
import { Chip, Slider, Typography } from "@mui/material"
import UIcon from "components/common/UIcon"
import USlider from "components/common/USlider";
import RowLabelValue from "components/common/RowLabelValue";
import { useRouter } from "next/router";

const FeaturedPool = (props) => {
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
      <RowLabelValue title="Total Raise" value={props.totalRaise} variant="h6" mt={1.25} />

      <USlider title="Progress" {...props.slider} />

      <RowLabelValue title="Access" value={props.access} mt={1.25} />
      <RowLabelValue title="Participants:" value={props.parts} mt={1.25} />
      <RowLabelValue title="Max ETH:" value={props.max} mt={1.25} />
    </ExploreCard>
  )
}

export default FeaturedPool
