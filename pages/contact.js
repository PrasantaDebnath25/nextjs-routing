import React from 'react';
import Link from 'next/link';
import Head from 'next/head'

export default function contact() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        
      </Head>
      <Link href="/post">
          Go To Post Page
      </Link>

      <Link href="/post/1">
          Go To Post Page for page 1
      </Link>
    </div>
  )
}