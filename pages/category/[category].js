import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css'
import Link from "next/Link";
import Image from "next/image";
import { getImageSrc } from "../../utils/getImageSrc";
import Layout from "../../components/Layout";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import createClient from "@searchkit/instantsearch-client";

const searchClient = createClient({
  url: "/api/search",
});

function Category ({articles}){
 const router = useRouter()



 if(router.isFallback){
    return <div>Loading..</div>
 }

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
        <SearchBox />
        <Hits />
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

  const articlesContent = (
    <>
    <div className={styles.cardArticle}> 
       <Image
          className={styles.image}
          src={getImageSrc(router.query.category)}
          alt="category"
          width={600}
          height={400} /><div >  
              <h1 className={styles.cardTitle}>Clanci u kategorijama: {router.query.category.toUpperCase()}</h1>
              <ul className={styles.categoryTitle}>
            {articles.map((article ) => (
                <li  key={article.id}>
                <Link href={`/articles/${article.id}`} legacyBehavior>
                    <a >{article.title}</a>
                </Link>
                </li>
            ))}
        </ul>
          </div>
          </div>
</>
  )

  const footer = (
    <>
    <h2>Footer</h2>
    <button onClick={() => router.back}>Nazad</button>
    </>
  )
  return(
   <Layout header={header} blog={blog} articles={articlesContent} footer={footer}  />
  )
}
export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/articles')
    const articles = await res.json()

    const paths = [...new Set(articles.map(article => article.category))].map(category =>
    ({
        params : {category}
    })
)
return {paths, fallback: true}
}
export async function getStaticProps({params}){
    const res = await fetch('http://localhost:3000/api/articles')
    const articles = await res.json()

    const categoryArticles = articles.filter(article => article.category == params.category)
    return {props : {articles: categoryArticles}}
}
export default Category