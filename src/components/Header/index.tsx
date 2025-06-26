import styles from './index.module.css';
import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/movies">Movies</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/shows">TV Shows</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navTitle}>
              Movie Search
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
