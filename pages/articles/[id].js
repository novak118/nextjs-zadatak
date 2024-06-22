import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { getImageSrc } from '../../utils/getImageSrc'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/Link'
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import createClient from "@searchkit/instantsearch-client";

const searchClient = createClient({
    url: "/api/search",
  });
function Article({article}){
    const router = useRouter()
    if (router.isFallback){
        return <div>"loading..."</div>
    }

    const header =(
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
            indexName={article.desc}
            placeholder="alooo"
          >
            <SearchBox />
            <Hits />
          </InstantSearch>
            </div>
      </div>
    )
    const blog =(
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

    const content= (
        <div className={styles.cardArticle}>
            <article>
                <p className={styles.cardTitle}>
                    {article.title}
                </p>
            </article>
            
            <Image
            className={styles.image}
            src={getImageSrc(article.category)}
            alt= 'category'
            width={600}
            height={400}
            />
            <p className={styles.desc}>{article.description}</p>
            
        </div>
    )
        const footer = (
        <div>     
      <h2>footer</h2>
      <button className={styles.code} onClick={() => router.back}>Nazad</button>
      </div>
 
        )
    return (
       <Layout header={header} blog={blog} articles={content} footer={footer}></Layout>
    )


}

export async function getStaticPaths(){
    const res = await fetch("http://localhost:3000/api/articles")
    const articles = await res.json()
    const paths = articles.map(article => ({
        params:{id:article.id.toString()}
 
    }))
    return {
        paths,fallback:true
    }
}
export async function getStaticProps({params}){
    const res = await fetch("http://localhost:3000/api/articles")
    const articles = await res.json()
    const article = articles.find(article => article.id === params.id)
    return {props:{article}}
}
export default Article