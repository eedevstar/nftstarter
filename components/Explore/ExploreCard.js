import { CardContent, Card, Stack, Typography } from "@mui/material";

const ExploreCard = ({avatar, action, title, subheader, children, ...rest}) => {
  return (
    <Card {...rest} sx={{cursor: "pointer"}}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          {avatar}
          {action}
        </Stack>
        <Typography variant="h5" mt={3}>
          {title}
        </Typography>
        {
          subheader && (
            <Typography variant="body1">
              {subheader}
            </Typography>
          )
        }
        {children}
      </CardContent>
    </Card>
  )
}

export default ExploreCard;
