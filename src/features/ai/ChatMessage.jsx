import styles from './ChatMessage.module.css';

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`${styles.messageRow} ${isUser ? styles.userRow : styles.aiRow}`}>
      {!isUser && (
        <div className={styles.aiAvatar}>✦</div>
      )}
      
      <div className={`${styles.bubble} ${isUser ? styles.userBubble : styles.aiBubble}`}>
        {message.content}
      </div>

      {isUser && (
        <div className={styles.userAvatar}>YOU</div>
      )}
    </div>
  );
}