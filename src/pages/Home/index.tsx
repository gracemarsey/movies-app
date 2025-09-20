import { useState, type ChangeEvent } from 'react';
import { useMovie } from '../../queries/search';
import styles from './index.module.css';

const HomePage = () => {
  const [search, setSearch] = useState('');

  const { data } = useMovie(search);

  console.log(data);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    setSearch(value);
  };

  const isError = data && 'Error' in data;

  return (
    <div className={styles.mainContainer}>
      <input value={search} onChange={onChange} />
      {isError && <div>Error</div>}
      {!isError && data && (
        <div>
          <p>{data.Title}</p>
          <p>{data.Runtime}</p>
          <p>{data.imdbRating}</p>
          <p>{data.Year}</p>
          <img src={data.Poster} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
