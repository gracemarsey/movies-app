import { useState } from 'react';
import { useMovie } from '../../queries/search';
import styles from './index.module.css';

const HomePage = () => {
  const [search, setSearch] = useState('shrek');

  const { data } = useMovie(search);

  console.log(data);

  if (!data || 'Error' in data) {
    return <div>Error</div>;
  }

  return <div className={styles.mainContainer}>{data.Title}</div>;
};

export default HomePage;
