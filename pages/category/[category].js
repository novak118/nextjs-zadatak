import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Link from 'next/Link';
import Image from 'next/image';
import { getImageSrc } from '../../utils/getImageSrc';
import Layout from '../../components/Layout';

function Category({ articles }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading..</div>;
  }

 
  const articlesContent = (
    <>
      <div className={styles.cardArticle}>
        <Image
          className={styles.image}
          src={getImageSrc(router.query.category)}
          alt="category"
          width={600}
          height={400}
        />
        <div>
          <h1 className={styles.cardTitle}>
            Clanci u kategorijama: {router.query.category.toUpperCase()}
          </h1>
          <ul className={styles.categoryTitle}>
            {articles.map((article) => (
              <li key={article.id}>
                <Link href={`/articles/${article.id}`} legacyBehavior>
                  <a>{article.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  const footer = (
    <>
      <h2>Footer</h2>
      <button className={styles.code} onClick={() => router.back()}>
        Back
      </button>
    </>
  );
  return (
    <Layout
      articles={articlesContent}
      footer={footer}
    />
  );
}
export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();

  const paths = [...new Set(articles.map((article) => article.category))].map(
    (category) => ({
      params: { category },
    }),
  );
  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();

  const categoryArticles = articles.filter(
    (article) => article.category == params.category,
  );
  return { props: { articles: categoryArticles } };
}
export default Category;
