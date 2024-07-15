import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import { getImageSrc } from '../../utils/getImageSrc';
import Layout from '../../components/Layout';
import Image from 'next/image';

function Article({ article }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>"loading..."</div>;
  }

 

  const content = (
    <div className={styles.cardArticle}>
      <article>
        <p className={styles.cardTitle}>{article.title}</p>
      </article>

      <Image
        className={styles.image}
        src={getImageSrc(article.category)}
        alt="category"
        width={600}
        height={400}
      />
      <p className={styles.desc}>{article.description}</p>
    </div>
  );
  const footer = (
    <div>
      <h2>footer</h2>
      <button className={styles.code} onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
  return (
    <Layout
      articles={content}
      footer={footer}
    ></Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/api/articles');
  const articles = await res.json();
  const article = articles.find((article) => article.id === params.id);
  return { props: { article } };
}
export default Article;
