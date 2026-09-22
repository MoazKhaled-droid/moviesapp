import { useSearchParams } from 'react-router-dom';
import styles from './SearchHeader.module.css';

export default function SearchHeader({ totalResults = 0 }) {
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get('query') || searchParams.get('q') || '';

  return (
    <div className={styles.headerContainer}>
      <span className={styles.subtitle}>SEARCH RESULTS FOR</span>
      <h1 className={styles.queryTitle}>"{query}"</h1>
      <span className={styles.resultsCount}>{totalResults} results found</span>
    </div>
  );
}