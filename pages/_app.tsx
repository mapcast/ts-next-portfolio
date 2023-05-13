import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SideNav from '../components/sidenav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SideNav/>
        <div className="content-wrap">
          <Component {...pageProps} />
        </div>
      </main>
      <style jsx>{`
        .content-wrap {
          padding-left: 18rem;
          width: 95rem;
          height: 98vh;
        }
      `}</style>
    </>
  )
  
}