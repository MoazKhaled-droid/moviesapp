import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navContainer}>
      <button 
        className={styles.burgerBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <NavLink 
          to="/movies" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
          onClick={() => setIsOpen(false)}
        >
          Movies
        </NavLink>
        <NavLink 
          to="/tv" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
          onClick={() => setIsOpen(false)}
        >
          TV Shows
        </NavLink>
      </div>
    </nav>
  );
}

export default MainNav;