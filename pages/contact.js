import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function contact() {
  return (


<div className={styles.container}>
<Head>
        <title>My page title</title>
        
      </Head>
      
      {/* <Link href="/contact" className={styles.main}>
        <a>Go to Contact Page</a>
      </Link>
      
      <Link href="/post">
          Go To Post Page
      </Link> */}

      <main className={styles.main}>

        <div className={styles.grid}>
          <a href="/post" className={styles.card}>
            <h3>Post Page for page 1 &rarr;</h3>
            <p>Go To Post Page for page 1</p>
          </a>

          <a href="/post/1" className={styles.card}>
            <h3>Post Page &rarr;</h3>
            <p>Go To Post Page</p>
          </a>

        </div>
      </main>

    </div>
  )
}