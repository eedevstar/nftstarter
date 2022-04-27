import LogoIcon from 'assets/icons/logo.svg'

import Down from 'assets/icons/actions/down.svg'
import Download from 'assets/icons/actions/download.svg'
import Up from 'assets/icons/actions/up.svg'

import LinkedIn from 'assets/icons/brands/linkedin.svg'
import Medium from 'assets/icons/brands/medium.svg'
import Telegram from 'assets/icons/brands/telegram.svg'
import Twitter from 'assets/icons/brands/twitter.svg'

import Drops from 'assets/icons/cards/drops.svg'
import Paralink from 'assets/icons/cards/paralink.svg'
import Phuture from 'assets/icons/cards/phuture.svg'
import Polytrade from 'assets/icons/cards/polytrade.svg'

import Analog from 'assets/icons/util/analog.svg'
import Copy from 'assets/icons/util/copy.svg'
import Eth from 'assets/icons/util/eth.svg'
import Search from 'assets/icons/util/search.svg'

const IconMap = {
  LogoIcon,

  Down,
  Download,
  Up,

  LinkedIn,
  Medium,
  Telegram,
  Twitter,

  Drops,
  Paralink,
  Phuture,
  Polytrade,

  Analog,
  Copy,
  Eth,
  Search,
}

const UIcon = ({type, width, ...rest}) => {
  const defaultWidth = "40px"
  const Component = IconMap[type]
  if(Component) {
    return (
      <Component
        width={width || defaultWidth}
        height={width || defaultWidth}
        {...rest}
      />
    )
  }
}

export default UIcon
