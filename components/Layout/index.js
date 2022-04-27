import { useState } from 'react'
import {
  Box, AppBar, Toolbar, Drawer
} from '@mui/material'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: '100%' },
        }}
      >
        <Toolbar>
          <Header handleDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, width: { sm: '100%' } }}
      >
        <Toolbar />
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout
