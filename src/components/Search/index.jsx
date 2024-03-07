import React from 'react';
import styles from './styles.module.css';

const Search = ({ title, placeholder, setSearchTerm }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.trim(); // Remover espaços em branco no início e no final
    setSearchTerm(searchTerm);
  };

  return (
    <div className={styles.allContainer}>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
