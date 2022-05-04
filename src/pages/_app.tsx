import { AppProps } from 'next/dist/shared/lib/router/router'
import { Header } from '../components/header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
