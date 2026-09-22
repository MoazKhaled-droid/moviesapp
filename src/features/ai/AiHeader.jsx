import styles from './AiHeader.module.css';

export default function AiHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.iconContainer}>
        <span className={styles.sparkle}>✦</span>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>AI Movie Assistant</h2>
        <div className={styles.status}>
          <span className={styles.dot}></span>
          <span>Online · Powered by CimaVault AI</span>
        </div>
      </div>
    </div>
  );
}