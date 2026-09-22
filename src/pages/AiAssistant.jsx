import { useState, useEffect, useRef } from 'react';
import { startAiChat, sendMessageToAi } from '../services/gimini';
import MainPageContainer from '../ui/MainPageContainer';
import AiHeader from '../features/ai/AiHeader';
import ChatMessage from '../features/ai/ChatMessage';
import ChatInput from '../features/ai/ChatInput';
import styles from './AiAssistant.module.css';

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: "Hi there! I'm your AI Movie Assistant 🎬 Tell me what kind of movie or show you're in the mood for and I'll give you tailored recommendations!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    startAiChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

const handleSendMessage = async (text) => {
    const updatedMessages = [...messages, { role: 'user', content: text }];
    setMessages(updatedMessages);
    setIsLoading(true);

    const response = await sendMessageToAi(updatedMessages);
    
    setMessages(prev => [...prev, { role: 'ai', content: response }]);
    setIsLoading(false);
  };

  return (
    <MainPageContainer>
      <div className={styles.chatContainer}>
        <AiHeader />
        
        <div className={styles.messagesArea}>
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {isLoading && (
            <div className={styles.loadingIndicator}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading} 
          showSuggestions={messages.length === 1} // إظهار المقترحات فقط في البداية
        />
      </div>
    </MainPageContainer>
  );
}