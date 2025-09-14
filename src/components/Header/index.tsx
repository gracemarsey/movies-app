import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import styles from './index.module.css';
import { Link } from '@tanstack/react-router';
import { usePostUser, type UserResponse } from '../../queries/user/getUser';
import { useMoviesStore } from '../../store';

const Header = () => {
  const [localUsername, setLocalUsername] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { username, setUsername } = useMoviesStore();

  const onSuccess = (data: UserResponse) => {
    if ('username' in data) {
      setUsername(data.username);
      setLocalUsername('');
      setError(null);
    } else {
      setError(data.error);
    }
  };

  const onError = () => setError('An error occurred while fetching the user data.');

  const { mutate: onPostUser } = usePostUser(onSuccess, onError);

  const handleLogin = () => {
    onPostUser(localUsername);
  };

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

      {username ? (
        <div className={styles.userSection}>
          <p>Welcome, {username}!</p>
          <Button onClick={() => setUsername(undefined)}>Logout</Button>
        </div>
      ) : (
        <div className={styles.userSection}>
          <div className={styles.loginSection}>
            <Input placeholder="Enter username" value={localUsername} setValue={setLocalUsername} />
            {error && <p className={styles.error}>{error}</p>}
          </div>

          <Button onClick={handleLogin}>Login</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
