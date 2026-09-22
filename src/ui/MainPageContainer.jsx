import styles from './MainPageContainer.module.css';

export default function MainPageContainer({children}) {
  return (
    <main className={styles.mainPageContainer}>{children}</main>
  )
}
