import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.youtubeSpinner}></div>
    </div>
  );
}

export default Loader;