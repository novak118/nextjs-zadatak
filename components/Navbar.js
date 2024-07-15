import Link from 'next/Link';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';
import styles from '../styles/Home.module.css';

function Navbar() {
  return (
    <div className={styles.home}>
      <Image src="/logo.png" alt="" width={100} height={50} />
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
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
}
export default Navbar;
