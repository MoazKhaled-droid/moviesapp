import { useState } from 'react';
import styles from './ChatInput.module.css';

const SUGGESTIONS = [
  "Recommend a sci-fi epic",
  "Best drama series?",
  "Something thrilling tonight",
  "Hidden gem romance films"
];

export default function ChatInput({ onSendMessage, isLoading, showSuggestions }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className={styles.inputSection}>
      {showSuggestions && (
        <div className={styles.suggestions}>
          {SUGGESTIONS.map((sug, index) => (
            <button 
              key={index} 
              className={styles.suggestionChip}
              onClick={() => onSendMessage(sug)}
              disabled={isLoading}
            >
              {sug}
            </button>
          ))}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Ask about movies, get recommendations..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className={styles.sendBtn} 
          disabled={!input.trim() || isLoading}
        >
          ↑
        </button>
      </form>
    </div>
  );
}