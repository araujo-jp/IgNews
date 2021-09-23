import Head from 'next/head'
import { SubcribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubcribeButton />
        </section>

        <img src="/images/avatar.svg" alt="ig news avatar" />
        
      </main>
    </>
  )
}
