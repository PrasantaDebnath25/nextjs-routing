import React from 'react';
import Link from 'next/link';
// import img from './img4.jpg';
import { useRouter } from 'next/router';
// import Image from 'next/image';

export default function postFunction({ posts }) {
  const router = useRouter()
  return (
    <ul>
      <h1>My Homepage</h1>
      <button onClick={()=> router.back()}>Back</button>
      {/* <img src="/img4.jpg" alt="Vercel Logo" /> */}
      {/* <Image src="/img4.jpg" format="jpg" alt="Logo" width="200" height="200"/> */}
      {/* <Image src={img} alt="Logo" width={200} height={200} />  */}
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <h3>
              <div onClick={() => router.push('/post/' + post.id)}> {post.title}  </div>
            </h3>
            <p> {post.body} </p>
          </li>
        );
      }
      )}
    </ul>
  )
}

// export async function getStaticProps(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await res.json()
//     return {
//         props: {
//           posts,
//         },
//       }
// }

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}