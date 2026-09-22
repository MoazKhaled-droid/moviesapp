import { useNavigate } from 'react-router-dom';
import { useWishList } from '../../contexts/wishListContext';
import styles from './WishListCard.module.css';

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;

export default function WishListCard({ item }) {
  const navigate = useNavigate();
  const { removeFromWishList } = useWishList();

  const handleNavigate = () => {
    const path = item.type === 'movie' ? `/movies/${item.id}` : `/tv/${item.id}`;
    navigate(path);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    removeFromWishList(item.id);
  };

  const year = item.releaseDate ? item.releaseDate.split('-')[0] : '';

  return (
    <div className={styles.card} onClick={handleNavigate}>
      <div className={styles.imageContainer}>
        <img 
          src={item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : '/fallback.jpg'} 
          alt={item.title} 
          className={styles.poster}
        />
        <div className={styles.typeBadge}>
          {item.type.toUpperCase()}
        </div>
        
        <div className={styles.hoverOverlay}>
          <button className={styles.viewDetailsBtn}>View Details</button>
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.meta}>{year}</p>
        
        <button className={styles.removeBtn} onClick={handleRemove}>
          <span className={styles.xIcon}>✕</span> Remove from Wishlist
        </button>
      </div>
    </div>
  );
}