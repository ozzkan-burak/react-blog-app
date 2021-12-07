import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components/presentations';
import { getPosts } from '../services';



export default function Home({posts}) {
  console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Burak's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          {posts.map((post)=> <PostCard post={post} key={post.title}/>)}
        </div>
        <div className="lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  
  return {
    props: { posts },
  };
}
