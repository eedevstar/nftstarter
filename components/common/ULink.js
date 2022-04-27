import Link from 'next/link'
import { Stack } from '@mui/material'

const ULink = (props) => {
  const href = props.href || "/"
  return (
    <Link href={href} passHref>
      <Stack direction='row' sx={{ cursor: 'pointer' }}>
        {props.children}
      </Stack>
    </Link>
  )
}

export default ULink
