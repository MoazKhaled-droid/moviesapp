import Card from './Card';
import styles from './List.module.css';

export default function List({ list, type, count, title }) {
  const headerTitle = title || (type === 'movie' ? 'Movies' : 'TV Shows');

  return (
    <div className={styles.listSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{headerTitle}</h2>
        {count !== undefined && <span className={styles.count}>{count} items</span>}
      </div>
      
      <div className={styles.grid}>
        {list.map((item) => {
          const normalizedItem = {
            ...item,
            title: item.title || item.name,
            releaseDate: item.release_date || item.first_air_date,
          };

          return <Card key={item.id} item={normalizedItem} type={type || item["media_type"]}  />;
        })}
      </div>
    </div>
  );
}