import { useWishList } from '../../contexts/wishListContext';
import styles from './DetailsHero.module.css';

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;

export default function DetailsHero({ item, type }) {
  const { wishList, addToWishList, removeFromWishList } = useWishList();

  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const year = date ? date.split('-')[0] : '';
  const rating = item.vote_average ? item.vote_average.toFixed(1) : 'NR';
  
  const genres = item.genres ? item.genres.map(g => g.name).join(', ') : '';

  const isInWish = wishList.some((wishItem) => wishItem.id === item.id);

  const toggleWishList = () => {
    const normalizedItem = {
      ...item,
      title: title,
      releaseDate: date,
      type: type, 
    };

    if (isInWish) {
      removeFromWishList(item.id);
    } else {
      addToWishList(normalizedItem);
    }
  };

  return (
    <div 
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${IMAGE_BASE_URL}${item.backdrop_path})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          
          <div className={styles.posterWrapper}>
            <img 
              src={`${IMAGE_BASE_URL}${item.poster_path}`} 
              alt={title} 
              className={styles.poster}
            />
          </div>

          <div className={styles.info}>
            <div className={styles.badges}>
              <span className={styles.typeBadge}>{type.toUpperCase()}</span>
              <span className={styles.genreText}>{genres}</span>
            </div>
            
            <h1 className={styles.title}>{title}</h1>
            
            <div className={styles.meta}>
              <span className={styles.rating}>★ {rating}/10</span>
              <span className={styles.year}>{year}</span>
            </div>

            <div className={styles.actions}>
              <button 
                className={`${styles.wishBtn} ${isInWish ? styles.activeWish : ''}`}
                onClick={toggleWishList}
              >
                {isInWish ? '♥ Remove from Wishlist' : '♡ Add to Wishlist'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}