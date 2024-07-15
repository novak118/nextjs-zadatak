import Link from 'next/Link';
import styles from '../styles/Home.module.css';

function Blog() {
  return (
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
}
export default Blog;
