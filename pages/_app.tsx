import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import Layout from '../components/Layout'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: "#0070f3"
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
