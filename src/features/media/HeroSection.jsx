import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

export default function HeroSection({ item, type }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const path = type === 'movie' ? `/movies/${item.id}` : `/tv/${item.id}`;
    navigate(path);
  };

  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const year = date ? date.split('-')[0] : '';
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL
  return (
    <div 
      className={styles.heroContainer} 
      onClick={handleNavigate}
      style={{ backgroundImage: `url(${IMAGE_BASE_URL}${item.backdrop_path})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.badges}>
          <span className={styles.statusBadge}>NOW PLAYING</span>
          <span className={styles.typeBadge}>{type.toUpperCase()}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.overview}>{item.overview}</p>
        <div className={styles.meta}>
          <span className={styles.rating}>★ {item.vote_average?.toFixed(1)}</span>
          <span className={styles.year}>{year}</span>
        </div>
      </div>
    </div>
  );
}