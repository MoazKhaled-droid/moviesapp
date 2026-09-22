import { useWishList } from '../../contexts/wishListContext';
import WishListCard from './WishListCard';
import styles from './WishListGrid.module.css';

export default function WishListGrid() {
  const { wishList } = useWishList();

  if (wishList.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>Your wishlist is empty. Start adding some movies or TV shows!</p>
      </div>
    );
  }

  return (
    <div className={styles.gridContainer}>
      {wishList.map((item) => (
        <WishListCard key={item.id} item={item} />
      ))}
    </div>
  );
}