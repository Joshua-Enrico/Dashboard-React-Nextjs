import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Container'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container/>
    </div>
  )
}
