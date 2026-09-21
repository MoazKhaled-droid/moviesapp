import { NavLink } from "react-router-dom";
import styles from "./SecoundaryNav.module.css";
import ThemeBtn from "./ThemeBtn";
import { Heart } from "lucide-react";

function SecoundaryNav() {
  return (
    <div className={styles.secondaryNav}>
      <NavLink to="/wishlist" className={styles.wishlistLink}>
        <Heart size={20} />
        <span>Wishlist</span>
      </NavLink>

      <NavLink to="/ai" className={styles.aiButton}>
        ✦
      </NavLink>

      <ThemeBtn />
    </div>
  );
}

export default SecoundaryNav;
