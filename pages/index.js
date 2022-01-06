import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Container from '../components/Container'
import styles from '../styles/Home.module.css'

const Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
`;


export default function Home() {
  return (
    <Div >
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container/>
    </Div>
  )
}
