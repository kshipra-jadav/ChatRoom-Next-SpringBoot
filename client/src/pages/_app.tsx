import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Mulish } from "next/font/google"

const mulish = Mulish({
  subsets: [ "latin" ],
  weight: "300"
})
export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <style jsx global>{`
          html {
            font-family: ${mulish.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
  )
}
