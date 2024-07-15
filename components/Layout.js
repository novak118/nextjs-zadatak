import Head from 'next/head';
import styles from '../styles/layout.module.css';
import Navbar from './Navbar';
import Blog from './Blog';

function Layout({ header, footer, articles, blog }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Market</title>
      </Head>
      <header className={styles.header}><Navbar/></header>
      <main>
        <section className={styles.blog}><Blog/></section>
        <section className={styles.articles}>{articles}</section>
        <section className={styles.footer}>{footer}</section>
      </main>
    </div>
  );
}
export default Layout;
