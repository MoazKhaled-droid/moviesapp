import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";
function SearchBar() {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setQuery("")
    setIsModalOpen(false);
  };

  return (
    <div className={styles.searchContainer}>
      
      <form className={styles.desktopForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search titles, genres..."
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.searchIconBtn} aria-label="Search">
          <Search size={20} />
        </button>
      </form>

      <button 
        className={styles.mobileTriggerBtn} 
        onClick={() => setIsModalOpen(true)}
        aria-label="Open Search"
      >
        <Search size={20}/>
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button 
              className={styles.closeModalBtn} 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close Search"
            >
              ✕
            </button>
            
            <form className={styles.modalForm} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search movies, tv shows..."
                className={styles.modalInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus 
              />
              <button type="submit" className={styles.searchIconBtn} style={{ right: '15px' }} aria-label="Search">
                <Search size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default SearchBar;