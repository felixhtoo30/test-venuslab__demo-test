import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'


export default function About() {
  return (
    <>
      <Head>
        <title>VenusLab - About</title>
        <meta name="description" content="Venus Lab - Demo Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        
      </main>
      <Footer />
    </>
  )
}