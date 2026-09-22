import styles from './NoResults.module.css';

export default function NoResults({ 
  title = "No Results Found", 
  message = "We couldn't find anything matching your search. Please try a different keyword." 
}) {

  return (
    <div className={styles.container}>
      <div className={styles.icon}>🎬</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
}