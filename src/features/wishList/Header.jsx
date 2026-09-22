import { useWishList } from '../../contexts/wishListContext';
import styles from './Header.module.css';

export default function WishListHeader() {
  const { wishList } = useWishList();
  const totalCount = wishList.length;
  const moviesCount = wishList.filter((item) => item.type === 'movie').length;
  const tvShowsCount = wishList.filter((item) => item.type === 'tv').length;

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>My Wishlist</h1>
      <div className={styles.stats}>
        <span className={styles.total}>{totalCount} saved</span>
        <span className={styles.badgeMovie}>{moviesCount} movie{moviesCount !== 1 ? 's' : ''}</span>
        <span className={styles.badgeTv}>{tvShowsCount} TV show{tvShowsCount !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
}