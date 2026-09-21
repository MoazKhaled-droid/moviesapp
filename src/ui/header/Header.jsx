import styles from "./Header.module.css";
import Logo from "./Logo";
import MainNav from "./MainNav";
import SearchBar from "./SearchBar";
import SecoundaryNav from "./SecoundaryNav";

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.leftSection}>
          <Logo />
          <MainNav />
        </div>

        <div className={styles.rightSection}>
          <SearchBar />
          <SecoundaryNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
