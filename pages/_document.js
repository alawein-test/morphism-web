import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0612" />
      </Head>
      <body className="bg-void antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
