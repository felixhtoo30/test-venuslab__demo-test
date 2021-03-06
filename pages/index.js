import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Project from '../components/project'
import WhatWeDo from '../components/whatwedo'
import { projData } from '../data'


export default function Home() {
  return (
    <div>
      <Head>
        <title>VenusLab</title>
        <meta name="description" content="Venus Lab - Demo Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Hero />
        <section id="projects">
          {projData.map((proj, key) => (
              <Project proj={proj} keyVal={key} key={key} />
          ))}
        </section>
        <WhatWeDo />
      </main>
      <Footer />
    </div>
  )
}
