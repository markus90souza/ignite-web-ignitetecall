import { bootCss } from '@/styles/globals'
import type { AppProps } from 'next/app'

bootCss()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
