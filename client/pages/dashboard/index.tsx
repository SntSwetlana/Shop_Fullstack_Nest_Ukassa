import Layout from '@/components/layout/Layout'
import DashboardPage from '@/components/templates/DashboardPage/Dashboard'
import Head from 'next/head'
//import styles from '@/styles/experiment/index.module.scss'
function Dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo1.svg" />
      </Head>
      <Layout>
        <main>
          <DashboardPage />
          <div className="overlay" />
        </main>
      </Layout>
    </>
  )
}

export default Dashboard
