'use client';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import Image from 'next/image'
import { getImageSrc } from '../utils/getImageSrc'
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import createClient from "@searchkit/instantsearch-client";

const searchClient = createClient({
  url: "/api/search",
});

function Home({articles}) {



const header = (
<div className={styles.home}>
  <Image src="/logo.png"  width={100} height={50}/>
  <div className={styles.title}>
      <Link href="/photos/photos" legacyBehavior>
        <a>Photos</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Grapihcs</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Templates</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Themes</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Fonts</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Add-Ons</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>3D</a>
      </Link>
      <InstantSearch
      searchClient={searchClient}
      indexName={articles.title}
      placeholder="alooo"
    >
      <SearchBox/>
      <Hits/>
    </InstantSearch>
      </div>
</div>

)
const blog = (
  <div className={styles.home}>
    <h1>Blog</h1>
  <div className={styles.blogtitle}>
      <Link href="/photos/photos" legacyBehavior>
        <a>Inspiration</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>How-To</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Trends</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Tips & Tricks</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Business</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Humor</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Community</a>
      </Link>
      <Link href="/photos/photos" legacyBehavior>
        <a>Announcements</a>
      </Link>
      </div>
  </div>
  
  )

  const articlesContent =
    articles.map((article) => (
    <><div className={styles.card}><div key={article.id} className={styles.box} style={{
        width: '460px', height: '250px',
        backgroundImage: `url(${getImageSrc(article.category)})`,
      }}>
      </div>
      <div className={styles.text}>
          <Link href={`/category/${article.category}`} legacyBehavior>
            <a className={styles.button} >{article.category}</a>
          </Link>
          <Link href={`/articles/${article.id}`} legacyBehavior>
            <a  className={styles.articleTitle}>{article.title}</a>
          </Link>
          <p className={styles.content}>{article.content}</p>
        </div></div></>
     
    
  ));
  const footer = (
    <div>
    <h1>Osnovne Informacije</h1>
    <p>Email: kokotnovak767@gmail.com</p>
    <p>Phone: +387 66 111 222</p>
    <p>Creative Market - 2024. Sva prava zadržana</p>
    
    </div>
    
    )



  return (
  
    <Layout header={header} articles={articlesContent} footer={footer} blog={blog}/>
  
  )
  
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/articles") 
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  };
}
export default  Home