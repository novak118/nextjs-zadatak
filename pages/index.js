'use client';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/Link';
import { getImageSrc } from '../utils/getImageSrc';

function Home({ articles }) {
  const articlesContent = articles.map((article) => (
    <>
      <div className={styles.card}>
        <div
          key={article.id}
          className={styles.box}
          style={{
            width: '460px',
            height: '250px',
            backgroundImage: `url(${getImageSrc(article.category)})`,
          }}
        ></div>
        <div className={styles.text}>
          <Link href={`/category/${article.category}`} legacyBehavior>
            <a className={styles.button}>{article.category}</a>
          </Link>
          <Link href={`/articles/${article.id}`} legacyBehavior>
            <a className={styles.articleTitle}>{article.title}</a>
          </Link>
          <p className={styles.content}>{article.content}</p>
        </div>
      </div>
    </>
  ));
  const footer = (
    <div>
      <h1>Osnovne Informacije</h1>
      <p>Email: creative@gmail.com</p>
      <p>Phone: +387 66 111 222</p>
      <p>Creative Market - 2024. Sva prava zadržana</p>
    </div>
  );

  return <Layout articles={articlesContent} footer={footer} />;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}
export default Home;
