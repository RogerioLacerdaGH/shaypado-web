import styles from './styles.module.css'

const Search = () => {
  return (
    <div className={styles.allContainer}>
      <h2>
        Buscar por aluno
      </h2>
      <input type="text" placeholder='Insina o nome/nome completo do aluno que você deseja pesquisar' />
    </div>
  );
}

export default Search