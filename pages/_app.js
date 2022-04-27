import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { SessionProvider } from 'next-auth/react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { SWRConfig } from 'swr'

import theme from 'theme'
import createEmotionCache from 'config/createEmotionCache'
import Layout from 'components/Layout'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, fallback, ...pageProps}
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Layout>
              <SWRConfig value={{ fallback, revalidateOnFocus: false }}>
                <Component {...pageProps} />
              </SWRConfig>
            </Layout>
          </LocalizationProvider>
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
