import {
  Stack, Typography
} from '@mui/material'
import Link from 'next/link'
import UIcon from 'components/common/UIcon'
import ULink from 'components/common/ULink'

const Footer = () => {
  return (
    <Stack spacing={5} px={5} pb={5} mt={10}>
      <Stack direction='row' justifyContent='flex-end' spacing={3}>
        <UIcon type='LinkedIn' width='20px' />
        <UIcon type='Medium' width='20px' />
        <UIcon type='Telegram' width='20px' />
        <UIcon type='Twitter' width='20px' />
      </Stack>
      <Stack direction='row' justifyContent='flex-end' spacing={3}>
        <ULink href="/">
          <Typography variant='body2' color="text.secondary">Privacy Policy</Typography>
        </ULink>
        <ULink href="/">
          <Typography variant='body2' color="text.secondary">Terms and Conditions</Typography>
        </ULink>
      </Stack>
    </Stack>
  )
}

export default Footer
