import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>mezamemo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>mezamemo</h1>
        <Link href='/dashbord'>
          <a >DashBord</a>
        </Link>
      </main>

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body, h1 {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
