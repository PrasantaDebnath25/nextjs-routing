import React from 'react';
import Head from 'next/head'


export default function contact() {
  return (
    <div className="container">
      <Head>
        <title>My page title</title>

      </Head>

      <main className="main">

        <div className="grid">
          <a href="/post" className="card">
            <h3>Post Page for page 1 &rarr;</h3>
            <p>Go To Post Page for page 1</p>
          </a>

          <a href="/post/1" className="card">
            <h3>Post Page &rarr;</h3>
            <p>Go To Post Page</p>
          </a>

        </div>
      </main>

    </div>
  )
}