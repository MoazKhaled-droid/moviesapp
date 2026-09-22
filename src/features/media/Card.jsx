import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { useWishList } from "../../contexts/wishListContext";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;

export default function Card({ item, type }) {
  const navigate = useNavigate();

  /* =========================================================================
     [LOGIC COMMENTED OUT FOR CONTEXT]
     قم بإلغاء التعليق عن هذا الكود بعد إنشاء الـ context 
  ========================================================================= */

  const { wishList, addToWishList, removeFromWishList } = useWishList();

  const isInWish = wishList?.some((wishItem) => wishItem.id === item.id);

  const handleAddToWishList = (e) => {
    e.stopPropagation();
    addToWishList({
      ...item,
      type,
    });
  };

  const handleRemoveFromWishList = (e) => {
    e.stopPropagation();
    removeFromWishList(item.id);
  };

  /* ========================================================================= */

  const handleNavigate = () => {
    const path = type === "movie" ? `/movies/${item.id}` : `/tv/${item.id}`;
    navigate(path);
  };

  const year = item.releaseDate ? item.releaseDate.split("-")[0] : "";

  return (
    <div className={styles.card} onClick={handleNavigate}>
      <div className={styles.imageContainer}>
        <img
          src={
            item.poster_path
              ? `${IMAGE_BASE_URL}${item.poster_path}`
              : "/fallback.jpg"
          }
          alt={item.title}
          className={styles.poster}
        />
        <div className={styles.badges}>
          <span className={styles.typeBadge}>{type.toUpperCase()}</span>
        </div>
        <button
          className={`${styles.wishBtn} ${isInWish ? styles.activeWish : ""}`}
          onClick={isInWish ? handleRemoveFromWishList : handleAddToWishList}
        >
          ♥
        </button>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.meta}>
          <span>{year}</span>
          <span className={styles.rating}>
            ★ {item.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
