import { useSearchParams } from 'react-router-dom';
import styles from './Pagination.module.css';

export default function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      searchParams.set('page', newPage);
      setSearchParams(searchParams);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button 
        className={styles.btn} 
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt; Previous
      </button>
      
      <span className={styles.pageInfo}>
        {currentPage}
      </span>

      <button 
        className={styles.btn} 
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next &gt;
      </button>
    </div>
  );
}