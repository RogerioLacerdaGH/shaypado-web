import React from 'react';
import styles from './styles.module.css';

const Search = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.trim(); // Remover espaços em branco no início e no final
    setSearchTerm(searchTerm);
  };

  return (
    <div className={styles.allContainer}>
      <h2>Buscar por aluno</h2>
      <input
        type="text"
        placeholder="Digite o nome/nome completo do aluno que você deseja pesquisar"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;