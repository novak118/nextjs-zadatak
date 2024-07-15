import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Link from 'next/Link';
import SearchBar from '../components/SearchBar';
import Image from 'next/image';

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (query) {
      fetch('http://localhost:3000/api/search')
        .then((res) => res.json())
        .then((data) => setArticles(data))
        .catch((err) => console.error(err));
    }
  }, [query]);
  const header = (
    <div className={styles.home}>
      <Image alt="logo" src="/logo.png" width={100} height={50} />
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
        <SearchBar />
      </div>
    </div>
  );

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
  );
  const articlesContent = (
    <>
      <h1>
        Search Results for <span>{query}</span>
      </h1>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>No articles found</p>
        </>
      )}
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
      header={header}
      blog={blog}
      articles={articlesContent}
      footer={footer}
    />
  );
};

export default SearchResults;
