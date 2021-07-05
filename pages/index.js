import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Olá, leia o README para saber como usar essa aplicação.
        </h1>

        <p className={styles.description}>
          👉{' '}
          <code className={styles.code}>https://github.com/ricardaonao/serv-node-next-vercel-mongo-1</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
