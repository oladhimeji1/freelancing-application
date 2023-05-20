import '../styles/globals.css'
import Layout from '@/components/Layout'
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
